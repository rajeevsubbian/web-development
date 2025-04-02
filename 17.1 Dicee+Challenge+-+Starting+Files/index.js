// Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Select the left image element
var leftDiceImage = document.querySelector(".img1"); // Use the correct class or ID from your HTML
// Select the right image element
var leftDiceImage = document.querySelector(".img2"); // Use the correct class or ID from your HTML

// Update the image source to match the random dice number
leftDiceImage.setAttribute("src", "images/dice" + randomNumber1 + ".png");
// Update the image source to match the random dice number
leftDiceImage.setAttribute("src", "images/dice" + randomNumber2 + ".png");
