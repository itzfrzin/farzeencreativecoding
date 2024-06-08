var s;
var scl = 20;
var food;
var intro = true;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {
  background(51);
  
  if (intro) {
    textAlign(CENTER);
    textSize(32);
    fill(255);
    text("snakoo", width / 2, height / 2 - 50);
    textSize(20);
    text("Navigate, Consume, Evolve", width / 2, height / 2);
    fill(0, 255, 0);
    rectMode(CENTER);
    rect(width / 2, height / 2 + 100, 150, 50);
    fill(0);
    textSize(16);
    text("Play Now", width / 2, height / 2 + 105);
  } else {
    if (s.eat(food)) {
      pickLocation();
    }
    s.death();
    s.update();
    s.show();
  
    fill(0, 0, 255);
    rect(food.x, food.y, scl, scl);
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    intro = false;
  }
  
  if (!intro) {
    if (keyCode === UP_ARROW) {
      s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
      s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
      s.dir(-1, 0);
    }
  }
}
