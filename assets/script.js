// Create variables to access different parts of the document (DOM Traversal)
var containerEl = document.querySelector(".card");
var questionEl = document.querySelector(".questions");
var buttonEl = document.querySelector(".button");

// Create array of objects to contain question data
var prompt = [
  {
    title: "Broncos Quiz",
    start:
      "Try to answer the following questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!",
    answer1: "Start Quiz",
  },
  {
    title: "Question 1:",
    question: "what letter does Atwater start with?",
    answer1: "a",
    answer2: "b",
    answer3: "c",
    answer4: "d",
    correct: "a",
  },
];

// Set initial form for page to start quiz
function initialPage() {
  var state = containerEl.getAttribute("data-state");
  var h1El = document.createElement("h1");
  var h2El = document.createElement("h2");
  h1El.setAttribute("class", "title");
  h2El.setAttribute("class", "questions");

  var button1 = document.createElement("button");
  button1.setAttribute("class", "button");
  var button2 = document.createElement("button");
  button2.setAttribute("class", "button");
  var button3 = document.createElement("button");
  button3.setAttribute("class", "button");
  var button4 = document.createElement("button");
  button4.setAttribute("class", "button");

  if (state === "initial") {
    containerEl.appendChild(h1El);
    containerEl.appendChild(h2El);
    containerEl.appendChild(button1);
    h1El.textContent = prompt[0].title;
    h2El.textContent = prompt[0].start;
    button1.textContent = prompt[0].answer1;
  } else {
    while (containerEl.firstChild) {
      containerEl.removeChild(containerEl.firstChild);
    }
    containerEl.setAttribute("class", "quiz");
    containerEl.appendChild(h1El);
    containerEl.appendChild(h2El);
    containerEl.appendChild(button1);
    containerEl.appendChild(button2);
    containerEl.appendChild(button3);
    containerEl.appendChild(button4);
    h1El.textContent = prompt[1].title;
    h2El.textContent = prompt[1].question;
    button1.textContent = prompt[1].answer1;
    button2.textContent = prompt[1].answer2;
    button3.textContent = prompt[1].answer3;
    button4.textContent = prompt[1].answer4;
  }
}

initialPage();

// Change to quiz state with event listener
containerEl.addEventListener("click", function () {
  var state = containerEl.getAttribute("data-state");
  if (state === "initial") {
    containerEl.dataset.state = "quiz";
    initialPage();
  } else {
    return;
  }
});
