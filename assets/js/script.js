
$(document).ready(function () {
    
    //                                                       loosing HP rules
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
    
//                                                                hint rules

    $("#hint-btn").on("click", function () {
        var hints = {
            "hint 1": "First right click on all the boxes on the 3rd row",
            "hint 2": "Now the first and last coloumn have on colored box in them so the rest of the boxes in these columns are gray.",
            "hint 3": "The only way you can fill 2 colored boxes in the second row is to fill in the first and the last boxes as colored and the middle on is gray", 
            "hint 4": "The only way to have 2 sequence of colored boxes with 1 and 2 boxes is to fill the top and the bottom one."
        };
        $.each(hints, function (key, value) {
            alert(key + ": " + value);
        });i[]})
    
//                                                       on left click rules


    $(".square").on("click", function () {
        $(this).removeClass("square").removeClass("not-clicked-color").addClass("clicked-color").unbind("click").unbind("contextmenu");
    });

    $(".gray").click(function() {
        decrementHP();
    });
    
 //                                                            winning rules
    $(".square").on("mousedown", function () {

        if ($(".not-clicked-color").length == 1) {
            $(".square").removeClass("square");
            }
     });   
         
    $(".square").on("mouseup", function () {   
        
        if ($(".not-clicked-color").length == 1) {
            alert("Congradulations. You have won the game");
        setTimeout(function () {
            location.reload(true);
        }, 500);
    }
    }); 

//                                                       on right click rules
    $(".square").on("contextmenu", function () {
        if ($(this).hasClass("gray")) {
            $(this).removeClass("square").unbind("click").unbind("contextmenu");
        }
        else {
            $(this).removeClass("square").removeClass("not-clicked-color").addClass("clicked-color").unbind("click").unbind("contextmenu");
            decrementHP()
        }
    });
// to remove the defult drop down menu when right click on squares on computers

        $(".square").on("contextmenu", function () {
            return false;
        });
        
// to remove the defult drop down menu when right click on squares on mobile
        $(".square").on("taphold", function () {
            return false;
        });
});



 
      