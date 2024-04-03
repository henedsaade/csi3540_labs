// Function to create the game board
function createGame(n) {
    let board = [];
    // Place Pacman, Ghost, Fruit, and pellets on the board
    for (let i = 0; i < n; i++) {
        if (i === Math.floor(n / 2)) {
            board.push("C"); // Place Pacman in the middle
        } else if (i === Math.floor(Math.random() * n)) {
            board.push("^"); // Place Ghost randomly
        } else if (i === Math.floor(Math.random() * n)) {
            board.push("@"); // Place Fruit randomly
        } else {
            board.push("."); // Place Pellet in other squares
        }
    }
    return board;
}

// Function to move Pacman left
function moveLeft(game) {
    let pacmanIndex = game.indexOf("C");
    if (pacmanIndex > 0) {
        // Check if Pacman is not already at the left edge
        if (game[pacmanIndex - 1] === ".") {
            // Check if the left square is a pellet
            game[pacmanIndex - 1] = "C"; // Move Pacman left
            game[pacmanIndex] = "."; // Empty current square
        }
    }
}

// Function to move Pacman right
function moveRight(game) {
    let pacmanIndex = game.indexOf("C");
    if (pacmanIndex < game.length - 1) {
        // Check if Pacman is not already at the right edge
        if (game[pacmanIndex + 1] === ".") {
            // Check if the right square is a pellet
            game[pacmanIndex + 1] = "C"; // Move Pacman right
            game[pacmanIndex] = "."; // Empty current square
        }
    }
}

// Sample usage
let gameBoard = createGame(10);
console.log("Initial game board:", gameBoard);
moveLeft(gameBoard);
console.log("After moving left:", gameBoard);
moveRight(gameBoard);
console.log("After moving right:", gameBoard);