var recording = require('./recording');

module.exports = {
    saveVideo: function(blobAudio, blobVideo) {
        var ts = new Date().getTime().toString();
        var audioFilename = '/vagrant/storage/a_' + ts + '.wav';
        var videoFilename = '/vagrant/storage/v_' + ts + '.webm';
        var finalVideo = '/vagrant/storage/av_' + ts + '.mp4'

        var audioPromise = recording.saveRecording(blobAudio, audioFilename);
        var videoPromise = recording.saveRecording(blobVideo, videoFilename);

        Promise.all([audioPromise, videoPromise]).then(function(res) {
            recording.mergeAudioAndVideo(audioFilename, videoFilename, finalVideo);
        });

        return finalVideo;
    }
}
