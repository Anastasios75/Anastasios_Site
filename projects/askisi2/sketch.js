function setup() {
  let cnv = createCanvas(600, 600);
  cnv.parent("canvas-container");
  cnv.style("display", "block");
  cnv.style("margin", "auto");
  x = 600;
  y = 600;

  // Top triangle (bigger)
  triangle(300, 80, 240, 180, 370, 180);

  // Middle row
  triangle(260, 200, 230, 240, 290, 240); // Smaller triangle
  ellipse(340, 220, 45, 45); // Circle

  rect(120, 260, 180, 60); // Long horizontal rectangle
  rect(320, 260, 60, 160); // Tall rectangle

  // Bottom row
  ellipse(60, 380, 80, 80); // Circle
  rect(120, 340, 80, 80); // Square

  // Upside down triangle
  triangle(255, 340, 210, 420, 300, 420);

  // Right triangle
  triangle(400, 420, 400, 330, 470, 420);
}

function draw() {
  // Nothing dynamic here
}





// function setup() {
//     createCanvas(800, 600);
// }

// function draw() {
//     background(10);
// }

// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/l__fEY1xanY
// https://thecodingtrain.com/CodingChallenges/052-random-walk.html

// let x;
// let y;

// function setup() {
//   let cnv = createCanvas(windowWidth/2, windowHeight/2);
//   cnv.parent("canvas-container");
//   cnv.style("display", "block");
//   cnv.style("margin", "auto");
//   x = width / 2;
//   y = height / 2;
//   background(30,0,0);
// }

// function draw() {
//   stroke(255,100);
//   strokeWeight(5);
//   point(x, y);
//   const r = floor(random(4));
//   switch (r) {
//     case 0:
//       x = x + 5;
//       break;
//     case 1:
//       x = x - 5;
//       break;
//     case 2:
//       y = y + 5;
//       break;
//     case 3:
//       y = y - 5;
//       break;
//   }
// }




// -------------------------------
// // Dimitris Papanikolaou
// // interpolate point between two points

// let v1;
// let v2;
// let p;
// let slider;


// function setup() {
//   let cnv = createCanvas(400, 400);
//   cnv.parent("canvas-container");
//   cnv.style("display", "block");
//   cnv.style("margin", "auto");
//   v1 = createVector(50, 350);
//   v2 = createVector(350, 50);
//   p = createVector();
//   slider = createSlider(0, 100);
//   slider.position(10, 10);
//   slider.size(80);
//   slider.parent("canvas-container");
//   slider.style("display", "block");
//   slider.style("margin", "auto");
// }

// function draw() {
//   background(255);
//   strokeWeight(1);
//   stroke(0)
//   rect(0,0,400,400);
//   line(v1.x, v1.y, v2.x, v2.y);

//   strokeWeight(8);
//   stroke(0);
//   p = interpolatePoint(v1,v2, slider.value()/100);
//   point(v1.x, v1.y);
//   point(v2.x, v2.y);
//   stroke(255,0,0);
//   point(p.x, p.y);
// }

// function interpolatePoint(p1,p2, t){
//   let x = t * (p2.x-p1.x) + p1.x;
//   let y = t * (p2.y-p1.y) + p1.y;
//   let p = createVector(x, y);
//   return p;
// }
