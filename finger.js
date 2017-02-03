#! /usr/bin/env node

"use strict";

var read = require('read');
var Board = require('firmata');

var args = process.argv.slice(2);
var board = new Board(args[0]);
var pin = 2;

var readOpts = {
  silent: true
};

read(readOpts, function(er, password) {
  console.log('OTP: %s', password);
});

board.on('ready', function() {
  board.pinMode(pin, board.MODES.OUTPUT);
  board.digitalWrite(pin, 1);
  setTimeout(function() {
    board.digitalWrite(pin, 0);
    process.exit(0);
  }, 4000);
});
