// sketch3.js
// Πρόβλημα 3: Snake Game με Κτίρια ως Εμπόδια + wrap-around

const sketch3 = (p) => {
  const step = 10;
  let snakeBody = [], snakeLength, food = [], buildings = [];

  p.setup = () => {
    p.createCanvas(600, 600).parent('canvas3');
    p.frameRate(10);

    // Snake init
    snakeLength = 5;
    let sx = Math.floor((p.width / 2) / step) * step;
    let sy = Math.floor((p.height / 2) / step) * step;
    snakeBody = [{ x: sx, y: sy }];

    // Food
    for (let i = 0; i < 100; i++) {
      food.push({
        x: Math.floor(p.random(p.width / step)) * step,
        y: Math.floor(p.random(p.height / step)) * step
      });
    }

    // Buildings
    for (let i = 0; i < 15; i++) {
      let bw = Math.floor(p.random(3, 8)) * step;
      let bh = Math.floor(p.random(3, 8)) * step;
      let bx = Math.floor(p.random((p.width - bw) / step)) * step;
      let by = Math.floor(p.random((p.height - bh) / step)) * step;
      buildings.push({ x: bx, y: by, w: bw, h: bh });
    }
  };

  p.draw = () => {
    p.background(30);
    drawBuildings();
    drawFood();
    moveSnake();
    checkFood();
    checkBuildings();
    drawSnake();
  };

  function moveSnake() {
    let head = {
      x: (snakeBody[0].x + fwdX + p.width) % p.width,
      y: (snakeBody[0].y + fwdY + p.height) % p.height
    };
    snakeBody.unshift(head);
    if (snakeBody.length > snakeLength) snakeBody.pop();
  }

  function checkFood() {
    for (let i = food.length - 1; i >= 0; i--) {
      if (snakeBody[0].x === food[i].x && snakeBody[0].y === food[i].y) {
        food.splice(i, 1);
        snakeLength++;
        break;
      }
    }
  }

  function drawSnake() {
    p.fill(0, 200, 0); p.noStroke();
    snakeBody.forEach(s => p.rect(s.x, s.y, step, step));
  }

  function drawFood() {
    p.fill(200, 50, 50); p.noStroke();
    food.forEach(f => p.rect(f.x, f.y, step, step));
  }

  function drawBuildings() {
    p.fill(100); p.noStroke();
    buildings.forEach(b => p.rect(b.x, b.y, b.w, b.h));
  }

  function checkBuildings() {
    let h = snakeBody[0];
    buildings.forEach(b => {
      if (h.x >= b.x && h.x < b.x + b.w &&
          h.y >= b.y && h.y < b.y + b.h) {
        fwdX = fwdY = 0;
      }
    });
  }

  let fwdX = 0, fwdY = 0;
  p.keyPressed = () => {
    if (p.keyCode === p.UP_ARROW && fwdY === 0)    { fwdX = 0;    fwdY = -step; }
    else if (p.keyCode === p.DOWN_ARROW && fwdY === 0){ fwdX = 0;    fwdY = step;  }
    else if (p.keyCode === p.RIGHT_ARROW && fwdX === 0){ fwdX = step; fwdY = 0;     }
    else if (p.keyCode === p.LEFT_ARROW && fwdX === 0) { fwdX = -step; fwdY = 0;     }
  };
};
