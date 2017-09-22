//Backend logic
function pingPong(userInput) {
  var result = [];
  for (var i = 1; i <= userInput; i++) {
    if (i % 15 === 0) {
      $('#list').prepend('<li>'+"Ping-Pong"+'</li>');
    }
    else if (i % 3 === 0) {
      $('#list').prepend('<li>'+"Ping"+'</li>');
    }
    else if (i % 5 === 0) {
      $('#list').prepend('<li>'+"Pong"+'</li>');
    }
    else{
      $('#list').prepend('<li>'+i+'</li>');
    }
  };
  return result
};

//Frontend logic
$(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#ping").val());

    var result = pingPong(userInput);
    $("#result").show();
  });
});
