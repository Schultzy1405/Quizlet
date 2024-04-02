const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("option");
const submitButton = document.getElementById("submit");
const catDisplay = document.getElementById("cat-display")

let currentQuestion = 0;
let score = 0;

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
        console.log('Selected Category ID:', catSelected);
        
        const adjustedCategoryIndex = parseInt(catSelected) // Adjusted index based on your category array
        console.log('Adjusted Category Index:', adjustedCategoryIndex);

        const categoryName = getCategoryNameById(adjustedCategoryIndex);
        console.log('Category Name:', categoryName);

        catDisplay.textContent = `Category: ${categoryName}`;
    }

    // Call showInfo after fetching the category data
    showInfo();
    displayQuestions()
    displayAnswers()


const questionURL = `https://opentdb.com/api.php?amount=10&category=${adjustedCategoryIndex}`

function displayQuestions() {
  const questionURL = `https://opentdb.com/api.php?amount=10&category=${adjustedCategoryIndex}`
fetch(questionURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const question = data.results.question;
    ;
  });
  questionEl.innerHTML = `
  <h3>${question}</h3>
  `
}
})
function displayAnswers() {
  optionsEl.innerHTML = `
  <ul>
    <li>Opt 1</li>
    <li>Opt 2</li>
    <li>Opt 3</li>
    <li>Opt 4</li>
  </ul>
  `
}