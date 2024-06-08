let brandData;
let colors = [];

function preload() {
  brandData = loadTable('shoe.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 500);
  background(255);

  let startX = width / 2;
  let startY = height / 2;
  let radius = min(width, height) * 0.4;

  // Calculate total sales for all brands
  let totalSales = brandData.getColumn('Sales').reduce((acc, val) => acc + parseFloat(val), 0);

  // Draw pie chart
  let angle = 0;
  for (let i = 0; i < brandData.getRowCount(); i++) {
    let brand = brandData.getString(i, 'Brand');
    let sales = parseFloat(brandData.getString(i, 'Sales'));

    let angleOffset = map(sales, 0, totalSales, 0, TWO_PI);
    let brandColor = color(random(255), random(255), random(255));
    colors.push(brandColor);

    fill(brandColor);
    arc(startX, startY, radius, radius, angle, angle + angleOffset);
    
    // Display brand names as labels outside the pie chart
    let labelRadius = radius * 1.1;
    let labelX = startX + labelRadius * cos(angle + angleOffset / 2);
    let labelY = startY + labelRadius * sin(angle + angleOffset / 2);
    textAlign(CENTER, CENTER);
    fill(0);
    text(brand, labelX, labelY);

    angle += angleOffset;
  }

  // Display legend
  displayLegend();
}

function displayLegend() {
  let boxWidth = 200;
  let boxHeight = 150;
  let margin = 20;
  let x = width - boxWidth - margin;
  let y = margin;

  fill(255);
  rect(x, y, boxWidth, boxHeight);
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("Market Share", x + 10, y + 20);

  for (let i = 0; i < brandData.getRowCount(); i++) {
    let brand = brandData.getString(i, 'Brand');
    let brandColor = colors[i];

    fill(brandColor);
    rect(x + 10, y + 40 + i * 20 - 10, 20, 20);

    fill(0);
    text(brand, x + 35, y + 40 + i * 20);
  }
}
