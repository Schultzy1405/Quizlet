const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const categoryElement = document.getElementById("category")
  
  let currentQuestion = 0;
  let score = 0;

  function  showQuestions (){
    localStorage.getItem('selectedCategory')
    //
    // stopped here, do text content and value
    //
    const question = quizdata [currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    categoryElement.innerText = `Category: ${question.category}`

    question.options.forEach((option, index) => {
    const li = document.createElement("li")
    li.textContent = option;
    li.dataset.index = index; // Store the index of the option
    optionsElement.appendChild(li);
    });

    optionsElement.querySelectorAll("li").forEach((li) => {
      li.addEventListener("click", selectAnswer);
    });
  }

    function selectAnswer(e) {
    const selectedOption = e.target;
    const selectedIndex = parseInt(selectedOption.dataset.index);
    const answerIndex = quizData[currentQuestion].answerIndex;
    if (selectedIndex === answerIndex) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  function showResult() {
    // Display result however you want
    console.log("Quiz Completed! Your Score: " + score);
  }
  
  // Start the quiz
//showQuestion();