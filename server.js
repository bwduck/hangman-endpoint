var express = require("express");
var cors = require("cors");

var app = express();

app.use(cors());

const PUZZLES = [
  {
    question: "Who led the Leafs in points in 2018-2019",
    answer: "Mitch Marner",
    congrats: "He's a Leaf!"
  },
  {
    question: "What is the capital of Canada?",
    answer: "Ottawa",
    congrats: "Good job eh?"
  },
  {
    question: 'Finish these lyrics: "Never gonna..."',
    answer: "give you up",
    congrats: "I am so sorry...."
  }
];

const getRandomInt = max => Math.floor(Math.random() * max);

app.get("/hangman", (req, res, next) => {
  res.json(PUZZLES[getRandomInt(PUZZLES.length)]);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 3000");
});
