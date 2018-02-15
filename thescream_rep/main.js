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




// runs once at start
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

// runs every frame
function draw() {
  background(255,0,0);

  for (var i=0; i<10; i++) {
     fill(100 + i*20, 255-i*10, 0);
     textSize(i*12);
     text('SCREAM', i*10, i*10);
     text('SCREAM', i*60, i*60);

     rect(10,150,50,300)
     rect(70,150,50,300)
     rect(650,250,150,500)
     

  

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
  fill(0, 255, 0);
//textSize(32);
//text('SCREAM', centerX, centerY);

  // render the image at x=125, y=200
 image(duck, 125, 200);
}

// resize canvas when the browser window resizes
function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
