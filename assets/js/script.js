$(document).ready(function () {

    /* Hp decrementing function
       @param{void}Nothing
       return{string}lives.innerText
    */
    function decrementHP() {
        const lives = document.getElementById("hp");
        let currentCount = lives.innerText;
        if (currentCount == 0) {
            alert("You've lost this time!! Good luck for your next try");
            location.reload();
        } else {
            lives.innerText = --currentCount;
        }
        if (currentCount == 2) {
            lives.style.color = "darkorange";
        }
        if (currentCount == 1) {
            lives.style.color = "red";
        }
    }
    const notes = ["the only way to have a sequence of 1 and 2 seperate colored boxes in the 3rd column is to click on the first and the last boxes in this column when the colored button is active.",
    "In the 2nd row, we want to fit 2 seperate colored boxes in 3 squares.<br> Click on the colored button and then click on the first and the last box in the 2nd row.",
    "Now click on the gray button and then click on all the boxes in first and last column since they already have one colored box in them",
    "First click on all the boxes in 3rd row when colored button is active"];
    let counter = 4;
    /* A function for the hint botton
      @param{void}
      @return{string}notes
    */
    $("#hint-btn").click(function () {
        counter--;
        $("#hint-note").html(notes[counter]);
        $("#hints").html(counter);
        if (counter < 0) {
            $("#hints").html(0);
            $("#hint-btn").unbind("click");
            $("#hint-note").html("Sorry, you have no hints left.");
        }
    });
    $(".gray").addClass("not-clicked-gray");
    const colored = $(".square").not(".gray");
    $(colored).addClass("not-clicked-color");
    /* A function to switch between two buttons
       @param{void};
       @return{}
    */
    $(".switch").on("click", function () {
        $(".switch").removeClass("active");
        $(this).addClass("active");
    });
    $(".square").on("click", function () {
        $(this).removeClass("square").unbind("click");
        if ($("#colored").hasClass("active") && $(this).hasClass("not-clicked-color")) {
            $(this).removeClass("not-clicked-color").addClass("clicked-color");
            if ($(".not-clicked-color").length == 0) {
                if ($(this).hasClass("clicked-color")) {
                    $(".square").removeClass("square");
                    alert("Congradulations. You have won the game");
                    setTimeout(function () {
                        location.reload(true);
                    }, 500);
                }
            }
        }
        if ($("#colored").hasClass("active") && $(this).hasClass("not-clicked-gray")) {
            $(this).removeClass("not-clicked-gray").addClass("clicked-gray");
            decrementHP();
        }
        if ($("#gray").hasClass("active") && $(this).hasClass("not-clicked-gray")) {
            $(this).removeClass("not-clicked-gray").addClass("clicked-gray");
            if ($(".not-clicked-gray").length == 0) {
                if ($(this).hasClass("clicked-gray")) {
                    $(".square").removeClass("square");
                    alert("Congradulations. You have won the game");
                    setTimeout(function () {
                        location.reload(true);
                    }, 500);
                }
            }
        }
        if ($("#gray").hasClass("active") && $(this).hasClass("not-clicked-color")) {
            $(this).removeClass("not-clicked-color").addClass("clicked-color");
            decrementHP();
            if ($(".not-clicked-color").length == 0) {
                if ($(this).hasClass("clicked-color")) {
                    $(".square").removeClass("square");
                    alert("Congradulations. You have won the game");
                    setTimeout(function () {
                        location.reload(true);
                    }, 500);
                }
            }
        }
    });
})
