$(document).ready(function () {
    $(".learn-more-btn").each(function () {
        //get id of the element and store it in a variable
        var learnMoreBtn = document.querySelector(".learn-more-btn")

        //use the id to get the color from local storage and store it in a variable
        var knowlton = localStorage.getItem(".learn-more-btn")

        //update the background of the element to be the local storage color
        $(this).css("background-color", null);


    });

    $(".learn-more-btn").on("click", function () {
        //set the background yellow 
        $(this).css("background-color", "yellow");


        // //get id of the element and store it in a variable
        var city = $(this).attr("id");

        // //use the id to add the color to local storage
        localStorage.setItem(city, "yellow");
        // console.log(city)
        var buttons = document.getElementsByClassName("learn-more-btn")
// console.log("this is buttons", buttons)
for (var i = 0; i < buttons.length; i++) {
    console.log(buttons[i])
    localStorage.setItem(city, "yellow");
    $(this).css("background-color", "yellow");
    
    }
    });
    // var city = $(this).attr("id"); 

});





    // var getColor;
    // if (localStorage.getItem("knowlton") !== null) {
    //   getColor = localStorage.getItem("knowlton");
    //   console.log(getColor)
    //   $(".learn-more-btn").each(function(){
    //       $
    //     //   get id of $(this)
    //     // check local storage



    //     // .css("background-color", getColor);
    //   })
    //   $(".learn-more-btn").on('click', function() {
    //     if (getColor !== null) {
    //       getColor = 'yellow';
    //       $(this).css('background-color', 'yellow');
    //       console.log(this)
    //       var city = $(this).attr("id")
    //       localStorage.setItem(city, 'yellow');
    //     } 
    //   // else {
    //   //     getColor = 'yellow';
    //   //     $('.gap-btn').css('background-color', 'yellow');
    //   //     localStorage.setItem('background', 'yellow');
    //   //     console.log("hello")
    //   //   }
    //   });


    // }



//   });

// var learnMoreBtn = document.querySelector(".gap-btn")
// var rememberBtn = localStorage.getItem("btn")
// var count = localStorage.getItem("count")
// //$("#9am.textBox").val(localStorage.getItem("9am"))
// // $("#btn").val(localStorage.getItem("btn"))

// learnMoreBtn.addEventListener("click", function () {
//     count++
//     localStorage.setItem("count", count)


// });
// if (count >= 1) {
//     console.log("count = " + count)
//     $(".gap-btn").css("background-color", "yellow");
//     console.log("gap")

// }
// if (count >= 1) {
//     console.log("count = " + count)
//     $(".patterson-btn").css("background-color", "yellow");

// }
// if (count >= 1) {
//     console.log("count = " + count)
//     $(".ellis-btn").css("background-color", "yellow");

// }
// if (count >= 1) {
//     console.log("count = " + count)
//     $(".estell-btn").css("background-color", "yellow");

// }
// if (count >= 1) {
//     console.log("count = " + count)
//     $(".motown-btn").css("background-color", "yellow");

// }
// if (count >= 1) {
//     console.log("count = " + count)
//     $(".pine-btn").css("background-color", "yellow");

// }






