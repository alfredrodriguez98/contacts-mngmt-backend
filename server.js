//Creating an express server
const express = require("express");
//To use dynamic port value from .env file
const dotenv = require("dotenv").config();

//Create an express app
const app = express();

//Define a port
// const port = 3000; - hardcoding a static server port. But can be done
// dynamically as shown below
const port = process.env.PORT || 5000;

app.get("/api/contacts", (req, res) => {
  // res.send("Get all your contacts");
  res.json({ message: "This is the response in JSON format" });
});

//Listen to server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//To test the APIs, we need http client - using thunderclient extension to avoid
//switching between vs code and postman
