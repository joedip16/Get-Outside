var hello = "yellow"

// manoli is awesome


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



});
    
}
searchNationalPark();

function fiveDayWeather() {

    // city = "morristown";
    // var apiKey= "e8bb5a6ba8f08e6e176eb848cae16ef7"

    $.ajax({
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/forecast?q=Morristown&appid=b0d55d94d45640643224cf884f17469a",
        dataType: "json",
    }).then(function(data){
        console.log(data);

        console.log(data);
        console.log(data.list.length);

            for (var i = 0; i < data.list.length; i+=8){
            
            console.log(data.city.name);   
            var title = $("<h5>").addClass("card-title").text(data.city.name);
            var card = $("<div>").addClass("card col-md-2 fiveDay");
            var temp = $("<p>").addClass("card-text").text(`Temperature : ${data.list[i].main.temp}`);
            var wind = $("<p>").addClass("card-text").text(`Wind Speed: ${data.list[i].wind.speed}`);
            var humidity = $("<p>").addClass("card-text").text(`Humidity: ${data.list[i].main.humidity}`);

            var cardBody = $("<div>").addClass("card-body");
            cardBody.append(title, temp, wind, humidity);
            card.append(cardBody);
            $("#forecast").append(card);
        }
    })
}

fiveDayWeather();


// 