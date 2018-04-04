'use strict'
const store = require('../store')

const startNewGame = function (data) {
  $('#message').text('New Game Started')
  $('#message').css('background-color', 'orange')
  console.log(data)
}

module.exports = {
  startNewGame
}
