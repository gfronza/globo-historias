
$(document).ready(function(){

	//Open modal
	$('.open-modal').click(function() {
		
		var id = $(this).data('id');
		$('#media').load('midia.php?id=' + id);
		$('#media').fadeIn(600);

	});

	//Close Modal com Esc
	$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        $('#media').fadeOut(600);
    }

    
});
  
     
}); 


