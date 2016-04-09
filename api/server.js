var express = require('express');
var fileUpload = require('express-fileupload');
var util = require('util');
var app = express();

app.use(fileUpload());

app.route('/composer/create-new-story')
    .post(function(req, res) {
        if (!req.files) {
    		res.json({
                error: 'No file was uploaded'
            });
    		return;
    	}

        // TODO: extract constant.
        videoStorageDir = '/Users/germano/Pessoal/MyDev/hackathon/hackathon-globo/storage'

        var storyVideo = req.files.storyVideo;

        // a very lame name for now.
        var timestamp = new Date().getTime().toString(),
            videoInStorage = util.format('%s/%s_%d', videoStorageDir, storyVideo.name, timestamp);

    	storyVideo.mv(videoInStorage, function(err) {
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
