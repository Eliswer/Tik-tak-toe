/**
 * Declaring my variables
 * Selecting boxes by Id
 */
const boxes = document.querySelectorAll('.play-box');
const columnBox = document.querySelectorAll('.column-box');
const imageInput1 = document.querySelector('.image-input1');
const imageInput2 = document.querySelector('.image-input2');
const winnerP1 = document.querySelector('#winner1');
const winnerP2 = document.querySelector('#winner2');
const btnReset = document.querySelector('button');
let uploadedImage = '';

const box0 = document.getElementById('b0');
const box1 = document.getElementById('b1');
const box2 = document.getElementById('b2');
const box3 = document.getElementById('b3');
const box4 = document.getElementById('b4');
const box5 = document.getElementById('b5');
const box6 = document.getElementById('b6');
const box7 = document.getElementById('b7');
const box8 = document.getElementById('b8');

/**
 * Starting conditions
 */
const oText = '0';
const xText = 'X';
let currentPlayer = oText;
let playing = true;

/**
 * Uploading img
 */
imageInput1.addEventListener('change', (e) => {
    const reader = new FileReader();
    reader.addEventListener('load', (e) => {
        uploadedImage = reader.result;
        console.log(document.querySelector('.display-image1'));
        document.querySelector('.display-image1').style.backgroundImage = `url(${uploadedImage})`;
    });
    reader.readAsDataURL(e.target.files[0]);
})

imageInput2.addEventListener('change', (e) => {
    const reader = new FileReader();
    reader.addEventListener('load', (e) => {
        uploadedImage = reader.result;
        console.log(document.querySelector('.display-image2'));
        document.querySelector('.display-image2').style.backgroundImage = `url(${uploadedImage})`;
    });
    reader.readAsDataURL(e.target.files[0]);
})

/**
 * Checking if player has won function
 */
const playerHasWon = function () {
    if (playing === true) {
        if (box0.textContent === oText && box1.textContent === oText && box2.textContent === oText) {
            winnerP1.classList.remove('hidden');
            playing = false;
        } else if (box0.textContent === xText && box1.textContent === xText && box2.textContent === xText) {
            winnerP2.classList.remove('hidden');
            playing = false;
        }

        if (box3.textContent === oText && box4.textContent === oText && box5.textContent === oText) {
            winnerP1.classList.remove('hidden');
            playing = false;
        } else if (box3.textContent === xText && box4.textContent === xText && box5.textContent === xText) {
            winnerP2.classList.remove('hidden');
            playing = false;
        }

        if (box6.textContent === oText && box7.textContent === oText && box8.textContent === oText) {
            winnerP1.classList.remove('hidden');
            playing = false;
        } else if (box6.textContent === xText && box7.textContent === xText && box8.textContent === xText) {
            winnerP2.classList.remove('hidden');
            playing = false;
        }

        if (box0.textContent === oText && box3.textContent === oText && box6.textContent === oText) {
            winnerP1.classList.remove('hidden');
            playing = false;
        } else if (box0.textContent === xText && box3.textContent === xText && box6.textContent === xText) {
            winnerP2.classList.remove('hidden');
            playing = false;
        }

        if (box1.textContent === oText && box4.textContent === oText && box7.textContent === oText) {
            winnerP1.classList.remove('hidden');
            playing = false;
        } else if (box1.textContent === xText && box4.textContent === xText && box7.textContent === xText) {
            winnerP2.classList.remove('hidden');
            playing = false;
        }

        if (box2.textContent === oText && box5.textContent === oText && box8.textContent === oText) {
            winnerP1.classList.remove('hidden');
            playing = false;
        } else if (box2.textContent === xText && box5.textContent === xText && box8.textContent === xText) {
            winnerP2.classList.remove('hidden');
            playing = false;
        }

        if (box0.textContent === oText && box4.textContent === oText && box8.textContent === oText) {
            winnerP1.classList.remove('hidden');
            playing = false;
        } else if (box0.textContent === xText && box4.textContent === xText && box8.textContent === xText) {
            winnerP2.classList.remove('hidden');
            playing = false;
        }

        if (box2.textContent === oText && box4.textContent === oText && box6.textContent === oText) {
            winnerP1.classList.remove('hidden');
            playing = false;
        } else if (box2.textContent === xText && box4.textContent === xText && box6.textContent === xText) {
            winnerP2.classList.remove('hidden');
            playing = false;
        }
    }
}

/**
 * For each box
 */
boxes.forEach(el => {
    el.addEventListener('click', () => {
        if (playing === true) {
            if (el.childNodes.length === 0) {
                el.textContent = currentPlayer;
                currentPlayer = currentPlayer === oText ? xText : oText;
                playerHasWon();

                if (currentPlayer === oText) {
                    event.target.style.color = '#0f0f0f';
                } else  {
                    event.target.style.color = '#d1d1d1';
                }
            }
        }
    })
})

/**
 * Button resets the game on click
 */
btnReset.addEventListener('click', () => {
    winnerP1.classList.add('hidden');
    winnerP2.classList.add('hidden');

    box0.textContent = '';
    box1.textContent = '';
    box2.textContent = '';
    box3.textContent = '';
    box4.textContent = '';
    box5.textContent = '';
    box6.textContent = '';
    box7.textContent = '';
    box8.textContent = '';

    playing = true;
})