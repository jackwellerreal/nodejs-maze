const keypress = require('keypress');
var { levels } = require("./levels");

var xindex = 1;
var yindex = 1;
var level = 1;
var dev = 0;

levels(1, 1, 1)

keypress(process.stdin);
process.stdin.on('keypress', (ch, key) => {
    if (key && key.ctrl && key.name == 'c') {
      process.stdin.pause();
    }
    if (key.name == 'w') {
      yindex = yindex - 1;
      levels(level, xindex, yindex)
      if (dev == 1) {console.log(`Coords: \x1b[93mX:${xindex},  Y:${yindex}\x1b[37m`)}
    }
    if (key.name == 'a') {
      xindex = xindex - 1;
      levels(level, xindex, yindex)
      if (dev == 1) {console.log(`Coords: \x1b[93mX:${xindex},  Y:${yindex}\x1b[37m`)}
    }
    if (key.name == 's') {
      yindex = yindex + 1;
      levels(level, xindex, yindex)
      if (dev == 1) {console.log(`Coords: \x1b[93mX:${xindex},  Y:${yindex}\x1b[37m`)}
      if (xindex == 9 && yindex == 6) {level = level + 1;xindex=1;yindex=1;}
    }
    if (key.name == 'd') {
      xindex = xindex + 1;
      levels(level, xindex, yindex)
      if (dev == 1) {console.log(`Coords: \x1b[93mX:${xindex},  Y:${yindex}\x1b[37m`)}
    }
    if (key.name == 'e') {
      dev = 1
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();