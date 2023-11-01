let the_turn = true ;

let canPlay = true ;

let winningSpan = document.getElementById("winningSpan");

let resetTheGameBtn = document.getElementById('resetTheGame');

let divs = document.querySelectorAll('.clickable-div'); // Assuming you've assigned a class to your div elements


function resetTheGame(){

    divs.forEach(function(div) {
      div.innerHTML = "";
    })
    winningSpan.textContent = "No Winner Yet!" ;
    canPlay = true ; 
    for (let i = 0; i < 3; i++) {
        matrix[i] = [];
        for (let j = 0; j < 3; j++) {
          matrix[i][j] = null; // You can use null for an empty matrix
        }
      }  
}


function itsOver(){
    winningSpan.textContent = `The Winner is ${the_turn ? 'O' : 'X'}`;
    canPlay = false ;
}
const matrix = [];
  for (let i = 0; i < 3; i++) {
    matrix[i] = [];
    for (let j = 0; j < 3; j++) {
      matrix[i][j] = null; // You can use null for an empty matrix
    }
  }

function isDivEmpty(element) {
    return element.innerHTML.trim() === '';
}

function add_X_O(element) {
    var X = document.createElement('img');
    X.src = "images/X.png";

    var O = document.createElement('img');
    O.src = "images/O.png";
    if (isDivEmpty(element)) {
        if (the_turn) {
            element.appendChild(X);
            the_turn = false;
        } else {
            element.appendChild(O);
            the_turn = true;
        }
    }
    else{
        console.log('You cant') ;
    }
    
}

function checkWinner(matrix) {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (matrix[i][0] !== null && matrix[i][0] === matrix[i][1] && matrix[i][0] === matrix[i][2]) {
        return true;
      }
    }
  
    // Check columns
    for (let j = 0; j < 3; j++) {
      if (matrix[0][j] !== null && matrix[0][j] === matrix[1][j] && matrix[0][j] === matrix[2][j]) {
        return true;
      }
    }
  
    // Check diagonals
    if (matrix[1][1] !== null) {
      if (matrix[0][0] === matrix[1][1] && matrix[0][0] === matrix[2][2]) {
        return true;
      }
      if (matrix[0][2] === matrix[1][1] && matrix[0][2] === matrix[2][0]) {
        return true;
      }
    }
  
    return false; // No winner yet
  }
  

let div1 = document.getElementById('div1');
div1.addEventListener('click' , function(){
    if(canPlay){
    add_X_O(div1);
    matrix[0][0] = the_turn ;
    const winner = checkWinner(matrix);
    if (winner) {
        itsOver()
    }
    }
}
)

let div2 = document.getElementById('div2');
div2.addEventListener('click' , function(){
    if(canPlay){
    add_X_O(div2);
    matrix[0][1] = the_turn ;
    const winner = checkWinner(matrix);
    if (winner) {
        itsOver()}
    }
}
)
let div3 = document.getElementById('div3');
div3.addEventListener('click' , function(){
    if(canPlay){
    add_X_O(div3);
    matrix[0][2] = the_turn ;
    const winner = checkWinner(matrix);
    if (winner) {
        itsOver()
    }
}

})
let div4 = document.getElementById('div4');
div4.addEventListener('click' , function(){
    if(canPlay){
    add_X_O(div4);
    matrix[1][0] = the_turn ;
    const winner = checkWinner(matrix);
    if (winner) {
        itsOver()
    }
}
    
})
let div5 = document.getElementById('div5');
div5.addEventListener('click' , function(){
    if(canPlay){
    add_X_O(div5);
    matrix[1][1] = the_turn ;
    const winner = checkWinner(matrix);
    if (winner) {
        itsOver()
    }
}  
})
let div6 = document.getElementById('div6');
div6.addEventListener('click' , function(){
    if(canPlay){
    add_X_O(div6);
    matrix[1][2] = the_turn ;
    const winner = checkWinner(matrix);
    if (winner) {
        itsOver()
    }
}
})
let div7 = document.getElementById('div7');
div7.addEventListener('click' , function(){
    if(canPlay){
    add_X_O(div7);
    matrix[2][0] = the_turn ;
    const winner = checkWinner(matrix);
    if (winner) {
        itsOver()
    }
}
})
let div8 = document.getElementById('div8');
div8.addEventListener('click' , function(){
    if(canPlay){
    add_X_O(div8);
    matrix[2][1] = the_turn ;
    const winner = checkWinner(matrix);
    if (winner) {
        itsOver()
    }
}
})
let div9 = document.getElementById('div9');
div9.addEventListener('click' , function(){
    if(canPlay){
    add_X_O(div9);
    matrix[2][2] = the_turn ;
    const winner = checkWinner(matrix);
    if (winner) {
        itsOver()
    }
}
})

