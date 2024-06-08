let img;
let maskImg;

function preload() {
  // Load the main image
  img = loadImage('night.jpg');
}

function setup() {
  createCanvas(800, 800);

  // Create the mask image
  maskImg = createGraphics(800, 700);
  
  
  maskImg.fill(255);
  maskImg.ellipse(width / 2, height / 2, 400, 400);
  
  // Apply the mask to the main image
  img.mask(maskImg);
}

function draw() {
  background(0);

  // Display the masked image
  image(img, 0, 0);
}


