'use strict'

const ui = require('./gameUI')
const api = require('./gameAPI')
// your JS code goes here
// declare an empty gameBoard
const playerOne = 'X'
const playerTwo = 'O'
let currentPlayer = 'X'

let gameBoard =
['', '', '',
  '', '', '',
  '', '', '']

const alertCurrentPlayer = () => {
  $('.playerMessage').text('Player ' + currentPlayer + ' it is your turn')
  $('.playerMessage').css('text-align', 'center')
}

alertCurrentPlayer()

// write a function that accepts a x or o and a position to add to board
const addToBoard = function (event) {
  const position = $(event.target).attr('data-cell') // get id of box you clicked on
  gameBoard[position] = currentPlayer
}

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
// Write a function that will switch players
// If the current player is "x", then change the current player to "o".
// Otherwise, change the current player to "x".

const switchTurns = () => {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X'
  }
  alertCurrentPlayer()
}
// check for draw
const isEmpty = function (element) {
  return element === ('')
}

const checkDraw = function () {
  const result = gameBoard.some(isEmpty)
  if (result === false) {
    $('#message').text('Game is a draw')
    $('#message').css('background-color', 'green')
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
    $('#message').text('Player one has won')
    $('#message').css('background-color', 'yellow')
    return true
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
    $('#message').text('Player two has won')
    $('#message').css('background-color', 'yellow')
    return true
  } else {
    // check draw
    checkDraw()
  }
}
// clear board function
const clearBoard = () => {
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.box').empty('data-cell')
}
// new game function
const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.startNewGame)
    .catch(ui.newGameError)
  clearBoard()
  if (currentPlayer === 'O') {
    return switchTurns()
  }
}

const onGetGameData = function (event) {
  event.preventDefault()
  api.getGameData()
    .then(ui.gameDataSuccess)
    .catch(ui.gameDataError)
}

const addHandlers = function () {
  $('.box').on('click', function (event) {
    const position = $(event.target).data('cell')
    let obj
    // if game is over
    if (checkForWinner() === true) {
      obj = {game: {cell: {index: position, value: currentPlayer}, over: true}}
      // do nothing
      return false
      // or if spot is empty
    } else if ($(this).text().length === 0) {
      // play the game
      obj = {game: {cell: {index: position, value: currentPlayer}, over: false}}
      $(this).text(currentPlayer)
      addToBoard(event)
      switchTurns()
      // else spot is taken, show message to user
    } else {
      // show message to user that spot is taken
      $('#message').text('That spot is taken')
      $('#message').css('background-color', 'red')
    }

    api.updateGame(obj)
      .then(ui.onUpdateGameSuccess)
      .catch(ui.onUpdateGameFailure)
  })
  $('.game-board').on('click', checkForWinner)
  $('#new-game').on('click', onNewGame)
  $('#get-game').on('click', onGetGameData)
}

module.exports = {
  addHandlers,
  gameBoard,
  addToBoard,
  switchTurns,
  checkForWinner,
  playerOne,
  playerTwo,
  checkDraw,
  onNewGame,
  clearBoard,
  onGetGameData
}
