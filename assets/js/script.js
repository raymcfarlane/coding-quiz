var quizContainer = document.getElementById("quizContainer");
var loadQuestion= document.getElementById("start");
var loadNextQuestion = document.getElementById("next");
var submit = document.getElementById("submit");
var resultsContainer = document.getElementById("results");
var answers = document.getElementById("answers");


var myQuestions = [
    {
        title: "where do we put the Javascript link?",
        choices: ["body", "footer", "header"],
        correctAnswer: "body"
    },
    {
        title: "String values must be enclosed within ____",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        correctanswer: "quotes"
    },
];

loadQuestion.addEventlistener("click", myQuestions);

function loadQuestion = {
    myQuestions
}