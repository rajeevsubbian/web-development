import React from "react";
import ReactDOM from "react-dom";
// import "./styles.css"; // Make sure styles.css is in src folder

const currentHour = new Date().getHours();
// const currentHour = 18;
let greeting = "";
let color = "";

if (currentHour < 12) {
  greeting = "Good Morning";
  color = "red";
} else if (currentHour < 18) {
  greeting = "Good Afternoon";
  color = "green";
} else {
  greeting = "Good Evening";
  color = "blue";
}

const headingStyle = {
  color: color,
  fontSize: "50px",
  fontWeight: "bold",
  textAlign: "center",
  padding: "20px",
};

ReactDOM.render(
  <h1 className="heading" style={headingStyle}>
    {greeting}
  </h1>,
  document.getElementById("root") // Ensure this matches an element in index.html
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
