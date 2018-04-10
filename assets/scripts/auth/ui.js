'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
  $('#sign-up').addClass('hidden')
}

const signUpFailure = function () {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
  $('#message').text('Sign In Success')
  $('#message').css('background-color', 'blue')
  store.user = data.user
  // hide sign up form
  $('#sign-up').addClass('hidden')
  // hide sign in form
  $('#sign-in').addClass('hidden')
  // show change password form
  $('#change-password').removeClass('hidden')
  // show sign out form
  $('#sign-out').removeClass('hidden')
  // show new game button
  $('#new-game').removeClass('hidden')
  // show board
  $('.game-board').removeClass('hidden')
}

const signInFailure = function () {
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
  $('#change-password').addClass('hidden')
}

const changePasswordFailure = function () {
  $('#message').text('Change password failure')
  $('#message').css('background-color', 'red')
}

const signOutSuccess = function () {
  $('#message').text('Signed Out Success!')
  $('#message').css('background-color', 'blue')
  // hide sign up form
  $('#sign-up').removeClass('hidden')
  // hide sign in form
  $('#sign-in').removeClass('hidden')
  // show change password form
  $('#change-password').addClass('hidden')
  // show sign out form
  $('#sign-out').addClass('hidden')
  // hide game board
  $('#game-board').addClass('hidden')
}
const signOutFailure = function () {
  $('#message').text('Sign Out Failure')
  $('#message').css('background-color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
