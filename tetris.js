const BLOCK_DIM = 20
const BOARD_WIDTH = 10
const BOARD_HEIGHT = 18
const BOARD_X = 100
const BOARD_Y = 100

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

function createBlock(x, y, size, color) {
    ctx.beginPath();
    ctx.rect(x, y, size, size);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
}

function drawBoard() {
    for (let i = 0; i < BOARD_HEIGHT; i++)
        createBlock(BOARD_X, BOARD_Y + i * BLOCK_DIM, BLOCK_DIM, "gray")
    for (let i = 0; i < BOARD_HEIGHT; i++) 
        createBlock(BOARD_X + (BOARD_WIDTH + 1) * BLOCK_DIM, 
        BOARD_Y + i * BLOCK_DIM, BLOCK_DIM, "gray")
    for (let i = 0; i < BOARD_WIDTH + 2; i++) 
        createBlock(BOARD_X + i * BLOCK_DIM, BOARD_Y + BOARD_HEIGHT * BLOCK_DIM, 
            BLOCK_DIM, "gray")
}

function createBlocks(x, y, pieces, color, rot) {
    pieces.forEach((piece) => {
        let pieceX = piece[0] * Math.cos(rot) - piece[1] * Math.sin(rot)
        let pieceY = piece[0] * Math.sin(rot) + piece[1] * Math.cos(rot)
        createBlock(BOARD_X + (x + pieceX) * BLOCK_DIM, 
            BOARD_Y + (y + pieceY) * BLOCK_DIM, BLOCK_DIM, color)
    });
}

function drawPiece(x, y, pieceNum, rot) {
    if (pieceNum === "I") 
        createBlocks(x, y, [[-1, 0], [0, 0], [1, 0], [2, 0]], "orange", rot);
    else if(pieceNum === "O")
        createBlocks(x, y, [[0, 0], [1, 0], [2, 0], [3, 0]], "red", 0);
    else if(pieceNum === "T")
        createBlocks(x, y, [[-1, 0], [0, 0], [1, 0], [0, -1]], "yellow", rot);
    else if(pieceNum === "S")
        createBlocks(x, y, [[0, 1], [1, 1], [-1, 0], [0, 0]], "#6495ED", rot);
    else if(pieceNum === "Z")
        createBlocks(x, y, [[-1, 1], [0, 1], [0, 0], [1, 0]], "green", rot);
    else if(pieceNum === "J")
        createBlocks(x, y, [[-1, 0], [0, 0], [1, 0], [1, -1]], "purple", rot);
    else if(pieceNum === "L")
        createBlocks(x, y, [[-1, 0], [0, 0], [1, 0] , [-1, -1]], "#0000FF", rot);
}

function playGame() {

    drawBoard()
    //drawPiece(0, 0, "I", 0);
    // while (1) {
    //     piece = ["I", "O", "T", "S", "Z", "J", "L"][Math.floor(Math.random() * 7)]
    // }
    let pieceX = BOARD_WIDTH / 2
    let pieceY = 0
    let piece = ["I", "O", "T", "S", "Z", "J", "L"][Math.floor(Math.random() * 7)]
    for (let i = 0; i < 3000; i++) {
        drawPiece(pieceX, pieceY, piece, 0);
        setTimeout(function() {
            pieceY = pieceY - BLOCK_DIM;
        }, 1000);

        // ctx.clearRect(BOARD_X + BLOCK_DIM, BOARD_Y - BLOCK_DIM, 
        //     BOARD_WIDTH * BLOCK_DIM, (BOARD_HEIGHT + 1) * BLOCK_DIM);
    }
    //space piece at spawnpoint 


    //have piece falling 
    //(at each second, have piece fall down 1)

    //if press up and down keys, rotate (change rot)
    //if press left and right keys, move (change x)

}

playGame();