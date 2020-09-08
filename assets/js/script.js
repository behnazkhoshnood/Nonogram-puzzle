$(document).ready(function () {

    /* Hp decrementing function
       @param{void}Nothing
       return{string}lives.innerText
    */
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
            $("#hint-note").html(noHints);
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
        if ($("#colored").hasClass("active") && $(this).hasClass("not-clicked-gray")) {
            $(this).removeClass("not-clicked-gray").addClass("clicked-gray");
            decrementHP();
        }
        if ($("#gray").hasClass("active") && $(this).hasClass("not-clicked-gray")) {
            $(this).removeClass("not-clicked-gray").addClass("clicked-gray");
            if ($(".not-clicked-gray").length === 0) {
                if ($(this).hasClass("clicked-gray")) {
                    $(".square").removeClass("square");
                    alert(winingAlert);
                    setTimeout(function () {
                        location.reload(true);
                    }, 500);
                }
            }
        }
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
})
