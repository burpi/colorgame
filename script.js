var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbCode = document.getElementById("rgbcode");
var messageDisplay = document.querySelector("#message");
var div = document.querySelector(".headline");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easybtn");
var hardBtn = document.querySelector("#hardbtn");

//niet vergeten code op te schonen!


easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    }else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numOfSquares = 6
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  rgbCode.textContent = pickedColor;
  messageDisplay.textContent = "";
  this.textContent = "play again"
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  div.style.background = "#020202";
  this.textContent = "new game";
})

rgbCode.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.background = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.background;
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "You won";
      resetButton.textContent = "play again";
      changeColors(clickedColor);
      div.style.background = clickedColor
    }else {
      this.style.background = "#020202";
      messageDisplay.textContent = "Try again"
    }
  });
}


function changeColors(colors){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = pickedColor;
  }
}


function pickColor(){
var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = []
for (var i = 0; i < num; i++) {
arr.push(randomKleur())
}
    return arr;
}

function randomKleur(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
