export function compareThrows(computerRps, userThrow){
    if (computerRps === userThrow){
        return 'draw';
    } 
    if (computerRps === 'Scissors' && userThrow === 'Paper'){
        return 'lose';
    } else if (computerRps === 'Rock' && userThrow === 'Scissors'){
        return 'lose';
    } else if (computerRps === 'Paper' && userThrow === 'Rock'){
        return 'lose';
    } /*else {
        return 'win';    
    }*/
}
