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
            $.each(categoryArray, function (i) {
                categoryInput.append(
                    $('<option></option>').val(categoryArray[i].id).html(categoryArray[i].name)
                );
            });
            $('select').formSelect();
        });
        submitButton.addEventListener("click", submitModalForm);
        
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

