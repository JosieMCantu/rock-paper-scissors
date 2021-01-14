export function rockPaperScissors(randomThrow){
    if (randomThrow < .333333){
        return 'Rock';
    } else if (randomThrow > .333 && randomThrow < .666) {
        return 'Paper';
    } else if (randomThrow > .666){
        return 'Scissors';
    }
}