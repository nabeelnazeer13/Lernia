

const header = document.getElementById("header");
const button = document.getElementById("chngbtn");

button.addEventListener("click", changetext);

function changetext() {
    header.innerText = "Goodbye World";
}