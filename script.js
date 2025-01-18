const MygamePad = ( function(){
    const gamePad = new Array(9);
    return {gamePad};
})();

function createPlayer(name){
    return{name}
}


const playerOne = createPlayer('player one');
const playerTwo = createPlayer('player two');

function selectWinner(){
  if(MygamePad.gamePad[0] === MygamePad.gamePad[1] && MygamePad.gamePad[1] === MygamePad.gamePad[2] && MygamePad.gamePad[1] !== undefined && MygamePad.gamePad[2] !== undefined && MygamePad.gamePad[0] !== undefined){
    return true;
  }
  else if (MygamePad.gamePad[3] === MygamePad.gamePad[4] && MygamePad.gamePad[4] === MygamePad.gamePad[5]&& MygamePad.gamePad[3] !== undefined && MygamePad.gamePad[4] !== undefined && MygamePad.gamePad[5] !== undefined){
    return true;
  }
  else if (MygamePad.gamePad[6] === MygamePad.gamePad[7] && MygamePad.gamePad[7] === MygamePad.gamePad[8] && MygamePad.gamePad[6] !== undefined && MygamePad.gamePad[7] !== undefined && MygamePad.gamePad[8] !== undefined){
    return true;
  }
  else if (MygamePad.gamePad[0] === MygamePad.gamePad[3] && MygamePad.gamePad[3] === MygamePad.gamePad[6] && MygamePad.gamePad[0] !== undefined && MygamePad.gamePad[3] !== undefined && MygamePad.gamePad[6] !== undefined){
    return true;
  }
  else if (MygamePad.gamePad[0] === MygamePad.gamePad[4] && MygamePad.gamePad[4] === MygamePad.gamePad[8] && MygamePad.gamePad[0] !== undefined && MygamePad.gamePad[4] !== undefined && MygamePad.gamePad[8] !== undefined){
    return true;
  }
  else if (MygamePad.gamePad[2] === MygamePad.gamePad[4] && MygamePad.gamePad[4] === MygamePad.gamePad[6] && MygamePad.gamePad[4] !== undefined && MygamePad.gamePad[6] !== undefined && MygamePad.gamePad[2] !== undefined){
    return true;
  }
  else if(MygamePad.gamePad[2] === MygamePad.gamePad[5] && MygamePad.gamePad[5] === MygamePad.gamePad[8] && MygamePad.gamePad[2] !== undefined && MygamePad.gamePad[5] !== undefined && MygamePad.gamePad[8] !== undefined){
    return true;
  }
  else if (MygamePad.gamePad[1] === MygamePad.gamePad[4] && MygamePad.gamePad[4] === MygamePad.gamePad[7] && MygamePad.gamePad[4] !== undefined && MygamePad.gamePad[1] !== undefined && MygamePad.gamePad[7] !== undefined){
    return true;
  }
  else{
    return false;
  }
}

function selectSpot(player, index){

    if(MygamePad.gamePad[index] === undefined){
      MygamePad.gamePad[index] = player.name;
    }
    else{
        alert('spot already selected choose another spot');
        playGame();
    }
}


let counter = 0;
function SetCurrentPlayer(){

    if(counter % 2 === 0){
        counter++;
        currentPlayer = playerOne;
    }
    else{
        counter++;
        currentPlayer = playerTwo;
    }
}

function playGame(){
    let choice = prompt(`${currentPlayer.name} enter your index`);
    selectSpot(currentPlayer, choice);
}

let currentPlayer;

function Game(){
    SetCurrentPlayer();
    playGame();
    SetCurrentPlayer();
    playGame();
    SetCurrentPlayer();
    playGame();
    SetCurrentPlayer();
    playGame();
    SetCurrentPlayer();
    playGame();
    let winner = selectWinner();
    if (winner === false){
        SetCurrentPlayer();
        playGame();
        winner = selectWinner();
        if (winner === true){
            console.log(`${currentPlayer.name} wins`);
        }
        else{
           while(winner === false){
            SetCurrentPlayer();
            move();
            winner = selectWinner();
           } 
           console.log(`${currentPlayer.name} wins`);
        }
    }
    else{
        console.log(`${currentPlayer.name} wins`);
    }
    
   
}

function move(){
    let sourceIndex = prompt('where do you want to move from?');
    let targetIndex = prompt('where do you want to move to?');
    MygamePad.gamePad[targetIndex] = MygamePad.gamePad[sourceIndex];
    MygamePad.gamePad[sourceIndex] = undefined;

}
console.log(selectWinner());


