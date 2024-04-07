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
            localStorage.setItem('categories', JSON.stringify(categoryArray)); // set categories to local storage - Aksana
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
      $('.submit').on('click', submitModalForm);
    });

const getJoke = function() {
    const jokeApi = 'https://api.chucknorris.io/jokes/random'
    fetch(jokeApi)
    .then ((response) => {
        return response.json();
    })
    .then((data) => {
    alert(data.value);
    })
    .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
    });
}


async function submitModalForm(event) {

    event.preventDefault();

    const userName = userNameInput.val();
    localStorage.setItem('userName', userName);
    const category = categoryInput.val();
 
    localStorage.setItem('selectedCategory', category);
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
      localStorage.setItem('score', 0)
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

document.getElementById('joke-button').addEventListener('click',function() {
    document.querySelector('.joke-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.joke-modal').style.display = 'none';
});