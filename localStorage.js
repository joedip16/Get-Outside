$(document).ready(function() {
    var getColor;
    if (localStorage.getItem("background") !== null) {
      getColor = localStorage.background;
      $(".gap-btn").css("background-color", getColor);
    }
  
    $(".gap-btn").on('click', function() {
      if (getColor !== null) {
        getColor = 'yellow';
        $(".gap-btn").css('background-color', 'yellow');
        localStorage.setItem('background', 'yellow');
      } 
    // else {
    //     getColor = 'yellow';
    //     $('.gap-btn').css('background-color', 'yellow');
    //     localStorage.setItem('background', 'yellow');
    //   }
    });
    
  });
























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






