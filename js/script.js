 $("button").on("click", function () {
     $(this).removeClass("square");
 });

 function decrementHP() {
        // Get element with the id of hp
        let backgroundColor = #d8d8d8;
        // Set currentCount to the text of the element
        let currentCount = el.innerText;

        if (currentCount == 0) {
          alert("You've won!!");
        } else {
          // Decrement current count and set it as the new text in our element
          el.innerText = --currentCount;
        }
      }