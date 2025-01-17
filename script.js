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
  if(MygamePad.gamePad[0] === MygamePad.gamePad[1] && MygamePad.gamePad[1] === MygamePad.gamePad[2]){
    return true;
  }
  else if (MygamePad.gamePad[3] === MygamePad.gamePad[4] && MygamePad.gamePad[4] === MygamePad.gamePad[5]){
    return true;
  }
  else if (MygamePad.gamePad[6] === MygamePad.gamePad[7] && MygamePad.gamePad[7] === MygamePad.gamePad[8]){
    return true;
  }
  else if (MygamePad.gamePad[0] === MygamePad.gamePad[3] && MygamePad.gamePad[3] === MygamePad.gamePad[6]){
    return true;
  }
  else if (MygamePad.gamePad[0] === MygamePad.gamePad[4] && MygamePad.gamePad[4] === MygamePad.gamePad[8]){
    return true;
  }
  else if (MygamePad.gamePad[2] === MygamePad.gamePad[4] && MygamePad.gamePad[4] === MygamePad.gamePad[6]){
    return true;
  }
  else if(MygamePad.gamePad[2] === MygamePad.gamePad[5] && MygamePad.gamePad[5] === MygamePad.gamePad[8]){
    return true;
  }
  else if (MygamePad.gamePad[1] === MygamePad.gamePad[4] && MygamePad.gamePad[4] === MygamePad.gamePad[7]){
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
   
}
Game();


