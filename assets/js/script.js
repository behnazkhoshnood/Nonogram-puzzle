/**
* A function that reads the script after the page loaded.  
**/
$(document).ready(function () {
    
    /**
    * A function that decrement HP.  
    **/
    function decrementHP() {
        if (currentCount == 0) {
            alert(LOSING_MESSAGE);
            location.reload();
        } else {
            LIVES.innerHTML = --currentCount;
        }
        if (currentCount == 2) {
            LIVES.style.color = "darkorange";
        }
        if (currentCount == 1) {
            LIVES.style.color = "red";
        }
    }
    
    /** 
    * Changes the hint note when hint btn is clicked and unbindes click if 
    * counter is less than zero.
    **/ 
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
    $(GRAY).addClass(NOT_CLICKED_GRAY);
    const colored = $("." + SQUARE).not(GRAY);
    $(colored).addClass(NOT_CLICKED_COLORED);
    
    /**  
     * Switches the "active" class between gray and colored btn.
     **/
      $(SWITCH).on("click", function () {
        $(SWITCH).removeClass(ACTIVE);
        $(this).addClass(ACTIVE);
    }); 
     
    /** On click function removes "square" class from, and unbind this square.
     * If "colored switch btn" is active, this square is colored and all the 
     * other colored squares are clicked alert the wining message.
     **/
    $("." + SQUARE).on("click", function () {
        $(this).removeClass(SQUARE).unbind("click");
        if ($("#colored").hasClass(ACTIVE) && $(this).hasClass(NOT_CLICKED_COLORED)) {
            $(this).removeClass(NOT_CLICKED_COLORED).addClass(CLICKED_COLORED);
            if ($("." + NOT_CLICKED_COLORED).length === 0) {
                if ($(this).hasClass(CLICKED_COLORED)) {
                    $("." + SQUARE).removeClass(SQUARE);
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
        if ($("#colored").hasClass(ACTIVE) && $(this).hasClass(NOT_CLICKED_GRAY)) {
            $(this).removeClass(NOT_CLICKED_GRAY).addClass(CLICKED_GRAY);
            decrementHP();
        }
        
        /** 
         * If gray squares are clicked when "gray switch btn" is active, if all * the other gray squares are clicked, showes the wining message. 
         **/
        if ($("#gray").hasClass(ACTIVE) && $(this).hasClass(NOT_CLICKED_GRAY)) {
            $(this).removeClass(NOT_CLICKED_GRAY).addClass(CLICKED_GRAY);
            if ($("."+ NOT_CLICKED_GRAY).length === 0) {
                if ($(this).hasClass(CLICKED_GRAY)) {
                    $("." + SQUARE).removeClass(SQUARE);
                    alert(WINING_MESSAGE);
                    setTimeout(function () {
                        location.reload(true);
                    }, 500);
                }
            }
        }
        
         /** 
          * If a colored square is clicked when "gray switch btn" is active, 
          * decrement hp. If all the other colored squares are clicked, showes * the wining message. 
          **/
        if ($("#gray").hasClass(ACTIVE) && $(this).hasClass(NOT_CLICKED_COLORED)) {
            $(this).removeClass(NOT_CLICKED_COLORED).addClass(CLICKED_COLORED);
            decrementHP();
            if ($("." + NOT_CLICKED_COLORED).length === 0) {
                if ($(this).hasClass(CLICKED_COLORED)) {
                    $("." + SQUARE).removeClass(SQUARE);
                    alert(WINING_MESSAGE);
                    setTimeout(function () {
                        location.reload(true);
                    }, 500);
                }
            }
        }
    });
});
