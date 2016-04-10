
$(document).ready(function(){

	//Open modal
	$('.open-modal').click(function() {
		var id = $(this).data('id');
		$('#media').load('midia.php?id=' + id);
		$('#media').fadeIn(600);

	});

	$('.approve').click(function() {
		alert('oi');
		var idActive = $(this).data('idactive');
		var idStory = $(this).data('idstory');
		$('#media').load('midia.php?id=' + idActive + '&story_id=' + idStory + '&action=approve');

	});


	//Close Modal com Esc
	$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        $('#media').fadeOut(600);
    }


});
  
     
}); 


