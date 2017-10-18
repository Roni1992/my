$( document ).ready(function() {
	
	$('.show-map').on('click' , function (){
		$('.shadow').fadeIn();
		$('.form_map').fadeIn();
	});

	$('.section_first .send_msg').on('click', function (){
		$('.shadow').fadeIn();
		$('.form_msg').fadeIn();
	});

	$('.section_first .callback').on('click', function (){
		$('.shadow').fadeIn();
		$('.form_callback').fadeIn();
	});

	$('.form_map .send_msg').on('click' , function (){
		$('.form_map').fadeOut();
		$('.form_msg').fadeIn();
	});

	$('.form_map .callback').on('click' , function (){
		$('.form_map').fadeOut();
		$('.form_callback').fadeIn();
	});

	$('.shadow').on('click' , function(){
		$('.shadow').fadeOut();
		$('.form_map').fadeOut();
		$('.form_msg').fadeOut();
		$('.form_callback').fadeOut();
	});

	$('.close_form_msg').on('click' , function (){
		$('.shadow').fadeOut();
		$('.form_map').fadeOut();
		$('.form_msg').fadeOut();
		$('.form_callback').fadeOut();
	});
});