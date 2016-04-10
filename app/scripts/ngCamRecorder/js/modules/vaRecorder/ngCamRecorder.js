/*
configuration :{

    init : function that initiate recorder,
    recConf:{
                    recorvideodsize : 0.4,
                    webpquality     : 0.7,
                    framerate       : 15,
                    videoWidth      : "500",
                    videoHeight     : "375",
    },

    recfuncConf :{

        showbuton : 2000,
        "url" : "http://localhost/angulrjstest/SignerView/js/lib/Html5Recorder/php/fileupload.php",
        "chunksize" : 1048576,
        "recordingtime" : 17,
        "requestparam" : "filename",
        "videoname" : "video.webm",
        "audioname" : "audio.wav",

    },

    output :{

        recordingthumb : ""

    }

    recordingerror : function that calls when recording error occures

}


*/



var vaRecorder = angular.module("ngCamRecorder" , []);
vaRecorder.directive("ngcamcecorder" , function(){

    return{

        scope : {
            configuration : "=",
        },

        templateUrl : function(){
            // var scripts = document.getElementsByTagName("script");
            // src = scripts[scripts.length-1].src;
            // src = src.substring(0, src.lastIndexOf("/"));
            // return src+"/template/viditurecam.html";
            return "scripts/ngCamRecorder/js/modules/vaRecorder/template/viditurecam.html";
        },

        link : function($scope, $element, $attrs){
                $scope.width =  $scope.configuration.recConf.videoWidth+"%";
                $scope.height =  $scope.configuration.recConf.videoHeight+"%";
                $scope.loadingimageshow = false;

                $scope.configuration.init = function(){
                        console.log("iniciado");
                        $scope.loadingimageshow  = true;
                        videorecorder($scope, $element, $attrs);
                }

                $scope.configuration.init();
        }

    }


    function videorecorder($scope, $element, $attrs){

         var virec = new VIRecorder.initVIRecorder($scope.configuration.recConf ,
                function(){
                      //when video is ready
                        setTimeout(function(){
                            $scope.$apply(function(){
                                $scope.loadingimageshow  = false;
                                $scope.videoready = true;
                            });
                        }, $scope.configuration.recfuncConf.showbuton);

                },
                function(err){
                    //onerror callback, this will fire if browser does not support
                    $scope.configuration.recordingerror(err);
                }
         );

         $scope.toggle = function(){
           if(!$scope.recordingstarted){
             $scope.startRecrodBut1();
           }
           else{
             $scope.stopRecBut1();
           }
         }

         $scope.startRecrodBut1 =  function(){
                console.log("iniciou gravacao");
                $scope.recordingstarted = true;
                $scope.recordingonly = true;
                virec.startCapture();
                startCountDown(null);

                // // my code
                // var timeout_id = 0,
                //     hold_time = 1000,
                //     hold_trigger = $('.hold_trigger');
                //
                // angular.element("#hold_trigger");
                // hold_trigger.mousedown(function() {
                //     timeout_id = setTimeout($scope.stopRecBut1, hold_time);
                // }).bind('mouseup mouseleave', function() {
                //     clearTimeout(timeout_id);
                // });
         }

         $scope.stopRecBut1 = function(){
           console.log("parou gravacao");
              if($scope.recordingstarted){
                $scope.recordingonly = false;
                $scope.recordingstarted = false;
                $scope.videoisavailabletoplay = true;
                virec.stopCapture(oncaptureFinish);
                // $scope.uploadrecord();
                // $scope.playback();
              }
         }

         $scope.playback = function(){

              if($scope.videoisavailabletoplay){
                virec.play();
              }
         }

         $scope.clearrecording =function(){
                $scope.videoisavailabletoplay = false;
                virec.clearRecording();
         }

        $scope.uploadrecord = function(){
              console.log("upload video");
              if(!$scope.recordingstarted){


                $scope.uploadpresentage = true;
                var uploadoptions = {
                        blobchunksize :         $scope.configuration.recfuncConf.chunksize,
                        requestUrl :            $scope.configuration.recfuncConf.url,
                        requestParametername :  $scope.configuration.recfuncConf.requestparam,
                        videoname :             $scope.configuration.recfuncConf.videoname,
                        audioname :             $scope.configuration.recfuncConf.audioname
                };
                virec.uploadData( uploadoptions , function(totalchunks, currentchunk){
                      $scope.$apply(function(){
                            $scope.uploadpresentage = parseInt(((currentchunk/totalchunks)*100));
                            if(totalchunks == currentchunk){
                                    $scope.uploadpresentage =false;
                                     if($scope.configuration.output.recordinguploaded){
                                      $scope.configuration.output.recordinguploaded();
                                    }
                            }
                      });
                });
              }
         }


    //------------------------------- few functions that demo, how to play with the api --------------------------

    var countdowntime = $scope.configuration.recfuncConf.recordingtime;
    var functioncalltime = 0;

    function oncaptureFinish(audioblob, videoblob, framearray){
        // if(typeof framearray == "undefined"){
        //     var videobase64 = framearray[videoblob.size/2];
        // }
        // else{
        //     var videobase64 = framearray[framearray.length/2];
        // }
        // $scope.$apply(function(){
        //     $scope.configuration.output.recordingthumb = videobase64;
        // });

        // converts blob to base64
        var blobToBase64 = function(audioblob, videoblob, cb) {
          var audio_b64;
          var video_b64;
          var reader_audio = new FileReader();
          reader_audio.onload = function() {
            var dataUrl = reader_audio.result;
            audio_b64 = dataUrl.split(',')[1];
            if(audio_b64 && video_b64){
              cb(audio_b64, video_b64);
            }
          };
          var reader_video = new FileReader();
          reader_video.onload = function() {
            var dataUrl = reader_video.result;
            video_b64 = dataUrl.split(',')[1];
            if(audio_b64 && video_b64){
              cb(audio_b64, video_b64);
            }
          };
          reader_audio.readAsDataURL(audioblob);
          reader_video.readAsDataURL(videoblob);
        };

        blobToBase64(audioblob, videoblob, function(audio_b64, video_b64){ // encode
            var updateData = {'audio': audio_b64, 'video': video_b64, 'id': 321321321, 'tags': []};

            $.ajax({
              type: "POST",
              url: 'http://localhost:3000/composer/create-new-story',
              data: updateData,
              success: function() {
                  console.log("post success!!");
              },
            });
        });
    }

    function setCountDownTime(time){
         $scope.safeApply(function(){
            $scope.vicountervalue = time;
         });

        if(time == 0){
            return -1;
        }else{
            return 1;
        }
    }


    function startCountDown(interval){
        if(interval == null){
            functioncalltime = countdowntime;
            setCountDownTime(--functioncalltime);
            var intervalcount = setInterval( function(){ startCountDown(intervalcount);  }, 1000 );
        }else{
           var val = setCountDownTime(--functioncalltime);
           if(val == -1){
               clearInterval(interval);
                $scope.recordingonly = false;
               $scope.recordingstarted = false;
               virec.stopCapture(oncaptureFinish);
           }
        }
    }

    $scope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if(phase == '$apply' || phase == '$digest') {
        if(fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    }
  }
});
