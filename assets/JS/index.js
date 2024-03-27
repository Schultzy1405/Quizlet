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


function submitModalForm(event) {
    console.log("jbfdj");
    const userName = userNameInput.val();
    console.log(userName);
    const category = categoryInput.val();
    console.log(category); // we got ID of category. we can use it to get a questions
    const numberOfQuestions = numberOfQuestionsInput.val();
    console.log(numberOfQuestions);
}

