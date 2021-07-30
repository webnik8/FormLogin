/* Here goes your JS code */

var popup = document.getElementsByClassName("popup");

function formShow() {
popup[0].style.display = "block";
popup[0].style.position = "absolute";
}  

var closebtns = document.getElementsByClassName("close");  

closebtns[0].addEventListener("click", function() {
popup[0].style.display = "none";
});
 
$(document).ready(function() {
$(document).on('submit', '#myForm', function() {  
popup[0].style.display = "none";
document.getElementById("success-message").style.display = "block";
document.getElementById("show-popup-form").style.display = "none";  
  return false;
 });
});