// Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Select the left image element
var leftDiceImage = document.querySelector(".img1"); // Use the correct class or ID from your HTML
// Select the right image element
var rightDiceImage = document.querySelector(".img2"); // Use the correct class or ID from your HTML

// Select the h1 element
var heading = document.querySelector("h1");

// Update the image source to match the random dice number
leftDiceImage.setAttribute("src", "images/dice" + randomNumber1 + ".png");
// Update the image source to match the random dice number
rightDiceImage.setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Update the heading text based on the dice values
if (randomNumber1 > randomNumber2) {
  heading.textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  heading.textContent = "Player 2 Wins! 🚩";
} else {
  heading.textContent = "It's a Draw! 🎲";
}
