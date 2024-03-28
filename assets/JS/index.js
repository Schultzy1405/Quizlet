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
   
            // for (let i=0; i<categoryArray.length; i++) {
            //     const categoryInput = document.createElement("div");
                    // categoryInput.classList.add("select-wrapper");
            //     categoryInput.append(option)
            // }
            $.each(categoryArray, function (i) {
                categoryInput.append(
                    $('<option></option>').val(categoryArray[i].id).html(categoryArray[i].name)
                );
            });
            $('select').formSelect();
        });
        submitButton.addEventListener("click", submitModalForm);
});
<<<<<<< Updated upstream
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
=======


function submitModalForm(event) {
    console.log("jbfdj");
>>>>>>> Stashed changes
    const userName = userNameInput.val();
    console.log(userName);
    const category = categoryInput.val();
    console.log(category); // we got ID of category. we can use it to get a questions
    const numberOfQuestions = numberOfQuestionsInput.val();
    console.log(numberOfQuestions);
<<<<<<< Updated upstream
    window.location.href = "quiz.html"
=======
>>>>>>> Stashed changes
}

