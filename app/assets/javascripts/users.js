$(function(){
	$('.email-form form').bind('ajax:success', function(data, status, xhr){
		//alert("success");
		$('#user_email').css({border: '1px solid green'});
	})
	.bind('ajax:error', function(xhr, status, error){
		//alert("error");
		//$(this).effect("shake", { times:3, distance:6 }, 600);
		$('#user_email').css({border: '1px solid red'});
	});

});