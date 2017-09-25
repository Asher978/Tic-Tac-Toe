// declaring my global variables
var turn = 'X',
bgPic = 'url(./images/bgPic.jpg)',
boxes = [], 
EMPTY = "";
// creating the Game Board
let createBoard = function () {
    const title = document.querySelector('title');
    title.innerText = 'Tic Tac Toe';
    let gameBoard = document.getElementById('container');
    let bod = document.querySelector('body');
    let reset = document.createElement('button');
    reset.setAttribute('id', 'restBttn');
    reset.addEventListener('click', function(){gameReset()});
    reset.innerHTML = 'RESET';
    bod.appendChild(reset);
    gameBoard.style.boxShadow = '0px 10px 50px 10px #888888';
    for(let i=1; i<10; i++)  {
        let gameBox = document.createElement('div');
        gameBox.setAttribute('class', `box ${i}`);
        gameBox.style.boxShadow = '0px 5px 20px 5px silver';
        gameBox.style.color = 'red';
        gameBox.style.opacity = '.8'; 
        gameBoard.appendChild(gameBox);
        gameBox.addEventListener('click', function() {set(gameBox, i-1)});
    }
    // toggle between turns 
    // sets 'X' or 'O' on the game board
    // same box can not be clicked twice
    function set (element,index) {
        // let box = document.getElementsByClassName('box');
        if(element.innerHTML !== EMPTY)  {
            return;
        } else {
            element.innerHTML = turn;
            element.style.background = bgPic;
            element.style.backgroundSize = 'cover';
            boxes[index] = turn;
            setTimeout(function() {
            win(turn);
            turn = (turn === 'X') ? ('O') : ('X'); 
            },100);
        }
    }
    // TODO: refactor this to possibly switch
    function win (XO) {
        if ( 
        (boxes[0]===XO && boxes[1]===XO && boxes[2]===XO)
        || (boxes[3]===XO && boxes[4]===XO && boxes[5]===XO)  
        || (boxes[6]===XO && boxes[7]===XO && boxes[8]===XO)  
        || (boxes[0]===XO && boxes[3]===XO && boxes[6]===XO)
        || (boxes[1]===XO && boxes[4]===XO && boxes[7]===XO) 
        || (boxes[2]===XO && boxes[5]===XO && boxes[8]===XO) 
        || (boxes[0]===XO && boxes[4]===XO && boxes[8]===XO) 
        || (boxes[2]===XO && boxes[4]===XO && boxes[6]===XO) 
        ){
            gameReset(XO);
        }
    }
    // refactored game reset
    function gameReset(XO){
        if (window.confirm(`${XO} won, play again?`)){
            let boxs = document.getElementsByClassName('box');
            for(let i of boxs) {
                i.innerHTML = '';
                i.style.background= 'url()';
            }
            turn ='X';
            boxes = [];
        }else{
            alert('thanks for playing')
        }
  }
}