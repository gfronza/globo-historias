var app = angular.module("GloboHistorias" , []);

app.controller("storyCtrl" , ['$scope', '$http', function($scope, $http){
  //$scope.stories = [{"_id":283239819393,"author":{"id":321321321,"name":"Gabriel","snapshot_url":"foto_do_user.jpg"},"video_url":"samplelink.mp4","story_url":"address-in-which-the-video-will-be-available","story_thumb":"url-to-img.jpg","tags":[],"time_stamp":"1460083693249","matched":true,"matched_activities":[],"banned":false,"reviewed":true,"reactions":{"like":4,"sad":2,"love":3,"angry":1,"wow":0}},{"_id":283239819393,"author":{"id":321321321,"name":"Gabriel","snapshot_url":"foto_do_user.jpg"},"video_url":"samplelink.mp4","story_url":"address-in-which-the-video-will-be-available","story_thumb":"url-to-img.jpg","tags":[],"time_stamp":"1460083693249","matched":true,"matched_activities":[],"banned":false,"reviewed":true,"reactions":{"like":4,"sad":2,"love":3,"angry":2,"wow":0}},{"_id":283239819393,"author":{"id":321321321,"name":"Gabriel","snapshot_url":"foto_do_user.jpg"},"video_url":"samplelink.mp4","story_url":"address-in-which-the-video-will-be-available","story_thumb":"url-to-img.jpg","tags":[],"time_stamp":"1460083693249","matched":true,"matched_activities":[],"banned":false,"reviewed":true,"reactions":{"like":4,"sad":2,"love":3,"angry":2,"wow":0}}];
  $scope.stories = [];
  var webserviceIP = window.api_url;
  $http.get(webserviceIP + '/widget/get-stories-by-activity-id?activity_id=321362138921973')
    .success(function(data) {
        $scope.stories = data;
        // console.log(data);
    })
    .error(function(data) {
        console.log('Error: ' + data);
  });

  $scope.days_from_today = function(timestamp){
    var now = new Date().getTime();
    var timeDiff = Math.abs(now - timestamp);
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }

  $scope.count_reactions = function(story){
    var count = story.reactions.like + story.reactions.love + story.reactions.wow + story.reactions.sad + story.reactions.angry;
    return count;
  }

  $scope.filterLike = function(story){
    var item = story;
    var isLike = item.reactions.like >= item.reactions.love &&
    item.reactions.like >= item.reactions.wow &&
    item.reactions.like >= item.reactions.sad &&
    item.reactions.like >= item.reactions.angry;
    if ( isLike ) {
      return true;
    }
  }

  $scope.filterLove = function(story){
    var item = story;
    var isLove = item.reactions.love >= item.reactions.live &&
    item.reactions.love >= item.reactions.wow &&
    item.reactions.love >= item.reactions.sad &&
    item.reactions.love >= item.reactions.angry;
    if ( isLove ) {
      return true;
    }
  }

  $scope.filterWow = function(story){
    var item = story;
    var isWow = item.reactions.wow >= item.reactions.live &&
    item.reactions.wow >= item.reactions.love &&
    item.reactions.wow >= item.reactions.sad &&
    item.reactions.wow >= item.reactions.angry;
    if ( isWow ) {
      return true;
    }
  }

  $scope.filterWow = function(story){
    var item = story;
    var isSad = item.reactions.sad >= item.reactions.live &&
    item.reactions.sad >= item.reactions.love &&
    item.reactions.sad >= item.reactions.wow &&
    item.reactions.sad >= item.reactions.angry;
    if ( isSad ) {
      return true;
    }
  }

  $scope.filterWow = function(story){
    var item = story;
    var isAngry = item.reactions.angry >= item.reactions.live &&
    item.reactions.angry >= item.reactions.love &&
    item.reactions.angry >= item.reactions.wow &&
    item.reactions.angry >= item.reactions.sad;
    if ( isAngry ) {
      return true;
    }
  }
  
  $scope.abrirVideo = function(video) {
    var player = new Clappr.Player({source: video, parentId: "#player"});
    // alert(video);
  };
}]);


var app = angular.module("GloboHistoriasRec" , ['ngCamRecorder']);

app.controller("cameraCtrl" , ['$scope', function($scope){
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
}]);

app.directive('ngHold', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        var isHolding, timeoutId;

        el.on('mousedown', function($event) {
          scope.$event = $event;
          isHolding = true;

          //TODO: implement timeout passing via attribute like here:
          //https://github.com/angular-ui/angular-ui/blob/master/modules/directives/keypress/keypress.js
          timeoutId = $timeout(function() {
            if(isHolding) {
              scope.$apply(attrs.ngHold);
            }
          }, 500);
        });

        el.on('mouseup', function() {
          isHolding = false;

          if(timeoutId) {
            $timeout.cancel(timeoutId);
            timeoutId = null;
          }
        });
      }
    }
  }]);
