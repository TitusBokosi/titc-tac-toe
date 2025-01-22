const GameBoard = ( function() {
    const myGameBoard = new Array(9);
    
    function pickSpot(currentPlayer, index){

        if(myGameBoard[index] === undefined){
            return myGameBoard[index] = currentPlayer.name;
        }
        else{
            return alert('spot alredy taken');
        }
    }

    
    return {pickSpot};
})();



function CreatePlayer(name){

    this.name = name;

    return {name};
}

