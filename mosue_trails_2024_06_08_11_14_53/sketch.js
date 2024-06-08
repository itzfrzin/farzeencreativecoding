let trail = [];

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(255);
  
  // Draw the trail
  for (let i = 0; i < trail.length; i++) {
    let transparency = map(i, 0, trail.length, 255, 0);
    fill(trail[i].color[0], trail[i].color[1], trail[i].color[2], transparency);
    
    // Apply random movement effect
    let x = trail[i].x + random(-1, 1);
    let y = trail[i].y + random(-1, 1);
    
    ellipse(x, y, trail[i].size, trail[i].size);
    
    // Decrease the size over time
    trail[i].size *= 0.95;
  }
  
  // If mouse is pressed, add a new element to the trail
  if (mouseIsPressed) {
    let color = [random(0, 255), random(0, 255), random(0, 255)];
    trail.push({x: mouseX, y: mouseY, size: random(10, 50), color: color});
    
    // Limit the trail length
    if (trail.length > 50) {
      trail.splice(0, 1);
    }
  }
  
  // Remove circles that have become too small
  trail = trail.filter(circle => circle.size > 1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
