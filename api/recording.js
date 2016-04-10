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
        return new Promise(function (fulfill, reject) {
            console.log('encoding final video');
            var cmd = ffmpeg().input(audioFilename)
                              .input(videoFilename)
                              .audioCodec('aac')
                              .videoCodec('libx264')
                              .on('error', function(err, stdout, stderr) {
                                  reject(err);
                              })
                              .on('end', function(err, stdout, stderr) {
                                  if (err) {
                                      reject(err);
                                  }
                                  else {
                                      console.log('final video encoded');
                                      fulfill(stdout);
                                  }
                              })
                              .output(finalVideo);

            cmd.run();
        });
    },
    createThumbnail: function(finalVideo, videoThumb) {
        return new Promise(function (fulfill, reject) {
            console.log("creating thumbnail");
            var cmd = ffmpeg().input(finalVideo)
                              .size('640x480')
                              .inputOptions('-t 2')
                              .on('error', function(err, stdout, stderr) {
                                  //
                              })
                              .output(videoThumb);

            cmd.run();
            fulfill();
        });
    }
}
