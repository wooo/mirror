var videofeed;


function setup() {
  createCanvas(640, 480);
  videofeed = createCapture(VIDEO);
  videofeed.size(320, 240);
  
}

function draw() {
  background (255);
  
  push();
  translate (videofeed.width, 0);
  scale (-1, 1);
  image(videofeed, 0, 0);
  pop();
  
}