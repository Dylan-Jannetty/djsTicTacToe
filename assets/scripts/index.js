'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // declare an empty gameBoard

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
  addToBoard('o', 2)
  addToBoard('x', 3)
  addToBoard('o', 6)
  addToBoard('x', 4)
  addToBoard('o', 7)
  addToBoard('x', 8)
  addToBoard('o', 5)
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
  switchTurns()
})
