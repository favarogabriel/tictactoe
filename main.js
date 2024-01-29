const gameBlocks = document.querySelectorAll('.game-block');
let playerOne = prompt('Qual o nome do primeiro jogador?');
let playerTwo = prompt('Qual o nome do segundo jogador?');

let playerNameTurn = document.getElementById('playerNameTurn');
const playerOneSymbol = 'X';
const playerTwoSymbol = 'O';
playerNameTurn.innerText = 'Vez de: '+ playerOne;
let playerOneTurn = true;
let playerTwoTurn = false;
let selectedBlocks = 0;

gameBlocks.forEach(function(element) {
    element.addEventListener('click', function(event) {

        const hasXClass =  event.currentTarget.classList.contains('x-selected');
        const hasOClass = event.currentTarget.classList.contains('o-selected');

        if(hasXClass) {
            alert('Quadrado já selecionado.');
        } else if(hasOClass) {
            alert('Quadrado já selecionado.');
        } else {
            switchPlayers(event);
        }
    })
})

function switchPlayers(event) {
    if(playerOneTurn === true) {
        playerOneTurn = false;
        playerTwoTurn = true;
        event.currentTarget.innerText = playerOneSymbol;
        event.currentTarget.classList.add('x-selected');
        playerNameTurn.innerText = 'Vez de: '+ playerTwo;
        selectedBlocks += 1;
    } else {
        playerOneTurn = true;
        playerTwoTurn = false;
        event.currentTarget.innerText = playerTwoSymbol;
        event.currentTarget.classList.add('o-selected');
        playerNameTurn.innerText = 'Vez de: '+ playerOne;
        selectedBlocks += 1;
    }

    setTimeout(() => {
        winVerify();
    }, 100);

    console.log(selectedBlocks);
}


function winVerify() {
    blockOne = document.getElementById('blockOne');
    blockTwo = document.getElementById('blockTwo');
    blockThree = document.getElementById('blockThree');
    blockFour = document.getElementById('blockFour');
    blockFive = document.getElementById('blockFive');
    blockSix = document.getElementById('blockSix');
    blockSeven = document.getElementById('blockSeven');
    blockEigth = document.getElementById('blockEigth');
    blockNine = document.getElementById('blockNine');

    const winConditions = [[blockOne, blockTwo, blockThree], [blockFour, blockFive, blockSix], [blockSeven, blockEigth, blockNine], [blockOne, blockFour, blockSeven], [blockTwo, blockFive, blockEigth], [blockThree, blockSix, blockNine], [blockOne, blockFive, blockNine], [blockThree, blockFive, blockSeven]];

    if (selectedBlocks === 9) {
        alert('Empate!');
        playAgain();
    } else {
        winConditions.forEach(function(element) {
            if(element[0].innerText === 'X' && element[1].innerText === 'X' && element[2].innerText === 'X') {
                playAgain('playerOne', element[0], element[1], element[2]);
            } else if(element[0].innerText === 'O' && element[1].innerText === 'O' && element[2].innerText === 'O') {
                playAgain('playerTwo', element[0], element[1], element[2]);
            } 
        })
    }
}

function playAgain(winner, elementZero, elementOne, elementTwo) {
    if(winner === 'playerOne') {
        elementZero.classList.add('highligth');
        elementOne.classList.add('highligth');
        elementTwo.classList.add('highligth');
        
        setTimeout(() => {
            alert(playerOne + ' ganhou!');
        }, 50);
    } else if (winner === 'playerTwo') {
        elementZero.classList.add('highligth');
        elementOne.classList.add('highligth');
        elementTwo.classList.add('highligth');    
        
        setTimeout(() => {
            alert(playerTwo + ' ganhou!');
        }, 50);
    }

    setTimeout(() => {
        let confirm;
        confirm = window.confirm('Deseja jogar novamente?');

        if (confirm == true) {
            gameBlocks.forEach(function(element) {
                element.innerText = '';
                
                if(element.classList.contains('o-selected')) {
                    element.classList.remove('o-selected');
                    element.classList.remove('highligth');
                } else if(element.classList.contains('x-selected')) {
                    element.classList.remove('x-selected');
                    element.classList.remove('highligth');
                }
            })

            selectedBlocks = 0;
        } else {
            window.close();
        }
    }, 100);
}