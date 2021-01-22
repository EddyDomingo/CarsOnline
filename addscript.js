// Email confirm modal

var btn = document.getElementById("EmailConfirmation") 
var modal = document.getElementById("ConfirmModal") 
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }