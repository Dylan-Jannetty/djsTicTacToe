'use strict'
// your JS code goes here
// declare an empty gameBoard
const addHandlers = function () {
  $('.box').on('click', function () {
    console.log('Box clicked')
  })
}

const playerOne = 'X'
const playerTwo = 'O'

const gameBoard =
['', '', '',
  '', '', '',
  '', '', '']

console.log(gameBoard)
// write a function that accepts a x or o and a position to add to board
const addToBoard = function (player, position) {
  gameBoard[position] = player
}
addToBoard('x', 0)
addToBoard('x', 2)
addToBoard('x', 1)

console.log(gameBoard)
// write a function that only adds to the board if the spot is free
const spotTaken = () => {
  for (let i = 0; i < gameBoard.length; i++) {
    if (spotTaken === false && gameBoard[i] === ' ') {
      console.log('spot is open!')
    } else {
      console.log('spot is closed')
    }
  }
}
spotTaken()
// Write a function that will switch players
// If the current player is "x", then change the current player to "o".
// Otherwise, change the current player to "x".
let currentPlayer = 'X'
const switchTurns = () => {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
    console.log("it's player ones turn")
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X'
    console.log("it's player twos turn")
  }
}
// check for winner

const checkForWinner = () => {
  // if X wins top row
  if ((gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') ||
      // or x wins middle row
      (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') ||
      // or x wins bottom row
      (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') ||
      // or x wins left to right diagnol
      (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') ||
      // or X wins right column
      (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') ||
      // or X wins left column
      (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') ||
      // or X wins middle column
      (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') ||
      // or X wins right to left diagonal
      (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X')) {
    // print player one wins
    console.log('player one has won')
    // if O wins top row
  } else if ((gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') ||
      // or O wins middle row
      (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') ||
      // or O wins bottom row
      (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') ||
      // or O wins left to right diagonal
      (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') ||
      // or O wins right column
      (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') ||
      // or O wins left column
      (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') ||
      // or O wins middle column
      (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') ||
      // or O wins right to left diagonal
      (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O')) {
    // print player two wins
    console.log('player two has won')
  } else {
    // No one has won yet
    console.log('no one has won yet')
  }
}

checkForWinner()

module.exports = {
  addHandlers,
  gameBoard,
  addToBoard,
  switchTurns,
  checkForWinner,
  playerOne,
  playerTwo
}
