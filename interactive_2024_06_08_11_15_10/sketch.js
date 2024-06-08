let backgroundColor = []; // Array to store background colors
let numColors = 70; // Number of colors to use (adjustable)
let colorChangeSpeed = 0.2; // Speed of color change (adjustable)
let customFont;
let mic, fft;

function preload() {
  customFont = loadFont('Scramble.ttf'); // Make sure this font file is in your project directory
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);

  // Generate random background colors on setup
  for (let i = 0; i < numColors; i++) {
    backgroundColor.push(color(random(232), random(255), random(255)));
  }

  // Sound setup
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  textFont(customFont);

  // Update background colors with smooth transition
  for (let i = 0; i < backgroundColor.length; i++) {
    let nextColorIndex = (i + 1) % backgroundColor.length;
    backgroundColor[i] = lerpColor(
      backgroundColor[i],
      backgroundColor[nextColorIndex],
      colorChangeSpeed
    );
  }

  // Draw pyramid-like radial gradient background
  for (let r = 0; r < max(windowWidth, windowHeight); r += 10) {
    let colorIndex = int(map(r, 0, max(windowWidth, windowHeight), 0, backgroundColor.length));
    fill(backgroundColor[colorIndex]);
    noStroke();
    quad(
      windowWidth / 2, windowHeight / 2 - r, // Top
      windowWidth / 2 + r, windowHeight / 2, // Right
      windowWidth / 2, windowHeight / 2 + r, // Bottom
      windowWidth / 2 - r, windowHeight / 2  // Left
    );
  }

  // Analyze sound frequency
  let spectrum = fft.analyze();
  let numBars = 20; // Number of audio bars
  let maxSide = min(windowWidth, windowHeight) / 2;

  for (let i = 0; i < numBars; i++) {
    let amplitude = spectrum[i * 5]; // Adjust sampling as needed
    let barHeight = map(amplitude, 0, 255, 0, maxSide);

    // Color changes based on bar position
    let barColor = color(map(i, 0, numBars, 0, 255), 100, 50 + amplitude / 2);

    fill(barColor);
    let angle = map(i, 0, numBars, 0, TWO_PI);
    let x = windowWidth / 2 + cos(angle) * barHeight;
    let y = windowHeight / 2 + sin(angle) * barHeight;
    let size = 10;

    push();
    translate(x, y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, size, size);
    pop();
  }

  // Display the text on top
  textSize(windowHeight / 20); // Smaller text size
  fill(0); // Black text color
  text("Bath Spa University", windowWidth / 2, windowHeight / 2 + 100); // Adjusted vertical position
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Regenerate background colors on resize for better effect
  backgroundColor = [];
  for (let i = 0; i < numColors; i++) {
    backgroundColor.push(color(random(99), random(255), random(255)));
  }
}

function mousePressed() {
  // Change color generation method on mouse press for variation
  for (let i = 0; i < backgroundColor.length; i++) {
    let hue = random(235);
    backgroundColor[i] = color(hue, map(i, 0, backgroundColor.length, 0, 255), 235);
  }
}
