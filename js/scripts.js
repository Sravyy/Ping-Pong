
$(function(){

  function pingPong(userInput) {
    var result = [];
    for (var i=3; i <= userInput ; i++){
      if(i) <= 0){
        alert("please enter numbers between 1 and 1000")
      }
      if( i % 15 ) {
        result.push("PingPong");
      } else if ( i % 3 == 0 ){
        result.push("Ping");
      } else if( i % 5 == 0 ) {
        result.push("Ping");
      } else {
        result.pish(i);
      }
    }
    return result
  };


  $("#formOne").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("input#ping").val());
    var result = pingPong(userInput);
    $("#output").text(result);
    $("#result").show();
  });
});
