export function sketchMain(p) {
  let head = 0;
  let eraseHead = 0;
  let phase = 'drawing';
  const speed = 12;       // pixels per frame for the snake
  const borderWeight = 4; // thickness of the border

  p.setup = function() {
    let canvas = p.createCanvas(600, 600);
    canvas.parent("canvasSketch");
    canvas.style("display", "block");
    canvas.style("margin", "auto");
    p.frameRate(60);
  };

  p.draw = function() {
    p.background(255);
    drawShapes();

    p.strokeWeight(borderWeight);
    p.noFill();
    const perim = 2 * (p.width + p.height);

    if (phase === 'drawing') {
      p.stroke(0);
      drawBorderSegment(0, head);
      head += speed;
      if (head >= perim) {
        head = perim;
        phase = 'erasing';
        eraseHead = 0;
      }

    } else { // erasing
      // draw the full black border ...
      p.stroke(0);
      drawBorderSegment(0, perim);
      // ... then draw white over it like an erasing snake
      p.stroke(255);
      drawBorderSegment(0, eraseHead);
      eraseHead += speed;
      if (eraseHead >= perim) {
        phase = 'drawing';
        head = 0;
      }
    }
  };

  // helper: draw the border from t=a to t=b along the 4 edges
  function drawBorderSegment(a, b) {
    let s = a;
    let e = Math.min(b, 2 * (p.width + p.height));
    while (s < e) {
      // top edge
      if (s < p.width) {
        let len = Math.min(e, p.width) - s;
        p.line(s, 0, s + len, 0);
        s += len;

      // right edge
      } else if (s < p.width + p.height) {
        let len = Math.min(e, p.width + p.height) - s;
        let y1 = s - p.width;
        let y2 = y1 + len;
        p.line(p.width, y1, p.width, y2);
        s += len;

      // bottom edge
      } else if (s < 2 * p.width + p.height) {
        let len = Math.min(e, 2 * p.width + p.height) - s;
        let seg = s - (p.width + p.height);
        let x1 = p.width - seg;
        let x2 = x1 - len;
        p.line(x1, p.height, x2, p.height);
        s += len;

      // left edge
      } else {
        let len = Math.min(e, 2 * (p.width + p.height)) - s;
        let seg = s - (2 * p.width + p.height);
        let y1 = p.height - seg;
        let y2 = y1 - len;
        p.line(0, y1, 0, y2);
        s += len;
      }
    }
  }

  function drawShapes() {
    p.stroke(0);
    p.strokeWeight(1);

    // Top triangle (no fill)
    p.noFill();
    p.triangle(300, 80, 240, 180, 370, 180);

    // Middle row
    p.fill('#d76b1f');  // orange triangle
    p.triangle(260, 200, 225, 245, 300, 245); // Smaller triangle

    // Black Circle
    p.fill(0);
    p.ellipse(340, 220, 50, 50);

    // Long horizontal Red Rectangle
    p.fill('#d54b3e');
    p.rect(120, 260, 180, 60);

    // gray‐green tall rect
    p.fill('#6b8f8f');
    p.rect(320, 260, 60, 160);

    // Bottom row
    // Beige Circle
    p.fill('#e0913f');
    p.ellipse(60, 380, 80, 80);

    // deep red square
    p.fill('#a01d25');
    p.rect(120, 340, 80, 80);

    // upside-down white triangle
    p.noFill();
    p.triangle(255, 340, 210, 420, 300, 420);

    // blue right triangle
    p.fill('#39859c');
    p.triangle(400, 420, 400, 330, 470, 420);
  }
}
