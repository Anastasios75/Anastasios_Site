// sketch1.js
// Πρόβλημα 1: Arrays & Iteration – Grid με τυχαίες υποδιαιρέσεις + click

const sketch1 = (p) => {
  const ROWS = 6, COLS = 6;
  let gridData;

  p.setup = () => {
    p.createCanvas(600, 600).parent('canvas1');
    p.frameRate(60);
    gridData = createGrid();
  };

  p.draw = () => {
    p.background(255);
    drawGrid();
  };

  p.mousePressed = () => {
    for (let r of gridData)
      for (let c of r)
        for (let sr of c)
          for (let cell of sr) {
            if (
              p.mouseX > cell.x && p.mouseX < cell.x + cell.w &&
              p.mouseY > cell.y && p.mouseY < cell.y + cell.h
            ) {
              cell.hue = p.random(360);
              return;
            }
          }
  };

  function createGrid() {
    let data = [];
    let cellW = p.width / COLS, cellH = p.height / ROWS;
    for (let r = 0; r < ROWS; r++) {
      data[r] = [];
      for (let c = 0; c < COLS; c++) {
        let subR = p.floor(p.random(2, 6)), subC = p.floor(p.random(2, 6));
        let subW = cellW / subC, subH = cellH / subR;
        data[r][c] = [];
        for (let sr = 0; sr < subR; sr++) {
          data[r][c][sr] = [];
          for (let sc = 0; sc < subC; sc++) {
            let x = c * cellW + sc * subW;
            let y = r * cellH + sr * subH;
            let hue = p.random(360);
            data[r][c][sr][sc] = { x, y, w: subW, h: subH, hue };
          }
        }
      }
    }
    return data;
  }

  function drawGrid() {
    p.colorMode(p.HSL);
    p.noStroke();
    for (let r of gridData)
      for (let c of r)
        for (let sr of c)
          for (let cell of sr) {
            p.fill(cell.hue, 80, 60);
            p.rect(cell.x, cell.y, cell.w, cell.h);
          }
  }
};
