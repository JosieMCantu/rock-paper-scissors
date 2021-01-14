// import functions and grab DOM elements
import { rockPaperScissors } from './utils.js';
import { compareThrows } from './utils.js';

const winsTotalSpan = document.getElementById('wins-total');
const lossesTotalSpan = document.getElementById('losses-total');
const totalSpan = document.getElementById('total');
const throwButton = document.getElementById('throw-button');

// initialize state
let winsTotal = 0;
let total = 0;


// set event listeners to update state and DOM
throwButton.addEventListener('click', () => {
    total++;
    const computerThrow = Math.round(Math.random());
    const computerRps = rockPaperScissors(computerThrow);
    
// Store the user's throw
// grab the checked input, and get its value
    const throwRadio = document.querySelector('input[type="radio"]:checked');
    const userThrow = throwRadio.value; 

// We compare the user's guess to the computer throw
compareThrows(computerRps, userThrow);

console.log(compareThrows);
resultsUpdate();

});
// We need to display the result of the the throw
function resultsUpdate(){
    winsTotalSpan.textContent = winsTotal;
    lossesTotalSpan.textContent = total - winsTotal;
    totalSpan.textContent = total;
}