var questions = [
    {
      question: "How can you make a numbered list?",
      choices: ["<ul>", "<list>", "<ol>", "<dl>"],
      correctAnswer: 2
    },
    {
      question: "Choose the correct HTML element for the largest heading:",
      choices: ["<head>", "<h6>", "<heading>", "<h1>"],
      correctAnswer: 3
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      choices: ["<br>", "<lb>", "<jk>", "<break>"],
      correctAnswer: 0
    },
    {
        question: "Which character is used to indicate an end tag?",
        choices: ["/", "@", "<", "*"],
        correctAnswer: 0
      },
      {
        question: "How can you make a bulleted list?",
        choices: ["<dl>", "<list>", "<ul>", "<kk>"],
        correctAnswer: 2
      },
      {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        choices: ["src", "title", "alt", "long"],
        correctAnswer: 2
      }
  ];
  
  var currentQuestion = 0;
  var score = 0;
  var timer;
  var timeRemaining = 60; 
  
  function displayQuestion() {
    var questionElement = document.getElementById("question");
    var choicesElement = document.getElementById("choices");
    questionElement.innerHTML = "";
    choicesElement.innerHTML = "";
    questionElement.innerHTML = questions[currentQuestion].question;
      for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
      var choice = document.createElement("input");
      choice.type = "radio";
      choice.name = "quizOption";
      choice.value = i;
  
      var label = document.createElement("label");
      label.appendChild(choice);
      label.appendChild(document.createTextNode(questions[currentQuestion].choices[i]));
  
      choicesElement.appendChild(label);
    }
  }
  // Function for submit button 
function submitAnswer() {
    var selectedOption = document.querySelector('input[name="quizOption"]:checked');
    if (selectedOption) {
      var answer = parseInt(selectedOption.value);
      if (answer === questions[currentQuestion].correctAnswer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion === questions.length) {
        clearInterval(timer);
        document.getElementById("quizContainer").innerHTML = "Quiz Complete! Your score is: " + score + " out of " + questions.length
      updateHighScore();
      return;
    }
    displayQuestion();
  }
}
// Timer function
function startTimer() {
    var timerElement = document.getElementById("timer");

    timerElement.innerHTML = "Time Remaining: " + timeRemaining + "s";

    var timer = setInterval(function () {
      timeRemaining--;
      timerElement.innerHTML = "Time Remaining: " + timeRemaining + "s";
      if (timeRemaining <= 0 || currentQuestion === questions.length) {
        clearInterval(timer);
        if (timeRemaining <= 0) {
          document.getElementById("quizContainer").innerHTML = "Time's up! Your score is: " + score + " out of " + questions.length;
        } else {
          document.getElementById("quizContainer").innerHTML = "Quiz Complete! Your score is: " + score + " out of " + questions.length;
          updateHighScore();
        }
      }
    }, 1000);
  }
// Update the high score
function updateHighScore() {
    highScore = Math.max(score, highScore);
    document.getElementById("highScore").textContent = highScore;
  }
  
  document.getElementById("submitBtn").addEventListener("click", submitAnswer);
  

  displayQuestion();
  startTimer();