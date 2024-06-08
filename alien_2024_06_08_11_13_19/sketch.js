function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Body
  fill(255, 102, 102); // Light red color
  rect(160, 220, 80, 100, 20); // Main body with rounded corners
  
  // Head
  fill(204, 255, 102); // Light green color
  ellipse(200, 150, 100, 120); // Head
  
  // Eyes
  fill(0); // Black color
  ellipse(180, 140, 20, 30); // Left eye
  ellipse(220, 140, 20, 30); // Right eye
  
  // Pupils
  fill(255); // White color
  ellipse(180, 140, 10, 15); // Left pupil
  ellipse(220, 140, 10, 15); // Right pupil
  
  // Antennas
  stroke(204, 255, 102); // Same color as head
  strokeWeight(4);
  line(170, 90, 180, 120); // Left antenna
  line(230, 90, 220, 120); // Right antenna
  ellipse(170, 90, 10, 10); // Left antenna tip
  ellipse(230, 90, 10, 10); // Right antenna tip
  
  // Mouth
  noFill();
  stroke(0); // Black color
  strokeWeight(2);
  arc(200, 170, 40, 20, 0, PI); // Smiling mouth
  
  // Arms
  stroke(255, 102, 102); // Light red color
  strokeWeight(8);
  line(160, 250, 120, 280); // Left arm
  line(240, 250, 280, 280); // Right arm
  
  // Legs
  line(180, 320, 170, 360); // Left leg
  line(220, 320, 230, 360); // Right leg
}


