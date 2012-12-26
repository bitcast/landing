$(function(){
	$('.email-form form').bind('ajax:success', function(data, status, xhr){
		//alert("success");
		$('#user_email').css({border: '1px solid green'});
		$('#user_email').remove();
		$('.email-form form').append('<p class="email-success-message">You are awesome. Scroll for more');
	})
	.bind('ajax:error', function(xhr, status, error){
		//alert("error");
		$('#email-container').effect("shake", { times:3, distance:20 }, 500);
		$('#user_email').css({border: '1px solid red'}).focus();

	});

});