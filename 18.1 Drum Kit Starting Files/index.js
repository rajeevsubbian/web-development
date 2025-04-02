// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked");
// }
document.querySelectorAll("button").forEach(function (button) {
  button.addEventListener("click", function () {
    alert("I got clicked");
  });
});
