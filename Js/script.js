// const socket = io();

const bg = document.querySelector('.turn-container .bg');
const turntext = document.querySelector('.turn-container h3');
const boxs = document.querySelectorAll('.box');
const resultContainer = document.querySelector('.result');
const resultText = document.querySelector('.result h3');
const resultButton = document.querySelector('.result .button');
const scoreX = document.querySelector('.scoreX');
const scoreO = document.querySelector('.scoreO');
const nameX = document.querySelector('.nameX');
const nameO = document.querySelector('.nameO');
const changeName = document.querySelector('.resetScores');
const names = document.querySelector('.names');
const scores = document.querySelector('.scores');
let currentPlayer = 'X';
let isGameOver = false;
let X = 0;
let O = 0;

boxs.forEach((box, index) => {
    box.addEventListener('click', () => {
        if (!isGameOver && box.textContent == "") {
            box.textContent = currentPlayer;
            checkWin();
            checkDraw();
            changeTurn();
        }
    })
})


function changeTurn() {
    if (isGameOver) {
        turntext.textContent = "Game Over"
    } else {
        if (currentPlayer == 'X') {
            currentPlayer = 'O';
            bg.style.left = "85px";
            turntext.textContent = "O's turn.";
        } else {
            currentPlayer = 'X';
            bg.style.left = '0';
            turntext.textContent = "X's turn";
        }
    }

}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winConditions.length; i++) {
        let a1 = boxs[winConditions[i][0]].textContent;
        let a2 = boxs[winConditions[i][1]].textContent;
        let a3 = boxs[winConditions[i][2]].textContent;
        if (a1 == a2 && a1 == a3 && a1 != "") {
            boxs[winConditions[i][0]].style.backgroundColor = "#08D9D6"
            boxs[winConditions[i][1]].style.backgroundColor = "#08D9D6"
            boxs[winConditions[i][2]].style.backgroundColor = "#08D9D6"
            boxs[winConditions[i][0]].style.color = "black";
            boxs[winConditions[i][1]].style.color = "black";
            boxs[winConditions[i][2]].style.color = "black";
            isGameOver = true;
            result();
            if (a1 == "X") {
                scoreX.textContent = ++X;
            } else {
                scoreO.textContent = ++O;
            }
        }

    }
}

function checkDraw() {
    if (!isGameOver) {
        let draw = true;
        boxs.forEach(box => {
            if (box.textContent == "") {
                draw = false;
            }
        })
        if (draw) {
            isGameOver = true;
            resultText.textContent = "Draw";
            resultButton.textContent = "Play Again";
            resultContainer.style.display = "block";
            resultButton.addEventListener('click', playAgain);
        }
    }

}

function result() {
    resultText.textContent = `${currentPlayer} WIN`;
    resultButton.textContent = "Play Again";
    resultContainer.style.display = "block";
    resultButton.addEventListener('click', playAgain);
}

function playAgain() {
    currentPlayer = "X";
    resultButton.textContent = "";
    resultText.textContent = "";
    resultContainer.style.display = "";
    isGameOver = false;
    bg.style.left = "0";
    turntext.textContent = "Start"

    boxs.forEach(box => {
        box.style.backgroundColor = "";
        box.textContent = "";
        box.style.color = "white";
    })
}

changeName.addEventListener('click', reset)


function reset() {

    scoreO.textContent = 0;
    scoreX.textContent = 0;
    O = 0;
    X = 0;
}