var errorCallback = (function() {
  var called = false;
  return function(xhr, status, error) {
    if (!called) {
      called = true;
      alert("error");
      //$(this).effect("shake", { times:3, distance:6 }, 600);
      $('#user_email').css({border: '1px solid red'});
    }
  }
})()

$(function(){
  $('.email-form form').bind('ajax:success', function(data, status, xhr){
    //alert("success");
    $('#user_email').css({border: '1px solid green'});
  })
  .bind('ajax:error', errorCallback);

});

