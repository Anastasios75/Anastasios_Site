// sketch2.js
// Πρόβλημα 2: Recursion – Fractal City «Κηπούπολη» matching Figure 7 recursive pattern, with strokeCap and strokeJoin set to square to avoid gray circles

const sketch2 = (p) => {
  p.setup = () => {
    p.createCanvas(600, 600).parent('canvas2');
    p.noLoop();
    p.strokeCap(p.SQUARE);
    p.strokeJoin(p.MITER);
  };

  p.draw = () => {
    p.background(255);
    fractalCity(0, 0, p.width, 5);
  };

  function fractalCity(x, y, size, level) {
    if (level === 0) return;

    let third = size / 3;

    // Base case: draw filled black block
    if (level === 1) {
      p.noStroke();
      p.fill(0);
      p.rect(x, y, size, size);
      return;
    }

    // Draw outer square outline
    p.stroke(0);
    p.strokeWeight(1);
    p.noFill();
    p.rect(x, y, size, size);

    // Draw roads as thick gray lines
    p.stroke(150);
    p.strokeWeight(size * 0.05);

    // Vertical roads
    p.line(x + third, y, x + third, y + size);
    p.line(x + 2 * third, y, x + 2 * third, y + size);

    // Horizontal roads
    p.line(x, y + third, x + size, y + third);
    p.line(x, y + 2 * third, x + size, y + 2 * third);

    // Draw courtyard (center empty white square)
    p.noStroke();
    p.fill(255);
    p.rect(x + third, y + third, third, third);

    // Recursive calls for the 8 surrounding blocks (excluding center courtyard)
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!(i === 1 && j === 1)) {
          fractalCity(x + j * third, y + i * third, third, level - 1);
        }
      }
    }
  }
};
