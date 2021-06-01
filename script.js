function setup() {
  createCanvas(800, 800, WEBGL);
  angleMode(DEGREES);
  noiseDetail(1);
}

function draw() {
  background(100, 150, 100);

  translate(0, -100, -500);
  rotateX(90);
  rotateZ(frameCount / 4);
  rotateX(map(cos(frameCount / 4), -1, 1, 30, -30));
  rotateY(map(sin(frameCount / 4), -1, 1, -30, 30));

  noStroke();

  directionalLight([255], createVector(0, 0, -1));
  directionalLight([255], createVector(0, 0, -1));

  let w = 30;
  let start = frameCount / 100;
  let xoff = 0;
  for (let x = -width / 2; x <= width / 2; x += w) {
    yoff = 0;
    for (let y = -height / 2; y <= height / 2; y += w) {
      let h = map(noise(xoff + start, yoff + start), 0, 1, -100, 100);

      let r = map(x, -width / 2, width / 2, 0, 255);
      let g = map(y, -height / 2, height / 2, 255, 0);
      let b = map(h, -100, 100, 0, 255);
      push();
      fill(r, g, b);
      translate(x, y, -h / 2);
      box(w, w, h);
      pop();

      yoff += 0.1;
    }
    xoff += 0.1;
  }
}
