// Create variables to access different parts of the document (DOM Traversal)
var containerEl = document.querySelector(".card");
var titleEl = document.querySelector(".title");
var questionEl = document.querySelector(".questions");
var startButton = document.querySelector(".start-button");
var incorrectEl = document.querySelectorAll(".hidden");
console.log(incorrectEl[1]);
var questionIndex = 0;

// Create array of objects to contain question data
var prompt = [
  {
    title: "Question 1:",
    question:
      "Who was the quarterback for the Broncos in their first Super Bowl Appearance (Super Bowl XII)?",
    answer: ["Peyton Manning", "John Elway", "Craig Morton", "Jake Plummer"],
    correct: "Craig Morton",
  },
  {
    title: "Question 2:",
    question: "Who is the Broncos all-time sacks leader?",
    answer: [
      "Von Miller",
      "Elvis Dumervil",
      "Simon Fletcher",
      "Karl Mecklenburg",
    ],
    correct: "Von Miller",
  },
  {
    title: "Question 3:",
    question:
      "Who won MVP in the Broncos first Super Bowl win (Super Bowl XXXII)?",
    answer: ["John Elway", "Rod Smith", "Steve Atwater", "Terrell Davis"],
    correct: "Terrell Davis",
  },
  {
    title: "Question 4:",
    question: "Who is the Broncos all-time winningest coach?",
    answer: ["Dan Reeves", "Mike Shanahan", "Red Miller", "John Fox"],
    correct: "Mike Shanahan",
  },
  {
    title: "Question 5:",
    question:
      "Which Bronco holds the record for the most touchdown passes in a season?",
    answer: ["John Elway", "Jake Plummer", "Peyton Manning", "Brian Griese"],
    correct: "Peyton Manning",
  },
];

// Create event listener to start the game when the start button is clicked
startButton.addEventListener("click", startGame);

// Start game will render the first question and start timer after the start button is clicked
function startGame(event) {
  event.stopImmediatePropagation();
  //   isWin = false;
  //   timerCount = 10;
  //   startTimer ();
  renderQuestions();
}

// Render questions will display the questions and answers for the quiz
function renderQuestions() {
  while (containerEl.firstChild) {
    containerEl.removeChild(containerEl.firstChild);
  }
  if (questionIndex < prompt.length) {
    containerEl.setAttribute("class", "quiz");
    var h1El = document.createElement("h1");
    h1El.setAttribute("class", "title");
    h1El.textContent = prompt[questionIndex].title;
    containerEl.appendChild(h1El);
    var h2El = document.createElement("h2");
    h1El.setAttribute("class", "question");
    h2El.textContent = prompt[questionIndex].question;
    containerEl.appendChild(h2El);
    for (var i = 0; i < prompt[questionIndex].answer.length; i++) {
      var button = document.createElement("button");
      button.setAttribute("class", "button");
      button.textContent = prompt[questionIndex].answer[i];
      containerEl.appendChild(button);
    }
  } else {
    containerEl.setAttribute("class", "hidden");
    userInput();
  }
}

containerEl.addEventListener("click", function (event) {
  var answer = event.target.textContent;
  if (answer === prompt[questionIndex].correct) {
    questionIndex++;
    correctAnswer();
    renderQuestions();
  } else {
    incorrectAnswer();
    renderQuestions();
  }
});

function incorrectAnswer() {
  incorrectEl[0].setAttribute("class", "shown");
}

function correctAnswer() {
  incorrectEl[0].setAttribute("class", "hidden");
}

function userInput() {
  incorrectEl[1].setAttribute("class", "card");
}
