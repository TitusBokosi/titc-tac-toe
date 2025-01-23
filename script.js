const MygamePad = ( function() {
    const gamePad = ['', '', '', '', '', '', '', '','']
    
    function pickSpot(currentPlayer, index){
      gamePad[index] = currentPlayer.name;
    }
          
    return {pickSpot, gamePad};
})();


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

function spotEventListeners(){
  spot1.addEventListener('click', ()=> {
    if(MygamePad.gamePad[0] === ''){
      MygamePad.pickSpot(currentPlayer, 0);
      assignColor(spot1);
    }

    else{
      alert('spot already t');
    }
  })

  spot2.addEventListener('click', ()=> {
    if(MygamePad.gamePad[1] === ''){
      MygamePad.pickSpot(currentPlayer, 1);
      assignColor(spot2);
    }

    else{
      alert('spot already zee');
    }
  })

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

