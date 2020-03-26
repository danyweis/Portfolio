/** ==> POSITION OF THE ISS <== **/

var positionData = "";
var positionLongitude = "";
var positionLatitude = "";

function callISS() {

    ajaxGet("http://api.open-notify.org/iss-now.json", function (reponse) {
        positionData = JSON.parse(reponse);
        //console.log(positionData.iss_position);
        positionLongitude = positionData.iss_position.longitude;
        positionLatitude = positionData.iss_position.latitude;

        var longitude = document.getElementById("longitude");
        longitude.textContent = "Longitude : " + positionLongitude;
        var latitude = document.getElementById("latitude");
        latitude.textContent = "Latitude : " + positionLatitude;


        /** ==> MOVE THE ISS <== **/
        var logoPosition = document.getElementById("logoISS");


        var long = "";
        var test = "";
        long = positionLongitude * 0.2777777778;
        //long = long + 50;
        logoPosition.style.left = "calc(" + long + "% + 50% - 25px)";
        var lat = "";
        var calcLat = "";
        lat = Number(positionLatitude) * 0.5555555556;
        //console.log(lat)
        //lat = lat + 50;
        logoPosition.style.bottom = "calc(" + lat + "% + 50% - 25px)";
        //console.log(positionLatitude);
        //console.log(lat)



    });
    setTimeout(callISS, 5000);
};
callISS();
// REFRESH POSITION EVERY 5 SEC





/** ==> PEOPLE IN SPACE <== **/

var manInSpace = "";
var numberOfMan = "";

ajaxGet("http://api.open-notify.org/astros.json", function (reponse) {
    manInSpace = JSON.parse(reponse);
    numberOfMan = manInSpace.number;
    //console.log(manInSpace.people);
    arrPeople = manInSpace.people;
    for (var i = 0; i < arrPeople.length; i++) {
        var names = document.createElement('p');
        //console.log(arrPeople[i].name);
        names.textContent = arrPeople[i].name;
        var nameList = document.getElementById("humanNames");
        nameList.appendChild(names);
    }
    var people = document.getElementById("people");
    people.textContent = "There are currently " + numberOfMan + " humans in space"
});


/** ==> buttons <== **/

document.getElementById("space").addEventListener("click", function () {
    document.getElementById("map").style.display = "none";
    document.getElementById("main").style.display = "block";
});

document.getElementById("toTheMap").addEventListener("click", function () {
    document.getElementById("main").style.display = "none";
    document.getElementById("map").style.display = "block";
});