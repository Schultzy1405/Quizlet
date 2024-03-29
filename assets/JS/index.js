const submitButton = document.querySelector(".submit");
const userNameInput = $('#username');
const categoryInput = $('#category-select');
const numberOfQuestionsInput = $('#number-of-guestions');

$(document).ready(function () {
    $('.modal').modal();
    const requestUrl = 'https://opentdb.com/api_category.php';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            const categoryArray = data.trivia_categories;
            categoryArray.forEach(function(category) {
                categoryInput.append(
                  $('<option></option>').val(category.id).html(category.name)
                );
            });
            $('select').formSelect();
        })
        .catch(function (error) {
          console.error('Error fetching categories', error)
        })
        categoryInput.on('change', function () {
          const selectedCategory = $(categoryInput).val();
          localStorage.setItem('selectedCategory', selectedCategory);
      });
      $('.submit').on('click', submitModalForm);
    });
    
        function submitModalForm(event) {
          event.preventDefault();
          // Your form submission logic here
      }

const getJoke = function() {
    const jokeApi = 'https://api.chucknorris.io/jokes/random'
    fetch(jokeApi)
    .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Handle the data received from the API
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });
}
getJoke()

function submitModalForm(event) {

    event.preventDefault();

    const userName = userNameInput.val();
    console.log(userName);
    const category = categoryInput.val();
    console.log(category); // we got ID of category. we can use it to get a questions
    const numberOfQuestions = numberOfQuestionsInput.val();
    console.log(numberOfQuestions);
    window.location.href = "quiz.html"
}

