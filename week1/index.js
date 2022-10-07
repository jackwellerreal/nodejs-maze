const keypress = require('keypress');
const { levels } = require("./levels");

var xindex = 1;
var yindex = 1;
var level = 1;
var dev = 0;

levels(1, 1, 1)

function hitbox() {
  if (level == 1){
    if (xindex == 2 && yindex == 1) {xindex = 1;yindex=1}
    if (xindex == 2 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 2 && yindex == 1) {xindex = 1;yindex=1}
    if (xindex == 2 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 3 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 4 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 5 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 6 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 7 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 8 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 9 && yindex == 2) {xindex = 1;yindex=1}

    if (xindex == 1 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 2 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 3 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 4 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 5 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 6 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 7 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 8 && yindex == 4) {xindex = 1;yindex=1}

    if (xindex == 8 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 8 && yindex == 5) {xindex = 1;yindex=1}
    if (xindex == 8 && yindex == 6) {xindex = 1;yindex=1}

    if (xindex == 10 && yindex == 3) {xindex = 1;yindex=1}
    if (xindex == 10 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 10 && yindex == 5) {xindex = 1;yindex=1}
    if (xindex == 10 && yindex == 6) {xindex = 1;yindex=1}
  }
  if (level == 2){
    if (xindex == 2 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 2 && yindex == 3) {xindex = 1;yindex=1}
    if (xindex == 2 && yindex == 4) {xindex = 1;yindex=1}
    
    if (xindex == 2 && yindex == 1) {xindex = 1;yindex=1}
    if (xindex == 3 && yindex == 1) {xindex = 1;yindex=1}
    if (xindex == 4 && yindex == 1) {xindex = 1;yindex=1}
    if (xindex == 5 && yindex == 1) {xindex = 1;yindex=1}
    if (xindex == 6 && yindex == 1) {xindex = 1;yindex=1}
    if (xindex == 7 && yindex == 1) {xindex = 1;yindex=1}
    if (xindex == 8 && yindex == 1) {xindex = 1;yindex=1}
    if (xindex == 9 && yindex == 1) {xindex = 1;yindex=1}
    
    if (xindex == 1 && yindex == 6) {xindex = 1;yindex=1}
    if (xindex == 2 && yindex == 6) {xindex = 1;yindex=1}
    if (xindex == 3 && yindex == 6) {xindex = 1;yindex=1}
    if (xindex == 4 && yindex == 6) {xindex = 1;yindex=1}
    if (xindex == 5 && yindex == 6) {xindex = 1;yindex=1}
    if (xindex == 6 && yindex == 6) {xindex = 1;yindex=1}
    if (xindex == 7 && yindex == 6) {xindex = 1;yindex=1}
    if (xindex == 8 && yindex == 6) {xindex = 1;yindex=1}
    if (xindex == 8 && yindex == 7) {xindex = 1;yindex=1}

    if (xindex == 4 && yindex == 3) {xindex = 1;yindex=1}
    if (xindex == 4 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 4 && yindex == 5) {xindex = 1;yindex=1}

    if (xindex == 6 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 6 && yindex == 3) {xindex = 1;yindex=1}
    if (xindex == 6 && yindex == 4) {xindex = 1;yindex=1}

    if (xindex == 8 && yindex == 3) {xindex = 1;yindex=1}
    if (xindex == 8 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 8 && yindex == 5) {xindex = 1;yindex=1}
    if (xindex == 8 && yindex == 6) {xindex = 1;yindex=1}
    if (xindex == 8 && yindex == 7) {xindex = 1;yindex=1}

    if (xindex == 10 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 10 && yindex == 3) {xindex = 1;yindex=1}
    if (xindex == 10 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 10 && yindex == 5) {xindex = 1;yindex=1}
    if (xindex == 10 && yindex == 6) {xindex = 1;yindex=1}
    if (xindex == 10 && yindex == 7) {xindex = 1;yindex=1}
  }
  if (level == 3){
    if (xindex == 2 && yindex == 1) {xindex = 1;yindex=1}
    if (xindex == 2 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 2 && yindex == 1) {xindex = 1;yindex=1}
    if (xindex == 2 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 3 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 4 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 5 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 6 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 7 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 8 && yindex == 2) {xindex = 1;yindex=1}
    if (xindex == 9 && yindex == 2) {xindex = 1;yindex=1}

    if (xindex == 1 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 2 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 3 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 4 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 5 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 6 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 7 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 8 && yindex == 4) {xindex = 1;yindex=1}

    if (xindex == 8 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 8 && yindex == 5) {xindex = 1;yindex=1}
    if (xindex == 8 && yindex == 6) {xindex = 1;yindex=1}

    if (xindex == 10 && yindex == 3) {xindex = 1;yindex=1}
    if (xindex == 10 && yindex == 4) {xindex = 1;yindex=1}
    if (xindex == 10 && yindex == 5) {xindex = 1;yindex=1}
    if (xindex == 10 && yindex == 6) {xindex = 1;yindex=1}
  }
}

keypress(process.stdin);
process.stdin.on('keypress', (ch, key) => {
    if (key && key.ctrl && key.name == 'c') {
      process.stdin.pause();
    }
    if (key.name == 'w') {
      yindex = yindex - 1;
      if (xindex <= 0){xindex=1}
      if (yindex <= 0){yindex=1}
      hitbox()
      levels(level, xindex, yindex)
      if (dev == 1) {console.log(`Coords: \x1b[93mX:${xindex},  Y:${yindex}\x1b[37m`)}
    }
    if (key.name == 'a') {
      xindex = xindex - 1;
      if (xindex <= 0){xindex=1}
      if (yindex <= 0){yindex=1}
      if (level == 3) {if (xindex == 5 && yindex == 3) {xindex = 4;yindex=3}}
      if (level == 4) {if (xindex == 2 && yindex == 4) {xindex = 7;yindex=2}}
      hitbox()
      levels(level, xindex, yindex)
      if (dev == 1) {console.log(`Coords: \x1b[93mX:${xindex},  Y:${yindex}\x1b[37m`)}
    }
    if (key.name == 's') {
      yindex = yindex + 1;
      if (xindex <= 0){xindex=1}
      if (yindex <= 0){yindex=1}
      hitbox()
      levels(level, xindex, yindex)
      if (dev == 1) {console.log(`Coords: \x1b[93mX:${xindex},  Y:${yindex}\x1b[37m`)}
      if (level == 1) {if (xindex == 9 && yindex == 6) {level = level + 1;xindex=1;yindex=1;}}
      if (level == 2) {if (xindex == 9 && yindex == 7) {level = level + 1;xindex=1;yindex=1;}}
      if (level == 3) {if (xindex == 9 && yindex == 6) {level = level + 1;xindex=1;yindex=1;}}
      if (level == 4) {if (xindex == 9 && yindex == 6) {level = level + 1;xindex=1;yindex=1;}}
    }
    if (key.name == 'd') {
      xindex = xindex + 1;
      if (xindex <= 0){xindex=1}
      if (yindex <= 0){yindex=1}
      if (level == 3) {if (xindex == 5 && yindex == 3) {xindex = 6;yindex=3}}
      if (level == 4) {if (xindex == 8 && yindex == 2) {xindex = 3;yindex=4}}
      hitbox()
      levels(level, xindex, yindex)
      if (dev == 1) {console.log(`Coords: \x1b[93mX:${xindex},  Y:${yindex}\x1b[37m`)}
    }
    if (key.name == 'e') {
      dev = 1
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();