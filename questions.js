//Quiz Questions//
let questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in Javascript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log",
  },
];

let questionIndex = 0;
let time = questions.length * 15;
let timerId;

//Variables to reference elements in Index.html:
let currentTimeEl = document.getElementById("currentTime");
let firstScreenEl = document.getElementById("firstScreen");
let startButtonEl = document.getElementById("startButton");
let quizQuestionsEl = document.getElementById("quizQuestions");
let questionsTitleEl = document.getElementById("questionsTitle");
let questionsChoicesEl = document.getElementById("questionsChoices");
let feedbackEl = document.getElementById("feedback");

//Funtion for quiz start//
function startQuiz() {
  firstScreenEl.setAttribute("class", "hide");
  quizQuestionsEl.removeAttribute("class");

  // timerId = setInterval(clockTick, 1000);

  // // show starting time
  // currentTimeEl.textContent = time;
  getQuestion();
}

function getQuestion() {
  let currentQuestion = questions[questionIndex];
  questionsTitleEl.textContent = currentQuestion.title;

  questionsChoicesEl.innerHTML = "";
  // for each is new version of for loop - choice can be name anything you want, but has to be singular
  currentQuestion.choices.forEach(function (choice, i) {
    //console.log(choice);
    // create new button for each choice
    let choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceNode.onclick = questionClick;

    // display on the page
    questionsChoicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  //console.log("click");
  // console.log(questions[questionIndex]);

  //console.log(this.value);

  if (this.value === questions[questionIndex].answer) {
    console.log("correct answer");
    feedbackEl.textContent = "Correct!";
  } else {
    console.log("wrong answer");
    feedbackEl.textContent = "Wrong!";
  }
   // flash right/wrong feedback on page for half a second
   feedbackEl.setAttribute("class", "feedback");
   setTimeout(function() {
     feedbackEl.setAttribute("class", "feedback hide");
   }, 1000);

  questionIndex++;
  console.log(questionIndex);

  if (questionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
    console.log("next question");
  }
  
}

//function endQuiz

startButtonEl.addEventListener("click", startQuiz);
