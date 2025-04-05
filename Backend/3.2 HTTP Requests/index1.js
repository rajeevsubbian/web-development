import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

// Did not work from here so downloaded separately in 3.3 Postman folder

app.post("/register", (req, res) => {
  res.sendstatus(201);
});

app.put("/user/rajeev", (req, res) => {
  res.sendstatus(200);
});
app.patch("/user/rajeev", (req, res) => {
  res.sendstatus(200);
});
app.delete("/user/rajeev", (req, res) => {
  res.sendstatus(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
