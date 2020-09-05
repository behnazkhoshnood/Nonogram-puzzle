
$(document).ready(function () {
    
    //                                                       loosing HP rules
    function decrementHP() {
        var lives = document.getElementById("hp");
        var currentCount = lives.innerText;

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
    
 //                                                   hint rules

 let notes = ["the only way to have a sequence of 1 and 2 seperate colored boxes in the 3rd column is to right click on the first and the last boxes in this column","In the 2nd row, we want to fit 2 seperate colored boxes in 3 squares.<br> Right click on the first and the last box in the 2nd row",
        "Now left click on all the boxes in first and last column since they already have one colored box in them",
        "First right click on all the boxes in 3rd row"];
        
 let counter = 4

 $("#hint-btn").click(function() {
 counter --;
 $("#hint-note").html(notes[counter]);
 $("#hints").html(counter);

 if(counter < 0){
    $("#hint-btn").unbind("click");
    $("#hint-note").html("Sorry, you have no hints left.");
 }

 });
 
 $(".gray").addClass("not-clicked-gray");
 
 $(".switch").on("click", function(){
        $(".switch").removeClass("active");
        $(this).addClass("active");
}) 


$(".square").on("click", function(){
    if($("#colored").hasClass("active") && $(this).hasClass("not-clicked-color")){
    $(this).removeClass("square").removeClass("not-clicked-color").addClass("clicked-color").unbind("click");
    if($(".not-clicked-color").length == 0){
        if($(this).hasClass("clicked-color")){
            $(".square").removeClass("square");
            alert("Congradulations. You have won the game");
         setTimeout(function () {
             location.reload(true);
        }, 500);
        }
    }
    }
    
    if($("#colored").hasClass("active") && $(this).hasClass("not-clicked-gray")){
        $(this).removeClass("square").removeClass("not-clicked-gray").addClass("clicked-gray").unbind("click");
        decrementHP();
    }
    
    if($("#gray").hasClass("active") && $(this).hasClass("not-clicked-gray")){
        $(this).removeClass("square").removeClass("not-clicked-gray").addClass("clicked-gray").unbind("click");
        if($(".not-clicked-gray").length == 0){
        if($(this).hasClass("clicked-gray")){
            $(".square").removeClass("square");
            alert("Congradulations. You have won the game");
         setTimeout(function () {
             location.reload(true);
        }, 500);
        }
    }
    }
    
    if($("#gray").hasClass("active") && $(this).hasClass("not-clicked-color")){
        $(this).removeClass("square").removeClass("not-clicked-color").addClass("clicked-color").unbind("click");
        decrementHP();
    }
})

});
  
//  //                                                       on left click rules


//     $(".square").on("click", function () {
//         $(this).removeClass("square").removeClass("not-clicked-color").addClass("clicked-color").unbind("click").unbind("contextmenu");
//     });

//     $(".gray").click(function() {
//         decrementHP()
//     });
    
//  //                                                            winning rules
//     $(".square").on("mousedown", function () {

//         if ($(".not-clicked-color").length == 1) {
//             $(".square").removeClass("square");
//             }
//      });   
         
//     $(".square").on("mouseup", function () {   
        
//         if ($(".not-clicked-color").length == 1) {
//             alert("Congradulations. You have won the game");
//         setTimeout(function () {
//             location.reload(true);
//         }, 500);
//     }
//     }); 

//  //                                                       on right click rules
//     $(".square").on("contextmenu", function () {
//         if ($(this).hasClass("gray")) {
//             $(this).removeClass("square").unbind("click").unbind("contextmenu");
//             return false;
//         }
//         else {
//             $(this).removeClass("square").removeClass("not-clicked-color").addClass("clicked-color").unbind("click").unbind("contextmenu");
//             decrementHP();
//             return false;
//         }
//     });
    
//   $(".square").on("contextmenu", function () {
//         if ($(this).hasClass("gray")) {
//             $(this).removeClass("square").unbind("click").unbind("contextmenu");
//             return false;
//         }
//         else {
//             $(this).removeClass("square").removeClass("not-clicked-color").addClass("clicked-color").unbind("click").unbind("contextmenu");
//             decrementHP();
//             return false;
//         }
//     });
      
//  // to remove the defult drop down menu when right click on squares on mobile  
 
//         $(".square").on("taphold", function () {
//             return false;
//         }); 
// });


