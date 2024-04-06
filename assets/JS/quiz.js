<<<<<<< HEAD
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const categoryElement = document.getElementById("category")

  
  let currentQuestion = 0;
  let score = 0;
=======
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("option");
const submitBtn = document.getElementById("submit");
const catDisplay = document.getElementById("cat-display")
const questionCountertext = document.getElementById("questioncounter");
const userName = document.getElementById("user-name")
>>>>>>> main

const answer1 = document.getElementById("answer1")
const answer2 = document.getElementById("answer2")
const answer3 = document.getElementById("answer3")
const answer4 = document.getElementById("answer4")

const inputOption1 = document.getElementById("option1")
const inputOption2 = document.getElementById("option2")
const inputOption3 = document.getElementById("option3")
const inputOption4 = document.getElementById("option4")

const allAnswers = [answer1, answer2, answer3, answer4]
const allOptionInputs = [inputOption1, inputOption2, inputOption3, inputOption4]
const questions = JSON.parse(localStorage.getItem('questions')).questions

let adjustedCategoryIndex;
let numberOfQuestions = localStorage.getItem('numberOfQuestions')

const categories = JSON.parse(localStorage.getItem('categories'));

// Function to get the category name by ID
function getCategoryNameById(categoryId) {
  // Find the category object in the categories array that matches the provided categoryId
  const categoryObj = categories.find(cat => cat.id === categoryId);
  // If a matching category object is found, return its name; otherwise, return 'Unknown Category'
  return categoryObj ? categoryObj.name : 'Unknown Category';
}

// Function to display category information
function showInfo() {
  const catSelected = localStorage.getItem('selectedCategory');
  const adjustedCategoryIndex = parseInt(catSelected) // Adjusted index based on your category array
  localStorage.setItem('adjCatIndex', adjustedCategoryIndex)
  const categoryName = getCategoryNameById(adjustedCategoryIndex);
  catDisplay.textContent = `Category: ${categoryName}`;
  let currentQuestion = parseInt(localStorage.getItem('questionNumber'));
  if (currentQuestion < numberOfQuestions) {
    displayQuestionAndAnswers()
  }
  else {
    showResult();
  }
}

// Call showInfo after fetching the category data
showInfo();

function displayQuestionAndAnswers() {
  unselectAllRadioButtons()
  let currentQuestion = parseInt(localStorage.getItem('questionNumber'));
  const questionData = questions.results[currentQuestion];
  questionEl.textContent = questionData.question;
  const answers = [...questionData.incorrect_answers, questionData.correct_answer];
  // Shuffle answers randomly
  answers.sort(() => Math.random() - 0.5);
  answers.forEach((answer, index) => {
    const label = allAnswers[index];
    const input = allOptionInputs[index];
    input.setAttribute("value", answer);
    label.textContent = answer;
  });
}

function unselectAllRadioButtons(){
  for (var i = 0; i < allOptionInputs.length; i++) {
    if (allOptionInputs[i].type == "radio") {
      allOptionInputs[i].checked = false;
    }
  }
}

function selectAnswer(userAnswer) {
  let currentQuestion = parseInt(localStorage.getItem('questionNumber'));
  const correctAnswer = questions.results[currentQuestion].correct_answer;
  currentQuestion++
  localStorage.setItem('questionNumber', currentQuestion);
  if (userAnswer === correctAnswer) {
    let score = parseInt(localStorage.getItem('score'));
    score++;
    localStorage.setItem('score', currentQuestion);
  }

  if (currentQuestion < numberOfQuestions) {
    displayQuestionAndAnswers()
  }
  else {
    showResult();
  }
}

function showResult() {
  optionsEl.innerHTML = null;
  questionEl.innerHTML = null;
  let score = parseInt(localStorage.getItem('score'));
  alert ("Quiz Completed! Your Score: " + score);
  //TODO : finish code below
  const userNameInput = document.getElementById('#username');
  const scoreDisplay = document.getElementById('score-display');
  scoreDisplay.textContent = userNameInput + "'s Quiz Completed! Your Score: " + score;

  // Display result however you want
  console.log("Quiz Completed! Your Score: " + score);
  if (score) {
  }
}

submitBtn.addEventListener("click", handleSubmitQuestionButton);

function handleSubmitQuestionButton(event) {
  const data = new FormData(optionsEl);
  let output = "";
  for (const entry of data) {
    output = `${entry[1]}`;
  }

  selectAnswer(output)

  event.preventDefault();
}

function showUser() {
  quizUser = localStorage.getItem('userName')
  userName.textContent = quizUser
}
showUser()