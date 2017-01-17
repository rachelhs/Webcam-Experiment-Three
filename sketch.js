var capture;
var outline;

function setup() {
  
  createCanvas(360, 360);
  capture = createCapture(VIDEO);
  capture.hide();
  capture.size(640, 360);
  outline = createGraphics(360, 360, RGB);
  
}

function draw() {
  
  push();
  translate(capture.width, 0);
  scale(-1, 1);
  image(capture, 0, 0);
  filter('THRESHOLD');
  pop();
  
  outline.background(255, 10);
  findEdge();
  

}

function findEdge() {

loadPixels();

  for (var y = 1; y < height - 1; y++) {
    for (var x = 1; x < width - 1; x++) {
      var loc = (x + y * width) * 4;
      var left = loc - 4;
      var lo = pixels[loc];
      var l = pixels[left];
      if (abs(lo - l) > 100) {
        
        outline.stroke(243, 205, 138);
        outline.ellipse(x, y, 15, 15);
      }
    }
  }
  image(outline, 0, 0);
}
