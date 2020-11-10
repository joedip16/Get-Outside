var hello = "hello"

// manoli is awesome


function searchNationalPark(state) {

    state = "nj";

    $.ajax({
        type: "GET",
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

    var imgUrl = response.data[9].images[0].url
    $(".patterson-pic").text(response.data[9].images[0].url)
    $(".pinelandsText").text(response.data[8].description)
    $(".pinelandsText").text(response.data[8].description)
    $(".pinelandsText").text(response.data[8].description)
    $(".pinelandsText").text(response.data[8].description)
    $(".pinelandsText").text(response.data[8].description)
    






});
}
searchNationalPark();
