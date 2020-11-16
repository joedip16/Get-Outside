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

    });
    
    

});
