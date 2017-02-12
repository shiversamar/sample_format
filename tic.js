//Purpose: player gets three pieces in a row to win, alternating turns between players.
//Signature: jQuery:(string) -> string; Model/JS:(integers) -> integers;
//Example: **pseudocode**

// Start game
console.log("STARTING GAME");

// Start with blank board
console.log("Making new board");
var board=[0, 0, 0,
           0, 0, 0,
           0, 0, 0];
// 0 = no move yet
// 1 = player X
// -1 = player O
console.log(board);

// Limit game to 9 moves
var moves = 9;

// Track total of all board moves
var score = 0;

// When document is ready, start game
$(document).ready(function() {

  // When player clicks on td, make move
  $("td").on("click", function(){

    // Start move
    console.log("\n");
    console.log("Move " + (10 - moves))

    // Get position of move
    var position = parseInt($(this).attr("id"));

    // Play move
    if(moves%2 === 0) {
      console.log("Player O moves");
      $("h3").text("Player X's turn");
      $(this).addClass("imageO");
      board[position] = -1;
    } else {
      console.log("Player X moves");
      $("h3").text("Player O's turn");
      $(this).addClass("imageX");
      board[position] = 1;
    }
    console.log(board);

    // Update remaining moves
    moves--;
    console.log(moves + " moves left");

    // End game if player X wins
    if (xWins(board) == true) {
      console.log("\nGAME OVER. X wins!");
      $("h3").text("Player X wins! Game Over");
      $("td").off();

    // End game if player Y wins
    } else if (oWins(board) == true) {
      console.log("\nGAME OVER. O wins!");
      $("h3").text("Player O wins! Game Over");
      $("td").off();

    // End game if we have no moves left
    } else if (moves === 0) {
      console.log("\nGAME OVER. Tie!");
      $("h3").text("No one wins! Game Over");
      $("td").off();

    }

  });


});


function xWins() {

  // Check for win
  if (board[0] + board[1] + board[2] === 3) {
    return true;
  } else if (board[0] + board[4] + board[8] === 3) {
    return true;
  } else if (board[0] + board[3] + board[6] === 3) {
    return true;
  } else if (board[1] + board[4] + board[7] === 3) {
    return true;
  } else if (board[2] + board[5] + board[8] === 3) {
    return true;
  } else if (board[2] + board[4] + board[6] === 3) {
    return true;
  } else if (board[3] + board[4] + board[5] === 3) {
    return true;
  } else if (board[6] + board[7] + board[8] === 3) {
    return true;
  } else {
    return false;
  }

}

function oWins() {

  // Check for win
  if (board[0] + board[1] + board[2] === -3) {
    return true;
  } else if (board[0] + board[4] + board[8] === -3) {
    return true;
  } else if (board[0] + board[3] + board[6] === -3) {
    return true;
  } else if (board[1] + board[4] + board[7] === -3) {
    return true;
  } else if (board[2] + board[5] + board[8] === -3) {
    return true;
  } else if (board[2] + board[4] + board[6] === -3) {
    return true;
  } else if (board[3] + board[4] + board[5] === -3) {
    return true;
  } else if (board[6] + board[7] + board[8] === -3) {
    return true;
  } else {
    return false;
  }

}





// FUNCTIONS //

function addX(index) {
  usedSpaces++;
  board[index] = 1;
}

function addO(index) {
  usedSpaces++;
  board[index] = -1;
}

function sumNum(array) {
  array.forEach(function(element){
    sum = sum + element;
  });
}

function winX(){
  sumNum(board);
  if (sumNum(board)=== 3){
    console.log("playerX");
  };
}

function winO(){
  sumNum(board);
  if (sumNum(board)=== -3){
    console.log("playerO");
  };
}


// if (sum > 0){
//   console.log("PlayerX wins!");
// }else if(sum <= -1){
//   console.log("PlayerO wins!");
// }
