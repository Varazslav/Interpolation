let points = [];

let numberOFPoints = 5;
let spacing;

function setup() {
  createCanvas(600, 600);
  points.push(0);
  spacing = width / (numberOFPoints-1);
  for(let i = 1; i < numberOFPoints-1; i++){
    points.push(random(0, height-100));
  }
  points.push(0);
}

function draw() {
  background(50);
  translate(0,height);

  // printSinc();
  interpolSpline();
  // printDots();


}

function mouseClicked(){
    mouseFirstX = mouseX;
}

function mouseDragged(){
  translate(0,height);
  for(let i = 0; i < points.length; i++){
    if (abs(mouseX - i*spacing) < spacing/2){
      points[i] = height - mouseY;
      // print(points[i]);
    }
  }
}

function printSinc(){
  push();
  noFill();
  stroke(255);
  strokeWeight(1);
  for(let i = 0; i < points.length; i++){
    for(let j =0; j < width; j++){
      // point(i, getSinc(i, i*spacing, spacing) * points[i] );
      point(j, sin(PI*(j-i*spacing)/spacing) / (PI*(j-i*spacing)/spacing) * - points[i] );
    }
  }
  pop();
}

function interpolSpline(){
  push();
  noFill();
  stroke(50, 255, 50);
  strokeWeight(2);
  beginShape();
  let y_tot = 0;
  for(let j =0; j < width; j++){
    for(let i = 0; i < points.length; i++){
      y_tot += sin(PI*(j-i*spacing)/spacing) / (PI*(j-i*spacing)/spacing) * - points[i];
    }
    vertex(j,  y_tot);
    y_tot=0;
  }
  endShape();
  pop();
}

function printDots(){
  for(let i = 0; i < points.length; i++){
    push();
    noStroke();
    fill(255, 50, 20);
    ellipse(i*spacing, -points[i], 10);
    pop();
  }
}
