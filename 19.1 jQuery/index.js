$("button").click(function () {
  $("h1").toggleClass("purple-text");
});

$(document).keypress(function (event) {
  $("h1").text(event.keys);
});
