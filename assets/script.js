// Create variables to access different parts of the document (DOM Traversal)
var containerEl = document.querySelector(".card");
var titleEl = document.querySelector(".title");
var questionEl = document.querySelector(".questions");
var startButton = document.querySelector(".start-button");
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
}

containerEl.addEventListener("click", function (event) {
  var answer = event.target.textContent;
  if (answer === prompt[questionIndex].correct) {
    questionIndex++;
    console.log("correct");
    renderQuestions();
  } else {
    console.log("incorrect");
    renderQuestions();
  }
});

// // Create event listener awaiting the answer to be clicked
// quizButton.addEventListener("click", function (event) {
//   console.log(event.target.textContent);
// });

// for (var i = 0; i < prompt.length; i++) {
//   var h1El = document.createElement("h1");
//   //   h1El[i].setAttribute("class", "title");
//   //   h1El[i].textContent = prompt[i].title;
// }
// console.log(h1El);
// var h1El = document.createElement("h1");
// var h2El = document.createElement("h2");
// h1El.setAttribute("class", "title");
// h2El.setAttribute("class", "questions");

// var button1 = document.createElement("button");
// button1.setAttribute("class", "button");
// var button2 = document.createElement("button");
// button2.setAttribute("class", "button");
// var button3 = document.createElement("button");
// button3.setAttribute("class", "button");
// var button4 = document.createElement("button");
// button4.setAttribute("class", "button");

// // Set initial form for page to start quiz
// function initialPage() {
//   var state = containerEl.getAttribute("data-state");

//   if (state === "initial") {
//     containerEl.appendChild(h1El);
//     containerEl.appendChild(h2El);
//     containerEl.appendChild(button1);
//     h1El.textContent = prompt[0].title;
//     h2El.textContent = prompt[0].start;
//     button1.textContent = prompt[0].answer1;
//   } else {
//     while (containerEl.firstChild) {
//       containerEl.removeChild(containerEl.firstChild);
//     }
//     containerEl.setAttribute("class", "quiz");
//     containerEl.appendChild(h1El);
//     containerEl.appendChild(h2El);
//     containerEl.appendChild(button1);
//     containerEl.appendChild(button2);
//     containerEl.appendChild(button3);
//     containerEl.appendChild(button4);
//     h1El.textContent = prompt[1].title;
//     h2El.textContent = prompt[1].question;
//     button1.textContent = prompt[1].answer1;
//     button2.textContent = prompt[1].answer2;
//     button3.textContent = prompt[1].answer3;
//     button4.textContent = prompt[1].answer4;
//   }
// }

// initialPage();

// // Change to quiz state with event listener
// containerEl.addEventListener("click", function (event) {
//   event.stopPropagation();
//   var state = containerEl.getAttribute("data-state");
//   if (state === "initial") {
//     containerEl.dataset.state = "quiz";
//     initialPage();
//     quizGuess();
//   }
// });

// function quizGuess() {
//   if (state === "quiz") {
//     containerEl.addEventListener("click", function (event) {
//       guess = event.target.textContent;
//     });
//     if (guess === prompt[1].answer) {
//       console.log("correct");
//     }
//   }
// }

//     if (event.target.textContent === prompt[i].correct) {
//       do {
//         i = i + 1;
//         h1El.textContent = prompt[i].title;
//         h2El.textContent = prompt[i].question;
//         button1.textContent = prompt[i].answer1;
//         button2.textContent = prompt[i].answer2;
//         button3.textContent = prompt[i].answer3;
//         button4.textContent = prompt[i].answer4;
//       } while (i < prompt.length);
//     } else {
//       console.log("incorrect");
//     }
//   }
// });
