'use strict'

const store = require('../store')

const startNewGame = function (data) {
  $('#message').text('New Game Started')
  $('#message').css('background-color', 'orange')
  console.log(data.game)
  store.game = data.game
  console.log(store.game)
}
const newGameError = (data) => {
  $('#message').text('Error while starting new game')
  $('#message').css('background-color', 'red')
  console.log(data)
}

module.exports = {
  startNewGame,
  newGameError
}
