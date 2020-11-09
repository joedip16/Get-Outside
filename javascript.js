var hello = "hello"

// manoli is awesome


function searchNationalPark(state) {

    state = "nj";

    $.ajax({
        type: "GET",
        url: `https://developer.nps.gov/api/v1/parks?stateCode=${state}&stateCode=&api_key=I7qeJmQumHGPtOSAaV4GqitG18NPnFk01uOCalSh`,
        dataType: "json",
    }).then(function(data) {
        console.log(data);
    })
};

searchNationalPark();