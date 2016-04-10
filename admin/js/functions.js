
$(document).ready(function(){



	//Open modal
	$('.open-modal').click(function() {
		var id = $(this).data('id');
		$('#media').load('midia.php?id=' + id);
		$('#media').fadeIn(600);

	});

	$('.approve').click(function(e) {
		e.preventDefault();
		var urlVideo = $(this).data('video_url');
		var idActive = $(this).data('idactive');
		var idStory = $(this).data('idstory');
	    $.ajax({
	      type: 'GET',
	      url: 'config.php?action=approve&activity_id='+idActive+'&storyId='+idStory,
	      success: function() {
	    	// $('[data-url!=""]').first()
	    	var stories = $('.storyList');
	    	// alert('oi');
	    	// $('[data-url!=""]').first().remove();
	    	console.log(stories);
	      }
	    });
	});


	//Close Modal com Esc
	$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        $('#media').fadeOut(600);
    }


});
  
     
}); 


