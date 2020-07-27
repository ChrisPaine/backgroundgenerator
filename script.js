var css = document.querySelector("h3");
var hex = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randStartBtn = document.getElementById("randstart");
var randEndBtn = document.getElementById("randend");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	

	css.textContent = body.style.background + ";";
	hex.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value	+ ")" +";";
}

function randomColorHex() {
	return Math.floor(Math.random()*16777215).toString(16);
}

//On page load
body.style.background = "linear-gradient(to right, " + "#00ff00" + ", " + "#ff0000" 	+ ")";

css.textContent = body.style.background + ";";
hex.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value	+ ")" +";";


//Events
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randStartBtn.addEventListener("click", function() {
	var hex = randomColorHex();
	color1.value = "#" + hex;
	setGradient();
});
randEndBtn.addEventListener("click", function() {
	var hex = randomColorHex();
	color2.value = "#" + hex;
	setGradient();
});