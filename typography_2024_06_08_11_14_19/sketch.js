var font;
var points;

function preload() {
  font = loadFont('mangat.ttf'); // Make sure this font file is in your project directory
}

function setup() {
  createCanvas(600, 600);
  stroke(0);
  strokeWeight(1);
  noFill();

  // Convert text to points
  points = font.textToPoints('BSU', 100, 300, 200, { sampleFactor: 0.1 });

  background(255);
}

function draw() {
  background(255);

  // Draw web-like structure
  for (var i = 0; i < points.length; i++) {
    var p1 = points[i];
    for (var j = i + 1; j < points.length; j++) {
      var p2 = points[j];
      // Connect each point to a few neighboring points
      if (dist(p1.x, p1.y, p2.x, p2.y) < 50) {
        line(p1.x, p1.y, p2.x, p2.y);
      }
    }
  }

  // Draw circles at points for additional effect
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    ellipse(p.x, p.y, 5, 5);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
