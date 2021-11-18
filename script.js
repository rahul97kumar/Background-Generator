var color1 = document.querySelector(".input1");
var color2 = document.querySelector(".input2");
var body = document.getElementById("gradient");
var css = document.querySelector("h3");
var button = document.querySelector(".btn");

color1.addEventListener("input",Setgradient)
color2.addEventListener("input",Setgradient)
window.addEventListener(document.onload, Setgradient);
button.addEventListener("click", setRandomColor);

function Setgradient()
{
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";	
}

function setRandomColor(){
	color1.value = getRandomColor(); 
	color2.value = getRandomColor();
	Setgradient();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

