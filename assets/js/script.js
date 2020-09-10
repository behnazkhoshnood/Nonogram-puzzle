$(document).ready(function () {

    /* A function that decrement hp. */
    function decrementHP() {
        const lives = document.getElementById("hp");
        let currentCount = lives.innerText;
        if (currentCount == 0) {
            alert(losingAlert);
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
       /* Changes the hint note when hint btn is clicked and unbindes click if counter is less than zero*/ 
    let counter = 4;
    $("#hint-btn").click(function () {
        counter--;
        $("#hint-note").html(notes[counter]);
        $("#hints").html(counter);
        if (counter < 0) {
            $("#hints").html(0);
            $("#hint-btn").unbind("click");
            $("#hint-note").html(noHints);
        }
    });
    $(".gray").addClass("not-clicked-gray");
    const colored = $(".square").not(".gray");
    $(colored).addClass("not-clicked-color");
    /**  switch the "active" class between gray and colored btn.*/
      $(".switch").on("click", function () {
        $(".switch").removeClass("active");
        $(this).addClass("active");
    });  
    /** on click function removes "square" class and unbind the square.
     * If "colored switch btn" is active, this square is colored and all the other colored squares are clicked alert winingMsg.*/
    $(".square").on("click", function () {
        $(this).removeClass("square").unbind("click");
        if ($("#colored").hasClass("active") && $(this).hasClass("not-clicked-color")) {
            $(this).removeClass("not-clicked-color").addClass("clicked-color");
            if ($(".not-clicked-color").length === 0) {
                if ($(this).hasClass("clicked-color")) {
                    $(".square").removeClass("square");
                    alert(winingMsg);
                    setTimeout(function () {
                        location.reload(true);
                    }, 500);
                }
            }
        }
        /** If gray squares are clicked when "colored switch btn" is active, decrement hp. */
        if ($("#colored").hasClass("active") && $(this).hasClass("not-clicked-gray")) {
            $(this).removeClass("not-clicked-gray").addClass("clicked-gray");
            decrementHP();
        }
        /** If gray squares are clicked when "gray switch btn" is active, if all the other gray squares are clicked, showes the wining message. */
        if ($("#gray").hasClass("active") && $(this).hasClass("not-clicked-gray")) {
            $(this).removeClass("not-clicked-gray").addClass("clicked-gray");
            if ($(".not-clicked-gray").length === 0) {
                if ($(this).hasClass("clicked-gray")) {
                    $(".square").removeClass("square");
                    alert(winingMsg);
                    setTimeout(function () {
                        location.reload(true);
                    }, 500);
                }
            }
        }
         /** If a colored square is clicked when "gray switch btn" is active, decrement hp. If all the other colored squares are clicked, showes the wining message. */
        if ($("#gray").hasClass("active") && $(this).hasClass("not-clicked-color")) {
            $(this).removeClass("not-clicked-color").addClass("clicked-color");
            decrementHP();
            if ($(".not-clicked-color").length === 0) {
                if ($(this).hasClass("clicked-color")) {
                    $(".square").removeClass("square");
                    alert(winingAlert);
                    setTimeout(function () {
                        location.reload(true);
                    }, 500);
                }
            }
        }
    });
});
