var app = angular.module("GloboHistorias" , []);

app.controller("storyCtrl" , function ($scope) {
  $scope.stories = [{"_id":283239819393,"author":{"id":321321321,"name":"Gabriel","snapshot_url":"foto_do_user.jpg"},"video_url":"samplelink.mp4","story_url":"address-in-which-the-video-will-be-available","story_thumb":"url-to-img.jpg","tags":[],"time_stamp":"1460083693249","matched":true,"matched_activities":[],"banned":false,"reviewed":true,"reactions":{"like":4,"sad":2,"love":3,"angry":2,"wow":0}},{"_id":283239819393,"author":{"id":321321321,"name":"Gabriel","snapshot_url":"foto_do_user.jpg"},"video_url":"samplelink.mp4","story_url":"address-in-which-the-video-will-be-available","story_thumb":"url-to-img.jpg","tags":[],"time_stamp":"1460083693249","matched":true,"matched_activities":[],"banned":false,"reviewed":true,"reactions":{"like":4,"sad":2,"love":3,"angry":2,"wow":0}},{"_id":283239819393,"author":{"id":321321321,"name":"Gabriel","snapshot_url":"foto_do_user.jpg"},"video_url":"samplelink.mp4","story_url":"address-in-which-the-video-will-be-available","story_thumb":"url-to-img.jpg","tags":[],"time_stamp":"1460083693249","matched":true,"matched_activities":[],"banned":false,"reviewed":true,"reactions":{"like":4,"sad":2,"love":3,"angry":2,"wow":0}}];

  $scope.days_from_today = function(story){
    var now = new Date().getTime();
    var timeDiff = Math.abs(now - story.time_stamp);
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log(story.time_stamp);
    console.log(diffDays);
    return diffDays;
  }

  $scope.count_reactions = function(story){
    var count = story.reactions.like + story.reactions.love + story.reactions.wow + story.reactions.sad + story.reactions.angry;
    console.log(count);
    return count;
  }
});

var app = angular.module("GloboHistoriasRec" , ['ngCamRecorder']);

app.controller("testcontroller" , function ($scope) {
    var configuration  = {
            init : $scope.initiateRecord,
            recConf:{
                recorvideodsize : 0.4,
                webpquality     : 0.7,
                framerate       : 15,
                videoWidth      : 100,
                videoHeight     : 100,
            },

            recfuncConf :{
                showbuton : 2000,
                url : "https://8ccd6c3d.ngrok.io/composer/create-new-story",
                chunksize : 1048576,
                recordingtime : 20,
                requestparam : "filename",
                videoname : "video.webm",
                audioname : "audio.wav",
            },

            output :{
                recordingthumb : null,
               	recordinguploaded : function(){
               		alert("uploaded");
               	}
            },

            recordingerror : function(){
            	alert("browser not compatible");
            }
    }
	$scope.camconfiguration = configuration;
});
