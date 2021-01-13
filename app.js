// import functions and grab DOM elements
const currentThrow = document.getElementById('current-throw');
const winsTotalSpan = document.getElementById('wins-total');
const lossesTotal = document.getElementById('losses-total');
const totalSpan = document.getElementById('total');
const throwRadio = document.querySelector('input[type="radio"]:checked');

// initialize state
let winsTotal = 0;
let total = 0;


// set event listeners to update state and DOM
throwRadio.addEventListener('click', () => {
    total++;
    console.log(currentThrow, winsTotalSpan, lossesTotalSpan, totalSpan);
});