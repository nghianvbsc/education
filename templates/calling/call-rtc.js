var socket = io.connect('', {transports: ['websocket']});
var RTCPeerList = {};
var streamObjects = {};
var localStream = null;

/**
 * HANDLE callback
 */
function setRemoteDescriptionError(error) {
    console.log("setRemoteDescriptionError", error);
}

function setRemoteDescriptionSuccess() {

}

function addIceCandidateError(error) {
    console.log("addIceCandidateError", error);
}

function addIceCandidateSuccess() {

}

function createAnswerError(error) {
    console.log("createAnswerError", error);

}

function createOfferError(error) {
    console.log("createOfferError", error);

}

function onaddstream(userId) {
    return function (stream) {
        streamObjects[userId] = stream.stream;
        if (userId === currentViewId) {
            attachMediaStream(document.getElementById(mainScreenId), stream.stream);
        }

        attachMediaStream(document.getElementById(`${baseNameClassCameraView}${userId}`), stream.stream);
    }
}

function onremovestream(userId) {

}

/**
 * Lắng nghe kết quả kiểm tra room
 */

function getMyMedia(callback) {
    getUserMedia({video: true, audio: true}, callback, function (error) {
        console.log("GET UserMedia error!!", error);
        alert('GET UserMedia error!!');
    });
}

function createPeerConnection(withUserId, type, offerSPD) {
    if (RTCPeerList[withUserId]) {
        RTCPeerList[withUserId].close();
        RTCPeerList[withUserId] = null;
    }

    try {
        RTCPeerList[withUserId] = new RTCPeerConnection(iceServers, optional);
        RTCPeerList[withUserId].onicecandidate = function (event) {
            if (event.candidate) {
                socket.emit('message', {
                    type: 'candidate',
                    label: event.candidate.sdpMLineIndex,
                    id: event.candidate.sdpMid,
                    candidate: event.candidate.candidate,
                    groupId: groupId,
                    from: myId,
                    dest: withUserId
                });
            }
        };
    } catch (e) {
        console.log('Failed to create PeerConnection, exception: ' + e.message);
        alert('Cannot create RTCPeerConnection object.');
        return;
    }

    RTCPeerList[withUserId].onaddstream = onaddstream(withUserId);

    RTCPeerList[withUserId].onremovestream = onremovestream(withUserId);

    RTCPeerList[withUserId].addStream(localStream);

    if (type === 'offer') {
        var constraints = {'optional': [], 'mandatory': {'MozDontOfferDataChannel': true}};
        if (webrtcDetectedBrowser === 'chrome') {
            for (var prop in constraints.mandatory) {
                if (prop.indexOf('Moz') !== -1) {
                    delete constraints.mandatory[prop];
                }
            }
        }

        RTCPeerList[withUserId].createOffer(function (sessionDescription) {
            sessionDescription.spd = preferOpus(sessionDescription.sdp);
            RTCPeerList[withUserId].setLocalDescription(sessionDescription);

            socket.emit('message', {
                sessionDescription: sessionDescription,
                from: myId,
                type: 'offer',
                dest: withUserId,
                groupId: groupId
            });

        }, createOfferError);

    } else if (type === 'answer') {
        RTCPeerList[withUserId].setRemoteDescription(new RTCSessionDescription(offerSPD), setRemoteDescriptionSuccess, setRemoteDescriptionError);

        RTCPeerList[withUserId].createAnswer(function (sessionDescription) {
            sessionDescription.sdp = preferOpus(sessionDescription.sdp);
            RTCPeerList[withUserId].setLocalDescription(sessionDescription);

            socket.emit('message', {
                sessionDescription: sessionDescription,
                from: myId,
                groupId: groupId,
                type: 'answer',
                dest: withUserId
            });
        }, createAnswerError)
    }
}


/**
 * Lắng nghe sự kiện của group
 */
socket.on(groupId, (message) => {
    if (message.type === 'new-member-join-group') {
        if (message.from !== myId) {
            createPeerConnection(message.from, 'offer');
        }
    } else if (message.type === 'answer' && message.dest === myId) {
        RTCPeerList[message.from].setRemoteDescription(new RTCSessionDescription(message.sessionDescription),
            setRemoteDescriptionSuccess, setRemoteDescriptionError);
    } else if (message.type === 'offer' && message.dest === myId) {
        createPeerConnection(message.from, "answer", message.sessionDescription);
    } else if (message.type === 'candidate' && message.dest === myId) {
        var candidate = new RTCIceCandidate({sdpMLineIndex: message.label, candidate: message.candidate});
        RTCPeerList[message.from].addIceCandidate(candidate, addIceCandidateSuccess, addIceCandidateError);
    } else if (message.type === 'set-main-camera') {
        currentViewId = message.userId;
        if (streamObjects[message.userId]) {
            attachMediaStream(document.getElementById(mainScreenId), streamObjects[message.userId]);
        } else {
            // nếu chưua kết nối với người này, hiển thị camera của giảng viên
            if (streamObjects[managerId]) {
                attachMediaStream(document.getElementById(mainScreenId), streamObjects[managerId]);
            }
        }
    } else if (message.type === 'start-joined-group') {
        startJoinedGroup();
    } else if (message.type === 'end-joined-group') {
        window.location.href = endGroupRedirectTo;
    }
});

function startJoinedGroup() {
    isStart == "true";
    /**
     * Lấy camera và gửi thông báo là có người mới tham gia.
     */
    getMyMedia(function (stream) {
        localStream = stream;
        streamObjects[myId] = localStream;
        attachMediaStream(document.getElementById(`${baseNameClassCameraView}${myId}`), stream);
        $(`#${baseNameClassCameraView}${myId}`).prop('muted', true);

        if (myId == currentViewId) {
            attachMediaStream(document.getElementById(mainScreenId), stream);
        }

        socket.emit('message', {type: 'new-member-join-group', from: myId, groupId});
    });
}

if (isStart == "true") {
    startJoinedGroup();
}

$('.phat-bieu-icon').on('click', function () {
        if (isManager == "false") return;
        let userId = $(this).attr('user-id');
        if (userId != currentViewId) {
            $('.phat-bieu-icon.active').removeClass("active");
            $(this).addClass("active");
            socket.emit('message', {type: 'set-main-camera', userId, groupId});
            //Todo: php gọi ajax lưu id người view ở đây
        } else {
            $('.phat-bieu-icon.active').removeClass("active");
            socket.emit('message', {type: 'set-main-camera', userId: managerId, groupId});
            //Todo: php gọi ajax lưu id người view ở đây
        }
    }
);

$('.start-stream').on('click', function () {
    if (isStart == "false" && isManager == "true") {
        //Todo: php gọi ajax lưu trạng thái buổi học đã bắt đầu vào đây
        socket.emit('message', {type: 'start-joined-group', groupId});
        $(this).remove();
    }
});

$('.end-stream').on('click', function () {
    if (isStart == "true" && isManager == "true") {
        //Todo: php gọi ajax lưu trạng thái buổi học đã kết thúc vào đây
        socket.emit('message', {type: 'end-joined-group', groupId});
        $(this).remove();
    }
});

if (isStart == "true" && isManager == "true") {
    $('.start-stream').remove();
}

