window.api_url = "http://localhost:3000";
// toggle visibility for css3 animations
$(document).ready(function () {
  $(".button-collapse").sideNav();

  //Open modal
  $('.open-modal').click(function() {
    $('#media').fadeIn(600);
    $(this).preventDefault();
  });

  //Close Modal com Esc
  $(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
      $('#media').fadeOut(600);
    }
  });
});

//iphone carousel animation
$(window).load(function () {

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
