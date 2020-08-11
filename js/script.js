 $("button").on("click", function () {
     $(this).removeClass("square");
 });
 
 function decrementHP() {
        let el = document.getElementById("hp");
        let currentCount = el.innerText;

        if (currentCount == 0) {
          alert("You've lost this time!! Good luck for your next try");
          location.reload()
        } else {
          // Decrement current count and set it as the new text in our element
          el.innerText = --currentCount;
        }

        // Check the hitpoint count and change the text colour accordingly

        if (currentCount == 2) {
            el.style.color = "darkorange";
        }

        if (currentCount == 1) {
            el.style.color = "red";
        }

      }  
