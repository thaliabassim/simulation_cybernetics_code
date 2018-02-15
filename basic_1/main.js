// TODO
// - coordinate system
// - ellipses and other shapes
// - fills, strokes
// - text
// - images
// - positioning
// - rotation

// runs before everything
// use to load assets
var duck;

function preload() {
  // // load an image
  duck = loadImage('assets/duck.png');

}

// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

// runs every frame
function draw() {
  background(0,0,255);

  for (var i=0; i<10; i++) {
     fill(100 + i*20, 255-i*10, 0);
     //textSize(i*12);
     //text('cool', i*10, i*10);
     rotate(0.01*i)
     rect(i*10, i*10, 40, 40);

  

  }
 

  // https://p5js.org/reference/#/p5/ellipse
 //ellipse(100, 100, 80, 80);

  // https://p5js.org/reference/#/p5/fill
 // fill(255, 204, 0);

 // rotate(0.1);

  // https://p5js.org/reference/#/p5/rect
 // rect(30, 20, 55, 55);

 // fill(255, 100, 0);
  //rotate(0.1);
  //rect(200, 180, 55, 55);
  //resetMatrix();

  // get the center x and y coordinates
  [centerX, centerY] = [width/2, height/2];

  // rendering text
  fill(255, 0, 0);
textSize(32);
text('word', centerX, centerY);

  // render the image at x=125, y=200
 image(duck, 125, 200);
}

// resize canvas when the browser window resizes
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
