const MygamePad = ( function() {
    const gamePad = new Array(9)
    
    function pickSpot(currentPlayer, index){
      gamePad[index] = currentPlayer.name;
    }

    function selectWinner(){
      if(gamePad[0] === gamePad[1] && gamePad[1] === gamePad[2] && gamePad[2] !== undefined){
        scoreDisplay.textContent = `${currentPlayer.name} has won`;
      }

      else if(gamePad[0] === gamePad[3] && gamePad[3] === gamePad[6] && gamePad[6] !== undefined){
        scoreDisplay.textContent = `${currentPlayer.name} has won`;
      }
      
      else if(gamePad[0] === gamePad[4] && gamePad[4] === gamePad[8] && gamePad[8] !== undefined){
        scoreDisplay.textContent = `${currentPlayer.name} has won`;
      }

      else if(gamePad[3] === gamePad[4] && gamePad[4] === gamePad[5] && gamePad[5] !== undefined){
        scoreDisplay.textContent = `${currentPlayer.name} has won`;
      }

      else if(gamePad[6] === gamePad[7] && gamePad[7] === gamePad[8] && gamePad[8] !== undefined){
        scoreDisplay.textContent = `${currentPlayer.name} has won`;
      }

      else if(gamePad[1] === gamePad[4] && gamePad[4] === gamePad[7] && gamePad[7] !== undefined){
        scoreDisplay.textContent = `${currentPlayer.name} has won`;
      }

      else if(gamePad[2] === gamePad[4] && gamePad[4] === gamePad[6] && gamePad[6] !== undefined){
        scoreDisplay.textContent = `${currentPlayer.name} has won`;
      }

      else if(gamePad[2] === gamePad[5] && gamePad[5] === gamePad[8] && gamePad[8] !== undefined){
        scoreDisplay.textContent = `${currentPlayer.name} has won`;
      }
      else{
        return false;
      }
    }
          
    return {pickSpot, selectWinner, gamePad};
})();



function CreatePlayer(name){

    this.name = name;

    return {name};
}

let counter = 0;
let currentPlayer;


function setCurrentPlayer(){
    
    if( counter % 2 === 0){
        currentPlayer = playerOne;
        counter += 1;
    }
    else{
        currentPlayer = playerTwo;
        counter += 1;
    }
}



const playerOne = new CreatePlayer('josh');

const playerTwo = new CreatePlayer('tee');

const scoreDisplay = document.querySelector('.score-display');


const  spot1 = document.getElementById('spot-1');

const  spot2 = document.getElementById('spot-2');

const  spot3 = document.getElementById('spot-3');

const  spot4 = document.getElementById('spot-4');

const  spot5 = document.getElementById('spot-5');

const  spot6 = document.getElementById('spot-6');

const  spot7 = document.getElementById('spot-7');

const  spot8 = document.getElementById('spot-8');

const  spot9 = document.getElementById('spot-9');

const play = document.getElementById('play');

const spotArray = [spot1, spot2, spot3, spot4, spot5, spot6, spot7, spot8, spot9];

function loopThroughSpots(){
  setCurrentPlayer();
  display();
  spotArray.forEach(function(element, index){
  element.addEventListener('click', () => {
    if(MygamePad.gamePad[index] === undefined){
      MygamePad.gamePad[index] = currentPlayer.name;
      if(currentPlayer === playerOne){
        element.style.backgroundColor = 'red';
      }
      else{
        element.style.background = 'blue';
      }
      setCurrentPlayer();
      display();
    }
    else{
      scoreDisplay.textContent = 'spot already taken please select another spot ';
    }
    
  })
})
}



function display(){
    scoreDisplay.textContent = `${currentPlayer.name} your turn`;
  
}

play.addEventListener('click', loopThroughSpots);

