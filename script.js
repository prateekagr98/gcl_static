$(document).ready(function(){

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