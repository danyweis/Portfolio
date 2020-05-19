// looking for brave browser

var brave = window.hasOwnProperty("Brave");
console.log("you use the Brave browser : " + brave);
var formContainer = document.querySelector(".formContainer");
var mail = document.querySelector(".contactMailBox");

if (brave) {
    formContainer.style = "display: none;";
    mail.style = "display: block;";
}
