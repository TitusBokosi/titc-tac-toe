const MygamePad = ( function() {
    const gamePad = ['', '', '', '', '', '', '', '','']
    
    function pickSpot(currentPlayer, index){
      gamePad[index] = currentPlayer.name;
    }
          
    return {pickSpot, gamePad};
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
    }
    else{
        currentPlayer = playerTwo;
    }
    counter++;
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
setCurrentPlayer();

spotArray.forEach(function(element, index){
  element.addEventListener('click', () => {
    if(MygamePad.gamePad[index] === ''){
      MygamePad.gamePad[index] = currentPlayer.name;
      if(currentPlayer === playerOne){
        element.style.backgroundColor = 'red';
      }
      else{
        element.style.background = 'blue';
      }
    }
    else{
      scoreDisplay.textContent = 'spot already taken';
    }
  })
})

function game(){
    setCurrentPlayer();
    display();
    spotEventListeners();
    
}


function assignColor(target){

  if(currentPlayer === playerOne){
    target.style.backgroundColor = 'red';
  }
  else{
    target.style.background = 'blue';
  }

}

function display(){
  if(MygamePad.selectWinner === true){
    scoreDisplay.textContent = `${currentPlayer.name} has won`;
  }
  else{
    scoreDisplay.textContent = `${currentPlayer.name} your turn`;
  }
}

play.addEventListener('click', game);

