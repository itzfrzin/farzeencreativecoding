let img;
let maskImg;
let myFont;

function preload() {
  // Load the main image
  img = loadImage('nature.jpg');
  // Load the font
  myFont = loadFont('mangat.ttf');
}

function setup() {
  createCanvas(800, 800);
  
  
  maskImg = createGraphics(1000, 1000);
  
  
  maskImg.textFont(myFont);
  maskImg.textSize(20);
  maskImg.textAlign(CENTER, CENTER);
  maskImg.fill(0);  
  
  // Draw the text in the mask image
  maskImg.text("BOWL", width / 20, height / 20);
  
  // Apply the mask to the main image
  img.mask(maskImg);
}

function draw() {
  background(220);

  // Display the masked image
  image(img, 0, 0);
}
