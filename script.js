$(document).ready(function(){
  $("#button").click(function(){
    $(".names").show();

  });


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
