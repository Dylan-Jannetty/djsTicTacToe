'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./gameUI')
const api = require('./gameAPI')

const onNewGame = function (event) {
  api.newGame()
    .then(ui.startGame)
    .catch(ui.newGameError)
}

const addHandlers = () => {
  $('#new-game').on('click', onNewGame)
}

module.exports = {
  addHandlers
}
