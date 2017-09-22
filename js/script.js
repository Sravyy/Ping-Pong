
function pingPong(num) {


  var result = [];
  for (var i = 3; i <= num; i++) {
    if (i % 15 === 0) {
      $('#list').append('<li>'+"Ping-Pong"+'</li>');}
      else if (i % 3 === 0) {
        $('#list').append('<li>'+"Ping"+'</li>');}
        else if (i % 5 === 0) {
          $('#list').append('<li>'+"Pong"+'</li>');}
          else{
            $('#list').append('<li>'+i+'</li>');}
          }
          return result
        };


$(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var num = parseInt($("input#ping").val());
    
    var result = pingPong(num);
    $("#result").show();
  });
});
