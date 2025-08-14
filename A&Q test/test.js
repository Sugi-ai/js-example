const questions = [
  {
    question: "which is larger animal in the world ?",
    answer: [
      { text: "shark", correct: false },
      { text: "lion", correct: false },
      { text: "blue whale", correct: true },
      { text: "gorilla", correct: false },
    ],
  },
  {
    question: "what color is the sky on a clear day? ",
    answer: [
      { text: "green", correct: false },
      { text: "blue", correct: true },
      { text: "red", correct: false },
      { text: "grey", correct: false },
    ],
  },
  {
    question: "How many legs does a cat have?",
    answer: [
      { text: "2", correct: false },
      { text: "8", correct: false },
      { text: "4", correct: true },
      { text: "3", correct: false },
    ],
  },

  {
    question: "whats is 2 + 3? ",
    answer: [
      { text: "3", correct: false },
      { text: "5", correct: true },
      { text: "4", correct: false },
      { text: "6", correct: false },
    ],
  },
];

const question = document.getElementById("question");
const answersBtns = document.getElementById("answers-btns");
const nextBtn = document.getElementById("nextBtn");
let currentIdx = 0;
let score = 0;

function startQuiz() {
  currentIdx = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuiz();
}

function resetAll() {
  question.innerHTML = "";
  nextBtn.style.display = "none";
  answersBtns.innerHTML = "";
}

function showQuiz() {
  resetAll();
  let currentQuestion = quetions[currentIdx];
  let questionNo = currentIdx + 1;
  question.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answer.forEach((el) => {
    const btn = document.createElement("button");
    btn.innerHTML = el.text;
    btn.classList.add("btn");
    answersBtns.appendChild(btn);
    if (el.correct) {
      btn.dataset.correct = el.correct;
    }
    btn.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("inCorrect");
  }
  Array.from(answersBtns.children).forEach((el) => {
    if (el.dataset.correct == "true") {
      el.classList.add("correct");
    }
    el.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  resetAll();
  question.innerHTML = `you scored ${score} out of ${quetions.length}`;
  nextBtn.innerHTML = "start again";
  nextBtn.style.display = "block";
}

function handleNextBtn() {
  currentIdx++;
  if (currentIdx < quetions.length) {
    showQuiz();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (currentIdx < quetions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();
// const question = document.getElementById("question");
// const answerBtns = document.getElementById("answers-btns");
// const nextBtn = document.getElementById("nextBtn");
// let currentIdx = 0;
// let score = 0;

// function startQuiz() {
//   currentIdx = 0;
//   score = 0;
//   nextBtn.innerHTML = "Next";
//   showQuiz();
// }

// function resetAll() {
//   question.innerHTML = "";
//   nextBtn.style.display = "none";
//   answerBtns.innerHTML = "";
// }

// function showQuiz() {
//   resetAll();
//   let currentQuestion = questions[currentIdx];
//   let questionNo = currentIdx + 1;
//   question.innerHTML = questionNo + ". " + currentQuestion.question;
//   currentQuestion.answer.forEach((el) => {
//     const btn = document.createElement("button");
//     btn.innerHTML = el.text;
//     btn.classList.add("btn");
//     if (el.correct) {
//       btn.dataset.correct = el.correct;
//     }
//     btn.addEventListener("click", selectAnswer);
//   });
// }

// function selectAnswer(e) {
//   const selectedBtn = e.target;
//   const isCorrect = selectedBtn.dataset.correct === "true";
//   if (isCorrect) {
//     selectedBtn.classList.add("correct");
//     score++;
//   } else {
//     selectedBtn.classList.add("inCorrect");
//   }
//   Array.from(answersBtns.children).forEach((el) => {
//     if (el.dataset.correct == "true") {
//       el.classList.add("correct");
//     }
//     el.disabled = true;
//   });
//   nextBtn.style.display = "block";
// }

// function showScore() {
//   resetAll();
//   question.innerHTML = `you scored ${score} out of ${quetions.length}`;
//   nextBtn.innerHTML = "start again";
//   nextBtn.style.display = "block";
// }

// function handleNextBtn() {
//   currentIdx++;
//   if (currentIdx < quetions.length) {
//     showQuiz();
//   } else {
//     showScore();
//   }
// }

// nextBtn.addEventListener("click", () => {
//   if (currentIdx < quetions.length) {
//     handleNextBtn();
//   } else {
//     startQuiz();
//   }
// });

// startQuiz();
