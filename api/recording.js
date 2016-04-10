var fs = require('fs');
var ffmpeg = require('fluent-ffmpeg');
var Promise = require('promise');

var writeFile = Promise.denodeify(require('fs').writeFile);

module.exports = {
    saveRecording: function(blob, destFile) {
        var buf = new Buffer(blob, 'base64'); // decode
        return writeFile(destFile, buf);
    },
    mergeAudioAndVideo: function(audioFilename, videoFilename, finalVideo) {
        var cmd = ffmpeg().input(audioFilename)
                          .input(videoFilename)
                          .audioCodec('aac')
                          .videoCodec('libx264')
                          .on('error', function(err, stdout, stderr) {
                              console.log('an error happened: ' + err.message, stdout, stderr);
                          })
                          .output(finalVideo);

        cmd.run();
    }
}
