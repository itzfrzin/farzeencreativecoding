let mySound, fft;

function preload() {
  mySound = loadSound('bg.mp3');
}

function setup() {
  createCanvas(400, 400);
  background(0);
  fft = new p5.FFT();
  mySound.setVolume(0.5);
  mySound.play();
  mySound.loop();
}

function draw() {
  background(0);

  let spectrum = fft.analyze();
  
  // Draw spectrum as colorful circles
  noStroke();
  for (let i = 0; i < spectrum.length; i++) {
    let angle = map(i, 0, spectrum.length, 0, TWO_PI);
    let radius = map(spectrum[i], 0, 255, 0, width / 2);
    let x = width / 2 + radius * cos(angle);
    let y = height / 2 + radius * sin(angle);
    let size = map(spectrum[i], 0, 255, 2, 10);
    let color = map(i, 0, spectrum.length, 0, 255);
    fill(color, 255, 255);
    ellipse(x, y, size, size);
  }

  let waveform = fft.waveform();
  
  // Draw waveform as colorful polygons
  beginShape();
  for (let i = 0; i < waveform.length; i += 5) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = height / 2 + map(waveform[i], -1, 1, -height / 4, height / 4);
    let color = map(i, 0, waveform.length, 0, 255);
    fill(255, color, 255);
    vertex(x, y);
  }
  endShape();
}
