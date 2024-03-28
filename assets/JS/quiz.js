const quizdata ={


}



const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const catagoryElement = document.getElementById("catagory")
  
  let currentQuestion = 0;
  let score = 0;

  function  showQuestions (){
    const question = quizdata [currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.array.forEach(element => {
    const button = document.createElement (" button")
    button.innerText = options;
    optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });

    function selectAnswer (e) {
    const selectedbutton = e.target;
    const answer = quizdata [ currentQuestion].answer;
   
    if (selectedButton.innerText === answer) {
        score++;
      }
    
      currentQuestion++;
    
      if (currentQuestion < quizData.length) {
        showQuestion();
      } else {
        showResult();
      }
    }
    
    

  }