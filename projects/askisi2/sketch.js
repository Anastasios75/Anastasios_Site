let head = 0;
let eraseHead = 0;
let phase = 'drawing';
const speed = 12;       // pixels per frame for the snake
const borderWeight = 4; // thickness of the border

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.parent("canvas-container");
  cnv.style("display", "block");
  cnv.style("margin", "auto");
  frameRate(60);
}

function draw() {
  background(255);
  drawShapes();

  strokeWeight(borderWeight);
  noFill();
  const perim = 2 * (width + height);

  if (phase === 'drawing') {
    stroke(0);
    drawBorderSegment(0, head);
    head += speed;
    if (head >= perim) {
      head = perim;
      phase = 'erasing';
      eraseHead = 0;
    }

  } else { // erasing
    // draw the full black border ...
    stroke(0);
    drawBorderSegment(0, perim);
    // ... then draw white over it like an erasing snake
    stroke(255);
    drawBorderSegment(0, eraseHead);
    eraseHead += speed;
    if (eraseHead >= perim) {
      phase = 'drawing';
      head = 0;
    }
  }
}

// helper: draw the border from t=a to t=b along the 4 edges
function drawBorderSegment(a, b) {
  let s = a;
  let e = min(b, 2 * (width + height));
  while (s < e) {
    // top edge
    if (s < width) {
      let len = min(e, width) - s;
      line(s, 0, s + len, 0);
      s += len;

    // right edge
    } else if (s < width + height) {
      let len = min(e, width + height) - s;
      let y1 = s - width;
      let y2 = y1 + len;
      line(width, y1, width, y2);
      s += len;

    // bottom edge
    } else if (s < 2 * width + height) {
      let len = min(e, 2 * width + height) - s;
      let seg = s - (width + height);
      let x1 = width - seg;
      let x2 = x1 - len;
      line(x1, height, x2, height);
      s += len;

    // left edge
    } else {
      let len = min(e, 2 * (width + height)) - s;
      let seg = s - (2 * width + height);
      let y1 = height - seg;
      let y2 = y1 - len;
      line(0, y1, 0, y2);
      s += len;
    }
  }
}


function drawShapes() {
  stroke(0);
  strokeWeight(1);

  // Top triangle (no fill)
  noFill();
  triangle(300, 80, 240, 180, 370, 180);

  // Middle row
  fill('#d76b1f');  // orange triangle
  triangle(260, 200, 225, 245, 300, 245); // Smaller triangle

  // Black Circle
  fill(0);
  ellipse(340, 220, 50, 50);

  // Long horizontal Red Rectangle
  fill('#d54b3e');
  rect(120, 260, 180, 60);

  // gray‐green tall rect
  fill('#6b8f8f');
  rect(320, 260, 60, 160);


  // Bottom row
  // Beige Circle
  fill('#e0913f');
  ellipse(60, 380, 80, 80);

  // deep red square
  fill('#a01d25');
  rect(120, 340, 80, 80);

  // upside-down white triangle
  noFill();
  triangle(255, 340, 210, 420, 300, 420);

  // blue right triangle
  fill('#39859c');
  triangle(400, 420, 400, 330, 470, 420);

}



