$(document).ready(function(){

	var shown = false;

	if($('.popup--container')) {
	  $('.popup--container').hide();
	  $('.sidepopup--container').hide();
	  $(window).scroll(function() {
	     if($(window).scrollTop() + $(window).height() == $(document).height()) {
	      if(!shown){
	        $('.sidepopup--container').fadeOut();
	        $('.popup--container').fadeIn();
	        shown = true;
	      }
	     }
	  });

	  $('.sidepopup--container').on('click', function(e) {
	    $('.popup--container').fadeIn();
	    $('.sidepopup--container').fadeOut();
	  });

	  $('.popup__close').on('click', function(){
	    $('.popup--container').fadeOut();
	    $('.sidepopup--container').fadeIn();
	  });
	 }

	$('#subsribe-submit').on('click', function(){
		var payload = {};

		payload.name = $('#name').val().trim();
		payload.email = $('#email').val();
		payload.occupation = $('#occupation').val();
		payload.industry = $('#industry').val();
		payload.note = $('#note').val();

		$.post('https://gcl-admin.herokuapp.com/api/subscription', payload, function(){
			$(".subscribe-form-container").fadeOut(700);
		});

	});
});