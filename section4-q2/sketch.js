// テキスト「アニメーション」
// テキスト「アニメーション」
let x, y, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
}

function draw(){
  background(160, 192, 255);
  noStroke()
  fill(0,0,255)

  translate(x,y)
  rotate(frameCount/10)
  translate(-x,-y)
 star(x,y,50,)
  x+=5
  y+=5

  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}
let angle=PI/6
function star(cx, cy, r,angle){

  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI;

    
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
