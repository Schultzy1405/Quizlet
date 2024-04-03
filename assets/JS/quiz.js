const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("option");
const submitButton = document.getElementById("submit");
const catDisplay = document.getElementById("cat-display")
const questionCountertext = document.getElementById("questioncounter");

let currentQuestion = 0;
let score = 0;
let adjustedCategoryIndex;
let numberOfQuestions = localStorage.getItem('numberOfQuestions')
const category = ['General Knowledge',
'Entertainment: Books',
 'Entertainment: Film',
  'Entertainment: Music',
   'Entertainment: Musicals & Theatres',
    'Entertainment: Television',
     'Entertainment: Video Games',
      'Entertainment: Board Games',
       'Science & Nature', 'Science: Computers',
        'Science: Mathematics', 'Mythology', 'Sports',
         'Geography',
          'History',
           'Politics',
            'Art',
             'Celebrities',
              'Animals',
               'Vehicles',
                'Entertainment: Comics',
                 'Science: Gadgets',
                  'Entertainment: Japanese Anime & Manga',
                   'Entertainment: Cartoon & Animations']

const requestUrl = 'https://opentdb.com/api_category.php';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
          const categories = data.trivia_categories;
        
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
        fetchQuestionsAndAnswers();
      }

      // Call showInfo after fetching the category data
      showInfo();
    });

    function fetchQuestionsAndAnswers() {
      const adjustedCategoryIndex = localStorage.getItem('adjCatIndex')
      const questionURL = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${adjustedCategoryIndex}`;
      fetch(questionURL)
        .then(response => response.json())
        .then(data => {
          const questions = data.results;
          // Display first question and answers
          displayQuestionAndAnswers(questions[currentQuestion]);
        })
        .catch(error => console.error('Error fetching questions:', error));
    }

function displayQuestionAndAnswers(questionData) {
  questionEl.textContent = questionData.question;
  const answers = [...questionData.incorrect_answers, questionData.correct_answer];
  // Shuffle answers randomly
  answers.sort(() => Math.random() - 0.5);
  optionsEl.innerHTML = ''; // Clear previous options
  answers.forEach((answer, index) => {
    const option = document.createElement('li');
    option.classList.add('li-answers')
    option.textContent = answer;
    option.dataset.index = index;
    option.addEventListener('click', selectAnswer);
    optionsEl.appendChild(option);
  });
}

function selectAnswer(e) {
  const selectedOption = e.target;
  const selectedIndex = parseInt(selectedOption.dataset.index);
  const answerIndex = quizData[currentQuestion].answerIndex;
    if (selectedIndex === answerIndex) {
    score++;
    currentQuestion++
  }
  currentQuestion++;
  if (currentQuestion < 10) {
    fetchQuestionsAndAnswers();
  } else {
    showResult();
  }
}

function showResult() {
const userNameInput = document.getElementById('#username').value;
    const scoreDisplay = Document.getElementById('score-display');
    scoreDisplay.textContent = userNameInput + "'s Quiz Completed! Your Score: " + score;
 
  // Display result however you want
  console.log("Quiz Completed! Your Score: " + score);
  if (score) {

  }
}
  
  // Start the quiz
//showQuestion();

// const questions = JSON.parse(localStorage.getItem("questions"));
// const questionNumber = JSON.parse(localStorage.getItem("questionNumber"));
// questions.results[questionNumber]
// console.log(questions)

