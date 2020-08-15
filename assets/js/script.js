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
 
$(".play").on("click", function () {
   decrementHP()
});


