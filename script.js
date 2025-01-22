const MygamePad = ( function() {
    const gamePad = new Array(9);
    
    function pickSpot(currentPlayer, index){

        if(gamePad[index] === undefined){
            return gamePad[index] = currentPlayer.name;
        }
        else{
            return alert('spot alredy taken');
        }
    }

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

          
    return {pickSpot, selectWinner};
})();



function CreatePlayer(name){

    this.name = name;

    return {name};
}

let counter = 0;
function setCurrentPlayer(){
    let currentPlayer;

    if( counter % 2 === 0){
        currentPlayer = playerOne;
    }
    else{
        currentPlayer = playerTwo;
    }
    counter++;
}

