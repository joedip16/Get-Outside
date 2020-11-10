var hello = "hello"

// manoli is awesome

var man = "woman"
var women = "man"

// "https://www.hikingproject.com/data/get-trails?lat=40.0583&lon=74.4057&maxDistance=10&key=200970119-76c616d7fe6494bc98bdcc7bc2b32137"


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


function fiveDayWeather (city) {

    city = "Morristown";
    // var apiKey= "e8bb5a6ba8f08e6e176eb848cae16ef7"

    $.ajax({
        method: "GET",
        url: `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e8bb5a6ba8f08e6e176eb848cae16ef7`,
        dataType: "json",
    }).then(function(response){
        console.log(response);
    })
}

fiveDayWeather();