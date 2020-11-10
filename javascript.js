var hello = "hello"

// manoli is awesome


function searchNationalPark(state) {

    state = "nj";

    $.ajax({
       method: "GET",
        url: `https://developer.nps.gov/api/v1/parks?stateCode=${state}&stateCode=&api_key=I7qeJmQumHGPtOSAaV4GqitG18NPnFk01uOCalSh`,
        dataType: "json",
    }).then(function(data) {
        console.log(data);
    })
};

searchNationalPark();


function fiveDayWeather() {

    // city = "morristown";
    // var apiKey= "e8bb5a6ba8f08e6e176eb848cae16ef7"

    $.ajax({
        method: "GET",
        url: "http://api.openweathermap.org/data/2.5/forecast?q=Morristown&appid=b0d55d94d45640643224cf884f17469a",
        dataType: "json",
    }).then(function(response){
        console.log(response);
    })
}

fiveDayWeather();