var CHROME_MEDIA_SOURCE = 'screen';
var CHROME_MEDIA_SOURCE_ID = null;
var CHROME_MEDIA_SOURCE_AUDIO = false;

function checkExtension() {

}


function captureUserMedia(callback) {
    var video = document.createElement('video');
    video.muted = true;
    video.volume = 0;
    try {
        video.setAttributeNode(document.createAttribute('autoplay'));
        video.setAttributeNode(document.createAttribute('playsinline'));
        video.setAttributeNode(document.createAttribute('controls'));
    } catch (e) {
        video.setAttribute('autoplay', true);
        video.setAttribute('playsinline', true);
        video.setAttribute('controls', true);
    }

    var screen_constraints = {
        mandatory: {
            chromeMediaSource: CHROME_MEDIA_SOURCE,
            maxWidth: screen.width > 1920 ? screen.width : 1920,
            maxHeight: screen.height > 1080 ? screen.height : 1080
            // minAspectRatio: 1.77
        },
        optional: [{ // non-official Google-only optional constraints
            googTemporalLayeredScreencast: true
        }, {
            googLeakyBucket: true
        }]
    };

    if (isEdge) {
        navigator.getDisplayMedia({video: true}).then(stream => {
            callback(stream);
        }, error => {
            if (location.protocol === 'http:') {
                alert('Please test this WebRTC experiment on HTTPS.');
            } else {
                alert('Please use Edge >= 17.');
            }
        });
    } else if (DetectRTC.browser.name === 'Chrome' && CHROME_MEDIA_SOURCE == 'desktop' && !CHROME_MEDIA_SOURCE_ID) {
        getSourceIdWithAudio(function (sourceId, canRequestAudioTrack) {
            CHROME_MEDIA_SOURCE_ID = sourceId;
            CHROME_MEDIA_SOURCE_AUDIO = canRequestAudioTrack === true;
            captureUserMedia(callback);
        });
    } else {
        if (DetectRTC.browser.name === 'Chrome' && CHROME_MEDIA_SOURCE == 'desktop') {
            if (screen_constraints.mandatory) {
                screen_constraints.mandatory.chromeMediaSourceId = CHROME_MEDIA_SOURCE_ID;
            }
            else {
                screen_constraints.chromeMediaSourceId = CHROME_MEDIA_SOURCE_ID;
            }
        }


        var constraints = {
            audio: false,
            video: screen_constraints
        };

        if (CHROME_MEDIA_SOURCE_AUDIO === true) {
            constraints.audio = screen_constraints;
        }

        if (!!navigator.mozGetUserMedia) {
            constraints.audio = false;
            constraints.video = {
                mozMediaSource: 'window',
                mediaSource: 'window',
                width: screen.width,
                height: screen.height
            };
        }

        getUserMediaScreenCampture({
            video: video,
            constraints: constraints,
            onsuccess: function (stream) {
                callback(stream);
            },
            onerror: function (error) {
                if (DetectRTC.browser.name === 'Chrome' && location.protocol === 'http:') {
                    alert('Please test this WebRTC experiment on HTTPS.');
                } else if (DetectRTC.browser.name === 'Chrome') {
                    alert('Screen capturing is either denied or not supported. Please install chrome extension for screen capturing or run chrome with command-line flag: --enable-usermedia-screen-capturing');
                } else {
                    alert(error.toString());
                }
            }
        });
    }
}


if (DetectRTC.browser.name === 'Chrome') {
    getChromeExtensionStatus(function (status) {
        if (status == 'installed-enabled') {
            console.log('XXXXXXXX');
        } else {
            console.log('YYYYYYYY');
        }
    });
}

captureUserMedia((stream) => {
    console.log("stream", stream);
});