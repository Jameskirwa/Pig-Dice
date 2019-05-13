var totalPlayer1 = 0;
var totalPlayer2 = 0;
$(document).ready(function(){
  $("#button").click(function(){
    $(".names").show();

  // });
  // // $(document).ready(function){
  // //   $("#para").click(function(){
  // //     $(".instruc").show();
  // //   });
});
  $("#diceP1").click(function(){
    james();
  })
  var james = function (){
    var sum = Math.floor((Math.random()*6)+1);
    if (sum===1) {
        alert("player1 rolled 1");
    }else{
      totalPlayer1 += sum;
      // totalPlayer1 = totalPlayer1 + sum
    }
    $("#player1Score").text(sum);
    $("#player1Total").text(totalPlayer1);
  };

  $("#diceP2").click(function() {
    kirwa();
  })
  var kirwa = function (){
    var sum =Math.floor((Math.random()*6)+1);
    if (sum===1) {
      alert("player2 rolled");
    } else {
    totalPlayer2 += sum;
    }
    $("#player2Score").text(sum);
    $("#player2Total").text(totalPlayer2);
  }
  $(".para").click(function(){
    ("hide").toggle();
    ("show").toggle();
  });
  $("#submit").click(function(event){
    var name = $("#").val();
    if(name != ""){
      alert( name + " Enter player 1 name.");
    }else {
      alert("Enter player 2 name");
    }

    event.preventDefault();
  });
});
