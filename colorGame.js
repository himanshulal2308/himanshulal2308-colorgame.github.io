var numSqaures=6;
var colors= [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#Reset");
var modeButtons=document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	//mode buttons event listeners
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSqaures =3 : numSqaures = 6;
			reset(); 
		});
	}
}
function setUpSquares(){
	for(var i=0;i<squares.length;i++){
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor){
				reset.textContent = "Play Again?"
				message.textContent = "Correct!";
				h1.style.backgroundColor = clickedColor;
				changeColors(clickedColor);
			}else{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again!";
			}
		});
	}
}
function reset(){
	colors=generateRandomColor(numSqaures);
	pickedColor = pickColor();
	resetButton.textContent="New Colors";
	h1.style.backgroundColor = "steelblue";
	colorDisplay.textContent = pickedColor;
	message.textContent="";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
}

resetButton.addEventListener("click",function(){
	reset();
});

function changeColors(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = [];

	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}

	for(var i=0;i<num;i++){
		console.log(arr[i]+" ");
	}
	return arr;
}

function randomColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}