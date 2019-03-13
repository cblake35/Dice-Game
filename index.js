

//function used to generate a random number between 1-6
function NumberGenerator() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}


//used to alter the dice images depending on what number the dice lands
var dice1 = NumberGenerator();
document.querySelector(".img1").src = "images/dice" + dice1 + ".png";

var dice2 = NumberGenerator();
document.querySelector(".img2").src = "images/dice" + dice2 + ".png";

//conditional statement used to select which player wins or if its a draw
if (dice1 > dice2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (dice2 > dice1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
