$(function(){
	$('input:submit').bind('click', function(){
		//console.log('submitting');
		$('input:submit').attr('value','Submitting...');
		//$('input:submit').attr('disabled', true);
		$('.email-failure-message').text('');
	});
	$('.email-form form').bind('ajax:success', function(data, status, xhr){
		//alert("success");
		//console.log("success");
		$('#user_email').css({border: '1px solid green'});
		$('#user_email').remove();
		$('input:submit').remove();
		$('.email-failure-message').text('');
		$('.email-form form').append('<p class="email-success-message">You are awesome. Scroll down to read more about Backpack.');
	})
	.bind('ajax:error', function(xhr, status, error){
		//alert("error");
		//console.log('error');
		$('input:submit').removeAttr('disabled');
		$('input:submit').attr('value','Request Invite');
		$('#email-container').effect("shake", { times:3, distance:20 }, 500);
		$('#user_email').css({border: '1px solid red'}).focus();
		$('.email-failure-message').text('Sorry, that email has already been registered or is invalid.');
	});

}); 