
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

$("#hint-btn").each( function(){
  var counter = 4
  $( this ).click( function(){
    counter--;
    $("#hints").html(counter);
  } );
  
  $("#hint-btn").on("click", function(){
      if(counter == 3){
      $("#hint-note").html("First right click on all the boxes in 3rd row");
  }
});

  $("#hint-btn").on("click", function(){
      if(counter == 2){
      $("#hint-note").html("Now left click on all the boxes in first and last column since they already have one colored box in them");
  }
  });
  
    $("#hint-btn").on("click", function(){
      if(counter == 1){
      $("#hint-note").html("In 2nd row we should have 2 seperae colored boxes in 3 boxes so the only way is to right click on the first and last boxes that are left");
  }
  });
  
      $("#hint-btn").on("click", function(){
      if(counter == 0){
      $("#hint-note").html("the onley way to have a sequence of 1 and 2 seperate colored boxes in the 3rd column is to right click on the first and the last boxes in this column");
  }
  });
 
        $("#hint-btn").on("click", function(){
      if(counter < 0){
      $("#hints").html(0);
      $("#hint-note").html("Sorry. You don't have any hints left!")
  }
  });
});



//                                                       on left click rules


    $(".square").on("click", function () {
        $(this).removeClass("square").removeClass("not-clicked-color").addClass("clicked-color").unbind("click").unbind("contextmenu");
    });

    $(".gray").click(function() {
        decrementHP()
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
            decrementHP();
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



 
  