import React from "react";
import ReactDOM from "react-dom";

const fname = "Rajeev";
const lname = "Subbian";
const getYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear;
};

ReactDOM.render(
  <div>
    <p>
      Created by {fname} {lname}!
    </p>
    <p>Copyright {getYear()}</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
