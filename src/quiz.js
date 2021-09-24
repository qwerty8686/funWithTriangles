var form = document.querySelector(".form");
var button = document.querySelector(".button");
var message = document.querySelector(".message");
var answers = [
  "90°",
  "(5,12,13)",
  "Equilateral Triangle",
  "Hypotenuse",
  "15",
  "30",
  "Acute",
  "Obtuse",
  "180°",
  "3"
];

function quizHandler() {
  var i = 0;
  var score = 0;
  var formAns = new FormData(form);
  for (var ans of formAns.values()) {
    if (ans) {
      if (ans === answers[i]) {
        score = score + 1;
      }
      i++;
      message.innerText = "Congrats!🥳 Your Score is " + score;
    } else {
      message.innerText = "Select options";
    }
  }
}

button.addEventListener("click", quizHandler);
