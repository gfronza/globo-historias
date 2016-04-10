window.api_url = "http://localhost:3000";
// toggle visibility for css3 animations
$(document).ready(function () {
  $(".button-collapse").sideNav();

  //Close Modal com Esc
  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
      $('#media').fadeOut(600);
    }
  });
});

//iphone carousel animation
$(window).load(function () {
  //Open modal
  $('.open-modal').click(function() {
    $('#media').fadeIn(600);
  });

  $('.send-modal').on('click', function() {
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

    var tags = [];
    $('.chip').each(function() { tags.push($(this).text().trim()); });

    blobToBase64(window.audioblob, window.videoblob, function(audio_b64, video_b64){ // encode
      var updateData = {
        'audio': audio_b64,
        'video': video_b64,
        'tags': tags
      };

      $.ajax({
        type: "POST",
        url: 'http://localhost:3000/composer/create-new-story',
        data: updateData,
        success: function() {
          console.log("post success!!");
          $('#media').fadeOut(600);
        }
      });
    });
  });
});

$(document).ready(function () {
  var browserWidth = $(window).width();
  if (browserWidth > 560) {
    $(window).scroll(function () {

    });
  }
});

$(window).resize(function () {
  var browserWidth = $(window).width();
  if (browserWidth > 560) {
    $(window).scroll(function () {

    });
  }
});
