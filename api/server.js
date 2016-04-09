var express = require('express');
var multer = require('multer');
var repository = require('./repository');
var app = express();

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './storage');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now() + '.mp4');
  }
});

var storyVideoUpload = multer({ storage : storage}).single('storyVideo');

app.route('/composer/create-new-story')
    .post(function(req, res) {
        storyVideoUpload(req, res, function(err) {
            if (err) {
                res.json({
                    error: 'Video could not be moved to the storage.'
                });
    		}
    		else {
                var story = repository.createStory(req.body);
                res.json(story);
    		}
        });
    });

app.listen(3000);

console.log("Server is running on port 3000");
