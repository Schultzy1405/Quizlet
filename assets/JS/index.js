const submitButton = $('.submit')
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

const getJoke = function() {
    const jokeApi = 'https://api.chucknorris.io/jokes/random'
    fetch(jokeApi)
    .then ((response) => {
        return response.json();
    })
    .then((data) => {
    console.log(data.value);
    })
    .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
    });
}

getJoke()

async function submitModalForm(event) {

    event.preventDefault();

    const userName = userNameInput.val();
    console.log(userName);
    const category = categoryInput.val();
    console.log(category); // we got ID of category. we can use it to get a questions
    const numberOfQuestions = numberOfQuestionsInput.val();
    console.log(numberOfQuestions);
    localStorage.setItem('numberOfQuestions', numberOfQuestions)
    if (verifyFields()) {
        // If fields are not filled, do not proceed further
        return;
    }

    //getting questions with answers
    const requestUrl = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&type=multiple`;
    await fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
          localStorage.setItem('questions', JSON.stringify({questions:data}));
          localStorage.setItem('questionNumber', 0);
          console.log('questions')
      })

      window.location.href = "quiz.html"
}


function verifyFields() {
    let usernameIsEmpty = userNameInput.val() === "";
    let categoryIsEmpty = categoryInput.val() === "";
    let numberOfQuestionsIsEmpty = numberOfQuestionsInput.val() === "";
  
  
    let alertMessage = `Please fill out all fields`;
    
    if(usernameIsEmpty || categoryIsEmpty || numberOfQuestionsIsEmpty){
      alert(alertMessage);
      return true;
    }
    return false;
  }
