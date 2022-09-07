//Assignment: what i am trying to achieve is that when a user selects one of the buttons and submits, its takes the user to the next page with the text "you selected {either 1 to 5 }out of 5" based on the id of the button that was selected.

// select the html element
//add a click event to each of the button


const button = document.querySelectorAll(".btn");
const mainContainer = document.querySelector(".container");
const modalOverlay = document.querySelector(".modal-overlay");
const submitHandler =document.getElementById("submit");
const result = document.getElementById("result");
const rateAgain = document.getElementById("Rate-again");


submitHandler.addEventListener('click', function () {
    modalOverlay.classList.toggle('hidden');
})

submitHandler.addEventListener('click', function () {
    mainContainer.style.display = "none";
})

button.forEach(function (btn) {
    btn.addEventListener('click', function () {
        result.innerHTML = btn.innerHTML;
       
   }) 
})
