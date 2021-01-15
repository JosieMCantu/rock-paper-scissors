import { rockPaperScissors } from './utils.js';
import { compareThrows } from '/compare-throws.js';

const winsTotalSpan = document.getElementById('wins-total');
const lossesTotalSpan = document.getElementById('losses-total');
const totalSpan = document.getElementById('total');
const throwButton = document.getElementById('throw-button');
//const throwRadio = 
const currentThrow = document.getElementById('current-throw');
const drawsSpan = document.getElementById('draws-span');
const computerThrow = Math.ceil(Math.random() * 3);

const computerRps = rockPaperScissors(computerThrow);
let winsTotal = 0;
let total = 0;
let draws = 0;


throwButton.addEventListener('click', () => {
    total++;
    const throwRadio = document.querySelector('input[type="radio"]:checked');
    const userThrow = throwRadio.value; 
    rockPaperScissors(computerThrow);
    compareContent(computerRps, userThrow);
    resultsUpdate();
});

function resultsUpdate(){
    winsTotalSpan.textContent = winsTotal;
    lossesTotalSpan.textContent = total - winsTotal;
    drawsSpan.textContent = draws;
    totalSpan.textContent = total;
}

function compareContent(computerRps, userThrow){
    if (compareThrows(computerRps, userThrow) === 'lose'){
        currentThrow.textContent = `You lose!`;
    }
    if (compareThrows(computerRps, userThrow) === 'win'){
        winsTotal++;
        currentThrow.textContent = `You win!`;    
    }
    if (compareThrows(computerRps, userThrow) === 'draw'){
        draws++;
        currentThrow.textContent = `Draw!`;
    } 
}

