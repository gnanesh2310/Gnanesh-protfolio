var modal = document.getElementById("myModal");
var img = document.querySelectorAll(".event-photo");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function openModal(element) {
    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}
