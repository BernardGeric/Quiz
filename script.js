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