export function sketch1(p) {
  p.setup = function() {
    p.createCanvas(600, 600);
    p.background(100); // darker gray background
    drawPattern();
  };

  p.draw = function() {
    // static drawing, no continuous update needed
  };

  function drawPattern() {
    const centerX = p.width/2;
    const centerY = p.height/2;
    const circleSize = 100;
    const squareSize = 70; // Size for the square inside center circle

    // Draw diagonal lines in white
    p.stroke(255);
    p.strokeWeight(2);
    p.line(0, 0, p.width, p.height);
    p.line(p.width, 0, 0, p.height);

    // Draw circles with black outline
    p.fill(255);
    p.stroke(0);
    p.strokeWeight(2);

    // Draw circles in cross pattern (touching each other)
    p.ellipse(centerX, centerY, circleSize); // center
    p.ellipse(centerX, centerY - circleSize, circleSize); // top
    p.ellipse(centerX, centerY + circleSize, circleSize); // bottom
    p.ellipse(centerX - circleSize, centerY, circleSize); // left
    p.ellipse(centerX + circleSize, centerY, circleSize); // right

    // Draw square inside center circle
    p.rectMode(p.CENTER);
    p.rect(centerX, centerY, squareSize, squareSize);
  }
}
