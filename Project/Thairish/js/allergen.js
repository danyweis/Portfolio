/*var allergenShow = function() {
    var theItems = document.querySelectorAll('.productList div input');
        var i;
        for(i = 1; i < 15; i++){
            var productID = document.getElementById("num" + i);
            
            var food = "num" + i;
            console.log(food);
            if(productID.checked !== food ){
                console.log(i);
            } else{
                console.log("yes");
            };
        };  
};
*/

function allergenShow(element) {
    // Get the checkbox
    var checkBox = document.getElementById("num" + element);
    // Get the output text
    var text = document.getElementsByClassName("num" + element);
  var i;
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        for(i = 0; i<text.length; i++){
            text[i].style.display = "none";
        };
      
    } else {
        for(i = 0; i<text.length; i++){
            text[i].style.display = "block";
        };
    };
  }; 

  