var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob);

// getUserMedia
var video_constraintsScreenCapture = {
    mandatory: {},
    optional: []
};

function getUserMediaScreenCampture(options) {
    console.log("vao xxxx");
    function streaming(stream) {
        if (typeof options.onsuccess === 'function') {
            options.onsuccess(stream);
        }

        media = stream;
    }
    console.log("3");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        console.log("4");

        navigator.mediaDevices.getUserMedia(options.constraints || {
            audio: false,
            video: video_constraintsScreenCapture
        }).then(streaming).catch(options.onerror || function(e) {
            console.log("D<D<DDD", e);
            console.error(e);
        });
        return;
    }

    console.log("5");

    var n = navigator,
        media;
    n.getMedia = n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia;
    n.getMedia(options.constraints || {
        audio: true,
        video: video_constraintsScreenCapture
    }, streaming, options.onerror || function(e) {
        console.log("TTTT", e);
        console.error(e);
    });
    console.log("6");

    return media;
}