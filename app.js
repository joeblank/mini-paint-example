$(document).ready(function() {

var box = $('.box');
var reset = $('#reset');
var green = $('#green');
var red = $('#red');
var blue = $('#blue');
var white = $('#white');
var yellow = $('#yellow');
var colors = 'white red blue green yellow'

var selectedColor = 'white';

box.on('click', function() {
  $(this).addClass(selectedColor);
})

box.on('dblclick', function() {
  $(this).removeClass(selectedColor)
})

reset.on('click', function() {
  box.removeClass(colors);
})

green.on('click', function() {
  selectedColor = 'green';
})
red.on('click', function() {
  selectedColor = 'red';
})
blue.on('click', function() {
  selectedColor = 'blue';
})
yellow.on('click', function() {
  selectedColor = 'yellow';
})
white.on('click', function() {
  selectedColor = 'white';
})

// === click and drag paint ==========
// ===================================
var flag = false;

box.on('mousedown', function() {
  flag = true
    box.on('mouseover', function() {
      if (flag) {
        $(this).addClass(selectedColor)
      }
    })
})

box.on('mouseup', function() {
  flag = false;
})
// ==================================
// ==================================


})
