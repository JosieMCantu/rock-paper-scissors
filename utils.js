export function rockPaperScissors(randomThrow){
    if (randomThrow < .333333){
        return 'Rock';
    } else if (randomThrow > .333 && randomThrow < .666) {
        return 'Paper';
    } else if (randomThrow > .666){
        return 'Scissors';
    }
}
export function compareThrows(computerRps, userThrow){
    
    if (computerRps === 'Scissors' && userThrow === 'Paper'){
        currentThrow.textContent = `You lose! You threw ${userThrow}. The correct throw was ${computerRps}.`;
    }else if (computerRps === 'Rock' && userThrow === 'Scissors'){
        currentThrow.textContent = `You lose! You threw ${userThrow}. The correct throw was ${computerRps}.`;
    }else if (computerRps === 'Paper' && userThrow === 'Rock'){
        currentThrow.textContent = `You lose! You threw ${userThrow}. The correct throw was ${computerRps}.`;
    }else if (computerRps === 'Scissors' && userThrow === 'Rock'){
        currentThrow.textContent = `You win! You threw ${userThrow}. The correct throw was ${computerRps}.`;
    }else if (computerRps === 'Rock' && userThrow === 'Paper'){
        currentThrow.textContent = `You win! You threw ${userThrow}. The correct throw was ${computerRps}.`;
    }else if (computerRps === 'Paper' && userThrow === 'Scissors'){
        currentThrow.textContent = `You win! You threw ${userThrow}. The correct throw was ${computerRps}.`;
    } else if (computerRps === userThrow){
        currentThrow.textContent = `Draw! You threw ${userThrow}. The correct throw was ${computerRps}.`;
    }
}