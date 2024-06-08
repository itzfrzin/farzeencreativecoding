function setup() {
  createCanvas(400, 400);
  background(255);
  noLoop(); // Ensures the draw function only runs once
}

function draw() {
  let cols = 10; // Number of columns
  let rows = 10; // Number of rows
  let baseDiameter = width / cols; // Base diameter of each circle

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * baseDiameter + baseDiameter / 2;
      let y = j * baseDiameter + baseDiameter / 2;
      let distanceFromCenter = dist(x, y, width / 2, height / 2);
      let maxDistance = dist(0, 0, width / 2, height / 2);
      let alphaValue = map(distanceFromCenter, 0, maxDistance, 255, 50);

      if ((i + j) % 2 === 0) {
        // Base Circle
        fill(0, 102, 204, alphaValue); // Blue color with varying opacity
        ellipse(x, y, baseDiameter, baseDiameter);
        
        // Smaller circles
        fill(255, 102, 102, alphaValue); // Light red color with varying opacity
        ellipse(x, y, baseDiameter * 0.7, baseDiameter * 0.7);
        
        fill(102, 255, 102, alphaValue); // Light green color with varying opacity
        ellipse(x, y, baseDiameter * 0.4, baseDiameter * 0.4);
        
        fill(255, 255, 102, alphaValue); // Light yellow color with varying opacity
        ellipse(x, y, baseDiameter * 0.2, baseDiameter * 0.2);
      } else {
        // Colorless circles (white)
        fill(255, alphaValue); // White color with varying opacity
        ellipse(x, y, baseDiameter, baseDiameter);
        
        fill(255, alphaValue); // White color with varying opacity
        ellipse(x, y, baseDiameter * 0.7, baseDiameter * 0.7);
        
        fill(255, alphaValue); // White color with varying opacity
        ellipse(x, y, baseDiameter * 0.4, baseDiameter * 0.4);
        
        fill(255, alphaValue); // White color with varying opacity
        ellipse(x, y, baseDiameter * 0.2, baseDiameter * 0.2);
      }
    }
  }
}
