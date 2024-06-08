function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(14,144,181);

  // Car body
  fill(255, 0, 0); // Red color
  rect(120, 180, 160, 60); // Main body
  rect(150, 140, 100, 40); // Upper body
  
  // Wheels
  fill(0); // Black color
  ellipse(150, 240, 40, 40); // Left wheel
  ellipse(250, 240, 40, 40); // Right wheel
  
  // Windows
  fill(255); // White color
  rect(160, 150, 30, 30); // Left window
  rect(210, 150, 30, 30); // Right window
  
  // Headlights
  fill(255, 255, 0); // Yellow color
  ellipse(120, 200, 20, 20); // Left headlight
  ellipse(280, 200, 20, 20); // Right headlight
  
  // Grill
  fill(0); // Black color
  rect(135, 210, 10, 20); // Left grill
  rect(255, 210, 10, 20); // Right grill
}
