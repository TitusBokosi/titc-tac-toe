function gamePad (){
    const myGamePad = Array(3).fill(Array(3).fill(0));
    myGamePad[0][1] = 'player';
    return{myGamePad};
}

function createPlayer (name){
    let score = 0;
    const updateScore = () => score++;
    const getScore = () => score;
    return{name, updateScore, getScore};
}

const playerOne = createPlayer('tee');
playerOne.updateScore();
console.log(playerOne.getScore())