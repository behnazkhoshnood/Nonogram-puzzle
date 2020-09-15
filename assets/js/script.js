/**
* A function that reads the script after the page loaded.  
**/
$(document).ready(function () {
    
    /**
    * A function that decrement HP.  
    **/
    function decrementHP() {
        const lives = document.getElementById("hp");
        let currentCount = lives.innerText;
        if (currentCount == 0) {
            alert(LOSING_MESSAGE);
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
    /** 
    * Changes the hint note when hint btn is clicked and unbindes click if 
    * counter is less than zero.
    **/ 
    let counter = 4;
    $("#hint-btn").click(function () {
        counter--;
        $("#hint-note").html(NOTES[counter]);
        $("#hints").html(counter);
        if (counter < 0) {
            $("#hints").html(0);
            $("#hint-btn").unbind("click");
            $("#hint-note").html(NO_HINTS);
        }
    });
    
    $(".gray").addClass("not-clicked-gray");
    const colored = $(".square").not(".gray");
    $(colored).addClass(NOT_CLICKED_COLORED);
<<<<<<< HEAD
    /**  
     * Switches the "active" class between gray and colored btn.
     **/
=======
    /**  switch the "active" class between gray and colored btn.*/
>>>>>>> 3348557cdf30e11f88a7bd353e69fa1ab019bbba
      $(".switch").on("click", function () {
        $(".switch").removeClass("active");
        $(this).addClass("active");
    }); 
     
<<<<<<< HEAD
    /** On click function removes "square" class from, and unbind this square.
     * If "colored switch btn" is active, this square is colored and all the 
     * other colored squares are clicked alert the wining message.
     **/
=======
    /** on click function removes "square" class and unbind the square.
     * If "colored switch btn" is active, this square is colored and all the other colored squares are clicked alert winingMsg.*/
>>>>>>> 3348557cdf30e11f88a7bd353e69fa1ab019bbba
    $(".square").on("click", function () {
        $(this).removeClass("square").unbind("click");
        if ($("#colored").hasClass("active") && $(this).hasClass(NOT_CLICKED_COLORED)) {
            $(this).removeClass(NOT_CLICKED_COLORED).addClass("clicked-color");
<<<<<<< HEAD
            if ($("." + NOT_CLICKED_COLORED).length === 0) {
=======
            if ($(".not-clicked-color").length === 0) {
>>>>>>> 3348557cdf30e11f88a7bd353e69fa1ab019bbba
                if ($(this).hasClass("clicked-color")) {
                    $(".square").removeClass("square");
                    alert(WINING_MESSAGE);
                    setTimeout(function () {
                        location.reload(true);
                    }, 500);
                }
            }
        }
        
        /** 
         * If gray squares are clicked when "colored switch btn" is active,     *  decrement hp. 
         **/
        if ($("#colored").hasClass("active") && $(this).hasClass("not-clicked-gray")) {
            $(this).removeClass("not-clicked-gray").addClass("clicked-gray");
            decrementHP();
        }
        
        /** 
         * If gray squares are clicked when "gray switch btn" is active, if all * the other gray squares are clicked, showes the wining message. 
         **/
        if ($("#gray").hasClass("active") && $(this).hasClass("not-clicked-gray")) {
            $(this).removeClass("not-clicked-gray").addClass("clicked-gray");
            if ($(".not-clicked-gray").length === 0) {
                if ($(this).hasClass("clicked-gray")) {
                    $(".square").removeClass("square");
                    alert(WINING_MESSAGE);
                    setTimeout(function () {
                        location.reload(true);
                    }, 500);
                }
            }
        }
<<<<<<< HEAD
        
         /** 
          * If a colored square is clicked when "gray switch btn" is active, 
          * decrement hp. If all the other colored squares are clicked, showes * the wining message. 
          **/
=======
         /** If a colored square is clicked when "gray switch btn" is active, decrement hp. If all the other colored squares are clicked, showes the wining message. */
>>>>>>> 3348557cdf30e11f88a7bd353e69fa1ab019bbba
        if ($("#gray").hasClass("active") && $(this).hasClass(NOT_CLICKED_COLORED)) {
            $(this).removeClass(NOT_CLICKED_COLORED).addClass("clicked-color");
            decrementHP();
            if ($("." + NOT_CLICKED_COLORED).length === 0) {
                if ($(this).hasClass("clicked-color")) {
                    $(".square").removeClass("square");
                    alert(WINING_MESSAGE);
                    setTimeout(function () {
                        location.reload(true);
                    }, 500);
                }
            }
        }
    });
});
