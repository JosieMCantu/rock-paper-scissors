export function rockPaperScissors(randomThrow){
    if (randomThrow < .333333){
        return 'Rock';
    } else if (randomThrow > .333 && randomThrow < .666) {
        return 'Paper';
    } else if (randomThrow > .666){
        return 'Scissors';
    }
}
export function compareThrows(){
    if (computerRps === userThrow){
        currentThrow.textContent = `Draw! You threw ${userThrow}. The correct throw was ${computerRps}.`;
    } else if (){
        
    }
}

// if the computer = scissors & userThrow = paper then computer wins
// if the computer = rock & userThrow = scissors then computer wins
// if the computer = paper & the userThrow = rock then the computer wins






// else if (computerRps > userThrow){
//     currentThrow.textContent = `You lose. You threw ${userThrow}. The correct throw was ${computerRps}.`;
// } else if (computerRps < userThrow){
//     winsTotal++;
//     currentThrow.textContent = `You win! You threw ${userThrow}. The correct throw was ${computerRps}.`;
// }