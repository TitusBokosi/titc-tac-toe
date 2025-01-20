// Gameboard Module (IIFE)
const Gameboard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
  
    const getBoard = () => board;
  
    const placeMark = (index, mark) => {
      if (board[index] === "") {
        board[index] = mark;
        return true; // Mark placed successfully
      }
      return false; // Spot already taken
    };
  
    const resetBoard = () => {
      board = ["", "", "", "", "", "", "", "", ""];
    };
  
      const checkWin = (mark) => {
          const winCombinations = [
              [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
              [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
              [0, 4, 8], [2, 4, 6]             // Diagonals
          ];
  
          return winCombinations.some(combination => {
              return combination.every(index => board[index] === mark);
          });
      };
  
      const checkTie = () => {
          return board.every(cell => cell !== "");
      };
  
    return { getBoard, placeMark, resetBoard, checkWin, checkTie };
  })();
  
  // Player Factory
  const Player = (name, mark) => {
    return { name, mark };
  };
  
  // Game Controller Module (IIFE)
  const Game = (() => {
    let player1;
    let player2;
    let currentPlayer;
    let gameOver;
  
    const startGame = (name1, name2) => {
      player1 = Player(name1, "X");
      player2 = Player(name2, "O");
      currentPlayer = player1;
      gameOver = false;
      Gameboard.resetBoard();
      DisplayController.renderBoard();
      DisplayController.displayMessage(`${currentPlayer.name}'s turn`);
    };
  
      const switchPlayer = () => {
          currentPlayer = currentPlayer === player1 ? player2 : player1;
      };
  
      const playRound = (index) => {
          if (gameOver) return;
  
          if (Gameboard.placeMark(index, currentPlayer.mark)) {
              DisplayController.renderBoard();
  
              if (Gameboard.checkWin(currentPlayer.mark)) {
                  gameOver = true;
                  DisplayController.displayMessage(`${currentPlayer.name} wins!`);
                  return;
              }
  
              if (Gameboard.checkTie()) {
                  gameOver = true;
                  DisplayController.displayMessage("It's a tie!");
                  return;
              }
  
              switchPlayer();
              DisplayController.displayMessage(`${currentPlayer.name}'s turn`);
  
          }
      };
  
    return { startGame, playRound };
  })();
  
  // Display Controller Module (IIFE)
  const DisplayController = (() => {
    const boardElement = document.getElementById("board");
    const messageElement = document.getElementById("message");
  
    const renderBoard = () => {
      const board = Gameboard.getBoard();
      boardElement.innerHTML = ""; // Clear the board
  
      board.forEach((mark, index) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.index = index; // Store index for click handling
        cell.textContent = mark;
        cell.addEventListener("click", handleCellClick);
        boardElement.appendChild(cell);
      });
    };
  
      const displayMessage = (message) => {
          messageElement.textContent = message;
      }
  
      const handleCellClick = (event) => {
          const index = event.target.dataset.index;
          Game.playRound(index);
      };
  
      const setupStartButton = () => {
        const startButton = document.getElementById('start-game');
        const player1Name = document.getElementById('player1-name');
        const player2Name = document.getElementById('player2-name');
  
        startButton.addEventListener('click', () => {
          Game.startGame(player1Name.value, player2Name.value);
        })
      }
  
    return { renderBoard, displayMessage, setupStartButton };
  })();
  
  DisplayController.setupStartButton();