//Quiz Questions//
let questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];


let questionIndex = 0;
let time = questions.length * 15;
let timerId; 

//Variables to reference elements in Index.html//
let questionsEl = document.getElementById("questions");
//let timerEl = document.getElementById.length("currentTime");
let choicesEl = document.getElementById("choices");
let startBtn = document.getElementById("start");

//Funtion for quiz start//
function startQuiz() { 
    //also start timer//
    let startScreenEl = document.getElementById("quizQuestions");
    startScreenEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");

    getQuestion();
}

function getQuestion() {
    console.log(questions);
    let currentQuestion = questions[questionIndex];
    console.log(currentQuestion);
    let questionTitle = document.getElementById("question-title");
    questionTitle.textContent = currentQuestion.title;
     let questionChoices = document.getElementById("choices");
     

    let choicesList = document.createElement("ul");
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        let listEl = document.createElement("li");
        listEl.textContent = currentQuestion.choices[i]; 
        listEl.addEventListener("click",handleClick);
        choicesList.appendChild(listEl);

        //add event listener to each choice

    }
    choicesEl.appendChild(choicesList);

} 
function handleClick() {
alert("hi");
}
startBtn.addEventListener("click",startQuiz);

