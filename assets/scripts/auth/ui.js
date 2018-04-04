'use strict'
const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
}

const signUpFailure = function () {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
  $('#message').text('Sign In Success')
  $('#message').css('background-color', 'blue')
  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
}

const changePasswordFailure = function () {
  $('#message').text('Change password failure')
  $('#message').css('background-color', 'red')
}

const signOutSuccess = function () {
  $('#message').text('Signed Out Success!')
  $('#message').css('background-color', 'blue')
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
