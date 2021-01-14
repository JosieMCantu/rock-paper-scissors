// import functions and grab DOM elements
import { rockPaperScissors } from './utils.js';
import { compareThrows } from './compare-throws.js';

const winsTotalSpan = document.getElementById('wins-total');
const lossesTotalSpan = document.getElementById('losses-total');
const totalSpan = document.getElementById('total');
const throwButton = document.getElementById('throw-button');
const currentThrow = document.getElementById('current-throw');
const drawsSpan = document.getElementById('draws-span');

let winsTotal = 0;
let total = 0;
let draws = 0;

throwButton.addEventListener('click', () => {
    total++;
    const computerThrow = Math.random();
    const computerRps = rockPaperScissors(computerThrow);
    const throwRadio = document.querySelector('input[type="radio"]:checked');
    const userThrow = throwRadio.value; 

    if(compareThrows(computerRps, userThrow) === 'lose'){
        currentThrow.textContent = `You lose!`;
    }
    if(compareThrows(computerRps, userThrow) === 'win'){
        winsTotal++;
        currentThrow.textContent = `You win!`;    
    }
    if(compareThrows(computerRps, userThrow) === 'draw'){
        currentThrow.textContent = `Draw!`;
    }
resultsUpdate();
});

function resultsUpdate(){
    winsTotalSpan.textContent = winsTotal;
    lossesTotalSpan.textContent = total - winsTotal;
    drawsSpan.textContent = draws;
    totalSpan.textContent = total;
}
