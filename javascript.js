var target = "_blank"

window.onload=function()
{
     $("#morristown").css("background-color",localStorage.getItem("morristown"));
     $("#knowlton").css("background-color",localStorage.getItem("knowlton"));
     $("#patterson").css("background-color",localStorage.getItem("patterson"));
     $("#hoboken").css("background-color",localStorage.getItem("hoboken"));
     $("#woodbine").css("background-color",localStorage.getItem("woodbine"));
     $("#new-libson").css("background-color",localStorage.getItem("new-libson"));
}

$(".my-modal").on("click", function(event){

    var cityName = $(this).attr("id");
    console.log(cityName);
    fiveDayWeatherMotown(cityName);

    // console.log("test1 my example")
    // console.log(fiveDayWeatherMotown());
    
});

// $('#weatherGapBtn1').on('show.bs.modal', function (e) {
//     // do something...
//     console.log("test1");
//   })
  
//   $('#weatherGapBtn2').on('show.bs.modal', function (e) {
//     // do something...
//     console.log("test2");
//   })

function searchNationalPark(state) {

    state = "nj";

    $.ajax({
       method: "GET",
        url: `https://developer.nps.gov/api/v1/parks?stateCode=${state}&stateCode=&api_key=I7qeJmQumHGPtOSAaV4GqitG18NPnFk01uOCalSh`,
        dataType: "json",
    }).then(function(response) {
        console.log(response);
    $(".waterGapText").text(response.data[2].description)
    $(".pattersonFallsText").text(response.data[9].description)
    $(".ellisIslandText").text(response.data[3].description)
    $(".estellManorText").text(response.data[5].description)
    $(".morristownText").text(response.data[7].description)
    $(".pinelandsText").text(response.data[8].description)

    $(".waterGapImg").attr(`src`, response.data[2].images[0].url)
    $(".pattersonImg").attr(`src`, response.data[9].images[1].url)
    $(".ellisImg").attr(`src`, response.data[3].images[0].url)
    $(".estellImg").attr(`src`, response.data[5].images[4].url)
    $(".morristownImg").attr(`src`, response.data[7].images[0].url)
    $(".pinelandsImg").attr(`src`, response.data[8].images[0].url)

    $(".greatEggHarbor").attr(`href`, response.data[5].url)
    $(".delWaterGap").attr(`href`, response.data[2].url)
    $(".padGreatFalls").attr(`href`, response.data[9].url)
    $(".ellisIsl").attr(`href`, response.data[3].url)
    $(".morTown").attr(`href`, response.data[7].url)
    $(".pineLand").attr(`href`, response.data[8].url)

    $(".morTown").attr("target", target);
    $(".delWaterGap").attr("target", target);
    $(".padGreatFalls").attr("target", target);
    $(".ellisIsl").attr("target", target);
    $(".pineLand").attr("target", target);
    $(".greatEggHarbor").attr("target", target);


});
    
}
searchNationalPark();

function fiveDayWeatherMotown(cityName) {

    // city = $();
    // var apiKey= "e8bb5a6ba8f08e6e176eb848cae16ef7"

    $.ajax({
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=b0d55d94d45640643224cf884f17469a&units=imperial`,
        dataType: "json",
    }).then(function(data){
        console.log(data);

        console.log(data);
        console.log(data.list.length);

            $("#weatherMotown").empty();
            for (var i = 0; i < data.list.length; i+=8){
            
            console.log(data.city.name);   
            var title = $("<h5>").addClass("card-title").text(data.city.name);
            var card = $("<div>").addClass("card fiveDay");
            var temp = $("<p>").addClass("card-text").text(`Temperature : ${data.list[i].main.temp}`);
            var wind = $("<p>").addClass("card-text").text(`Wind Speed: ${data.list[i].wind.speed}`);
            var humidity = $("<p>").addClass("card-text").text(`Humidity: ${data.list[i].main.humidity}`);

            var cardBody = $("<div>").addClass("card-body");
            cardBody.append(title, temp, wind, humidity);
            card.append(cardBody);
            $("#weatherMotown").append(card);
        }
    })
}

// fiveDayWeatherMotown();



function weatherGap() {

    // city = "Knowlton";
    // var apiKey= "e8bb5a6ba8f08e6e176eb848cae16ef7"

    $.ajax({
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/forecast?q=Knowlton&appid=b0d55d94d45640643224cf884f17469a",
        dataType: "json",
    }).then(function(data){
        console.log(data);

        console.log(data);
        console.log(data.list.length);

            for (var i = 0; i < data.list.length; i+=8){
            
            console.log(data.city.name);   
            var title = $("<h5>").addClass("card-title").text(data.list[i].dt_txt);
            var card = $("<div>").addClass("card fiveDay");
            var temp = $("<p>").addClass("card-text").text(`Temperature : ${data.list[i].main.temp}`);
            var wind = $("<p>").addClass("card-text").text(`Wind Speed: ${data.list[i].wind.speed}`);
            var humidity = $("<p>").addClass("card-text").text(`Humidity: ${data.list[i].main.humidity}`);

            var cardBody = $("<div>").addClass("card-body");
            cardBody.append(title, temp, wind, humidity);
            card.append(cardBody);
            $("#weatherGap").append(card);
        }
    })
}
// weatherGap();

function compareClick() {


    
    var counter = $(this).attr()
}