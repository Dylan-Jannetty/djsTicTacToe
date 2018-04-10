'use strict'

const store = require('../store')

const startNewGame = function (data) {
  $('#message').text('New Game Started')
  $('#message').css('background-color', 'orange')
  console.log(data.game)
  store.game = data.game
  // show board
  $('.game-board').removeClass('hidden')
  $('.playerMessage').removeClass('hidden')
}
const newGameError = (data) => {
  $('#message').text('Error while starting new game')
  $('#message').css('background-color', 'red')
  console.log(data)
}
const onUpdateGameSuccess = (data) => {
  console.log(data)
  store.game.id = data.game.id
}
const onUpdateGameFailure = (data) => {
  $('#message').text('update game failure')
  $('#message').css('background-color', 'red')
}
module.exports = {
  startNewGame,
  newGameError,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
