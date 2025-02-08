const button = document.getElementById("clickButton");
const message = document.getElementById("message");
const gameBox = document.querySelector(".game-box");

button.addEventListener("mouseover", moveButton);

function moveButton() {
    // Get the dimensions and position of the game box
    const boxRect = gameBox.getBoundingClientRect();

    // Get random positions within the box (inside the 150x150 area)
    const x = Math.random() * (boxRect.width - button.offsetWidth);
    const y = Math.random() * (boxRect.height - button.offsetHeight);

    console.log(`Moving button to: x = ${x}, y = ${y}`);  // Debugging: check the button's new position

    // Move the button to the new random position within the box
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    // Show a funny message to taunt the player
    message.textContent = "You're too slow! Try harder!";
}




// Tic-Tac-Toe game logic
const ticTacToeCells = document.querySelectorAll('.tic-tac-toe-cell');
const ticTacToeMessage = document.getElementById('tic-tac-toe-message');
const resetButton = document.getElementById('resetButton'); // New reset button
let currentPlayer = 'X';  // Start with player 'X'
let gameBoard = ['', '', '', '', '', '', '', '', ''];  // Empty grid
let gameOver = false;

ticTacToeCells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);  // Reset game when button is clicked

function handleCellClick(event) {
    if (gameOver) return;

    const cell = event.target;
    const cellIndex = cell.getAttribute('data-cell');
    
    // If the cell is already taken, do nothing
    if (gameBoard[cellIndex] !== '') return;
    
    // Mark the cell with the current player's symbol
    gameBoard[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add('taken');
    
    // Check for a winner
    if (checkWinner()) {
        ticTacToeMessage.textContent = `${currentPlayer} Wins!`;
        gameOver = true;
        return;
    }
    
    // Check for a draw (no empty spaces left)
    if (!gameBoard.includes('')) {
        ticTacToeMessage.textContent = 'It\'s a Draw!';
        gameOver = true;
        return;
    }
    
    // Switch players
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]              // Diagonals
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
    });
}

function resetGame() {
    // Reset the game state
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    currentPlayer = 'X';  // 'X' always starts first
    ticTacToeMessage.textContent = '';  // Clear the message
    
    // Clear the grid (reset all cell contents)
    ticTacToeCells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('taken');
    });
}



