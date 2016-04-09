var express = require('express');
var app = express();

app.route('/composer/create-new-story')
    .post(function(req, res) {
        if (!req.files) {
    		res.json({
                error: 'No file was uploaded'
            });
    		return;
    	}

        // TODO: extract constant.
        videoStorageDir = '/Users/germano/Pessoal/MyDev/hackathon/hackathon-globo/storage/'

        storyVideo = req.files.storyVideo;
    	storyVideo.mv(videoStorageDir, function(err) {
    		if (err) {
                story = repository.createStory(req.body);

                res.json({
                    ok: true,
                });
    		}
    		else {
                res.json({
                    error: 'Video could not be moved to the storage.'
                });
        		return;
    		}
    	});
    });

app.listen(3000);
