 $(document).ready(function(){
 
 function decrementHP() {
        var lives = document.getElementById("hp");
        var currentCount = lives.innerText;

        if (currentCount == 0) {
          alert("You've lost this time!! Good luck for your next try");
          location.reload()
        } else {

          lives.innerText = --currentCount;
        }

        if (currentCount == 2) {
            lives.style.color = "darkorange";
        }

        if (currentCount == 1) {
            lives.style.color = "red";
        }
      }; 
      

$("div").on("click", function () {
    $(this).removeClass("square");
 });
 
$(".gray").on("click", function () {
   decrementHP()
});
 
$(".square").on("contextmenu", function(){
    if($(this).hasClass("gray")){
        $(this).removeClass("square");
    }
else{
        decrementHP()
    }
});

$(document).ready(function() {
    $(".square").on("contextmenu",function(){
       return false;
    }); 
}); 

$(document).ready(function() {
    $(".square").on("taphold",function(){
       return false;
    }); 
});
//  working on win alert
function coloredSquares(){
    var coloredSquares = $(".square").not(".gray");
    if(coloredSquares == 0){
        alert("congradulations, you win the game.")
    }
}

});

