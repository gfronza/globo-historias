var express = require('express');
var multer = require('multer');
var cors = require('cors');
var repository = require('./repository');
var videoManager = require('./videoManager');
var bodyParser = require('body-parser');

var app = express();

// TODO: use nginx to serve static content.
app.use('/videos', express.static('storage'));

app.use(cors());

var MEDIA_URL = '/media';

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false, limit: '50mb' })

// TODO: use nginx to serve static content.
app.use(MEDIA_URL, express.static('storage'));

app.route('/composer/create-new-story')
    .post(urlencodedParser, function(req, res) {
        var newStory = req.body;

        var audioBase64 = newStory.audio;
        var videoBase64 = newStory.video;

        delete newStory.audio;
        delete newStory.video;

        var savedVideo = videoManager.saveVideo(audioBase64, videoBase64);

        var protocol = req.protocol;
        var mediaPrefix = protocol + '://' + req.headers.host;

        newStory.author = {
          id: 123,
          name: 'MagicUser',
          snapshot_url: mediaPrefix + MEDIA_URL + '/ut_magicuser.png'
        };

        newStory.video_url = mediaPrefix + MEDIA_URL + '/' + savedVideo.videoFilename;
        newStory.story_thumb = mediaPrefix + MEDIA_URL +'/' + savedVideo.videoThumb;
        newStory.story_url = new Date().getTime().toString();
        newStory.time_stamp = new Date().getTime();
        newStory.matched = false;
        newStory.matched_activities = [];
        newStory.banned = false;
        newStory.reviewed = false;
        newStory.reactions = {
            like: 0,
            sad: 0,
            love: 0,
            angry: 0,
            wow: 0
        };

        repository.createStory(newStory).then(function(storyCreated) {
            console.log('Story created!');
            return repository.matchStoryWithActivities(storyCreated);
        }).then(function(storyCreated) {
            console.log('Returning story created');
            return res.json(storyCreated);
        });
    });

  app.route('/editor/get-activities')
    .get(function(req, res){
        repository.getActivities().then(function(err, activities) {
            if(err) {
                console.log(err);
                res.send(err);
            } else {
                res.json(activities);
            }
        });
  });

  app.get('/editor/get-stories-by-activity-id', function(req, res){
    if (!req.query.activity_id) {
      res.send({failure: 'activity_id was not send'});
      return;
    }
    var activity_id = req.query.activity_id;

    repository.getStoriesByActivityId(activity_id).then(function(err, stories) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(stories);
        }
    });
  });

  app.route('/editor/get-story-by-id')
    .get(function(req, res){
      var story_id = req.query.story_id;
      if (!story_id) {
          res.send({failure: 'story_id was not sent'});
          return;
      }
      repository.getStoryById(story_id).then(function(err, story) {
          if (err) {
              console.log(err);
              res.send(err);
          } else {
              res.json(story);
          }
      });
    });

  app.route('/widget/get-stories-by-activity-id')
    .get(function(req, res){
      var activity_id = req.query.activity_id;
      if (!activity_id) {
        res.send({failure: 'activity_id was not sent'});
        return;
      }
      repository.getApprovedStoriesByActivityId(activity_id).then(function(err, stories) {
          if (err) {
              console.log(err);
              res.send(err);
          } else {
              res.json(stories);
          }
      });
    });

  app.route('/editor/approve-story-for-activity')
      .post(urlencodedParser, function(req, res) {
        var activity_id = req.body.activity_id;
        var story_id = req.body.story_id;
        if(!activity_id || !story_id){
          var failure = 'activity_id or story_id was not sent';
          console.log('activity_id or story_id was not sent')
          res.send(failure);
        } else {
          repository.approveStoryForActivity(activity_id, story_id).then(function(err, result) {
              if (err){
                console.log(response.err);
                res.send(err);
              } else {
                res.json(result);
              }
          });
        }
      });

  app.route('/editor/ban_story')
      .post(urlencodedParser, function(req, res) {
        var story_id = req.body.story_id;
        if(!story_id){
          var failure = 'story_id was not sent';
          console.log('story_id was not sent');
          res.send(failure);
        } else {
          var response = repository.banStory(story_id).then(function(err, result) {
              if (err){
                  console.log(response.err);
                  res.send(response.err);
              } else {
                  res.json(result);
              }
          });
        }
      });

  app.route('/editor/deny-story-for-activity')
      .post(urlencodedParser, function(req, res) {
        var activity_id = req.body.activity_id;
        var story_id = req.body.story_id;
        if(!activity_id || !story_id){
          var failure = 'activity_id or story_id was not sent';
          console.log('activity_id or story_id was not sent');
          res.send(failure);
        } else {
          var response = repository.denyStoryForActivity(activity_id, story_id).then(function(err, result) {
              if (err){
                  console.log(response.err);
                  res.send(response.err);
              } else {
                  res.json(result);
              }
          });
        }
      });

  app.route('/widget/react-to-story-for-activity')
      .post(urlencodedParser, function(req, res) {
        var activity_id = req.body.activity_id;
        var story_id = req.body.story_id;
        var reaction = req.body.reaction;
        if(!activity_id || !story_id || !reaction){
          var failure = 'activity_id or story_id or reaction was not sent';
          console.log('activity_id or story_id or reaction was not sent');
          res.send(failure);
        } else {
          repository.reactToStoryForActivity(activity_id, story_id, reaction).then(function(err, result) {
              if (err){
                  console.log(response.err);
                  res.send(response.err);
              } else {
                  res.json(result);
              }
          })
        }
      });

  app.route('/author/stories-by-author-id')
      .get(function(req, res) {
        var author_id = req.query.author_id;
        if (!author_id) {
          res.send({failure: 'author_id was not sent'});
          return;
        } else {
          var response = repository.getStoriesByAuthor(author_id).then(function(err, stories) {
              if (err){
                console.log(response.err);
                res.send(response.err);
              } else {
                res.json(stories);
              }
          });
        }
      });

app.listen(3000);

console.log("Server is running on port 3000");
