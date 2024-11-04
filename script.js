const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const scoreElement = document.getElementById('score');
const scoreValue = document.getElementById('score-value');

let shuffledQuestions, currentQuestionIndex;
let score = 0;

const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Lisbon", correct: false }
      ]
    },
    {
      question: "Which language runs in a web browser?",
      answers: [
        { text: "Java", correct: false },
        { text: "C", correct: false },
        { text: "Python", correct: false },
        { text: "JavaScript", correct: true }
      ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
          { text: "Central Style Sheets", correct: false },
          { text: "Cascading Style Sheets", correct: true },
          { text: "Cascading Simple Sheets", correct: false },
          { text: "Cars SUVs Sailboats", correct: false }
        ]
      }
    ];

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
currentQuestionIndex++;
setNextQuestion();
});
restartButton.addEventListener('click', restartQuiz);

function startQuiz() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.classList.remove('hide');
    scoreValue.textContent = score;
    questionContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtons.appendChild(button);
    });
  }

  function resetState() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
