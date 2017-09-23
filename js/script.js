//Backend logic
function pingPong(userInput) {

  for (var i = 1; i <= userInput; i++) {
    if (i % 15 === 0) {
      $('#list').append('<li>'+"Ping-Pong"+'</li>');
    }
    else if (i % 3 === 0) {
      $('#list').append('<li>'+"Ping"+'</li>');
    }
    else if (i % 5 === 0) {
      $('#list').append('<li>'+"Pong"+'</li>');
    }
    else{
      $('#list').append('<li>'+i+'</li>');
    }
  };
};

//Frontend logic
$(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#ping").val());

    pingPong(userInput);
  });
});
