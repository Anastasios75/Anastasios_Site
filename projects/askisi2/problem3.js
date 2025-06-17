export function sketch3(p) {
  let circles = [];

  p.setup = function() {
    p.createCanvas(600, 600);
    p.background(255); // white background
  };

  p.draw = function() {
    // Create a new circle with random size, color, and transparency at random position
    if (p.random(1) < 0.1) {
      let x = p.random(p.width);
      let y = p.random(p.height);
      let diameter = p.random(20, 100);
      let r = p.random(255);
      let g = p.random(255);
      let b = p.random(255);
      let a = p.random(50, 200); // alpha for transparency
      circles.push({ x, y, diameter, r, g, b, a });
    }

    // Draw all circles
    for (let i = 0; i < circles.length; i++) {
      let c = circles[i];
      p.fill(c.r, c.g, c.b, c.a);
      p.noStroke();
      p.ellipse(c.x, c.y, c.diameter, c.diameter);
    }

    // Limit number of circles to 500 to avoid performance issues
    if (circles.length > 500) {
      circles.shift();
    }
  };
}
