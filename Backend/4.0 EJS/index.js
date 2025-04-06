import express from "express";

const app = express();
const port = 3000;

// Set EJS as the templating engine
// app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  // console.log(day);

  if (day === 0 || day === 6) {
    res.render("index.ejs", {
      dayType: "the weekend",
      advice: "it's time to relax !!!",
    });
  } else {
    res.render("index.ejs", {
      dayType: "a weekday",
      advice: "it's time to work hard",
    });
  }
});

// Home route  - Given by chatGPT
// app.get("/", (req, res) => {
//   const today = new Date();
//   const day = today.getDay(); // 0 = Sunday, 6 = Saturday

//   let message = "";

//   if (day === 0 || day === 6) {
//     message = "Hey! It's a weekend and it's time to have fun ! 🎉";
//   } else {
//     message = "Hey! It's a weekday and it's time to work hard! 💪";
//   }

//   res.render("index", { message: message });
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
