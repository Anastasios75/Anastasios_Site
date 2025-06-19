  // Felder von Rechteck Schraffuren Überlagert inspired by Frieder Nake 1965
  // Uses 7 random values per field to control size, location, orientation, quantity, and pen

  let fields = [];

  let angleOffset = 0;

  function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("canvas-container-full");
    cnv.style("display", "block");
    cnv.style("margin", "auto");
    frameRate(60);
    generateFields();
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    generateFields();
    redraw();
  }

  function mousePressed() {
    generateFields();
    redraw();
  }

  function generateFields() {
    fields = [];
    let numFields = 20; // increased number of rectangular fields

    for (let i = 0; i < numFields; i++) {
      // 7 random values controlling:
      // x, y position; width, height; orientation angle; line count; stroke weight
      let x = random(width * 0.1, width * 0.9);
      let y = random(height * 0.1, height * 0.9);
      let w = random(width * 0.1, width * 0.3);
      let h = random(height * 0.1, height * 0.3);
      let angle = random([0, HALF_PI]); // horizontal or vertical hatchings
      let lineCount = floor(random(5, 30));
      let strokeW = random(0.5, 3);
      let strokeCol = color(0); // black pen

      fields.push({x, y, w, h, angle, lineCount, strokeW, strokeCol});
    }
  }

  function draw() {
    background(0);

    angleOffset += 0.01;

    for (let f of fields) {
      push();
      translate(f.x, f.y);
      rotate(f.angle + angleOffset);
      stroke(255);
      strokeWeight(f.strokeW);

      // Draw rectangle border
      // noFill();
      // rect(-f.w / 2, -f.h / 2, f.w, f.h);

      // Draw hatch lines inside rectangle
      let spacing = f.w / f.lineCount;
      for (let i = 1; i < f.lineCount; i++) {
        line(i * spacing - f.w / 2, 0, i * spacing - f.w / 2, height);
      }
      pop();
    }
  }
