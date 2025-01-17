const MygamePad = ( function(){
    const gamePad = new Array(9);
    return {gamePad};
})();

function createPlayer(name){
    return{name}
}

MygamePad.gamePad[9] = 6;

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
     ( MygamePad.gamePad[index] = player.name);
    }
    else{
        return 'spot already selected';
    }
}

MygamePad.gamePad[0] = playerOne.name;

let try1 = selectSpot(playerTwo, 0);
selectSpot(playerOne, 3);

console.log(MygamePad.gamePad[3])


