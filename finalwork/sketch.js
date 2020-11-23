// 最終課題を制作しよう

let count,x,y,z;
let cycle;
let size
function setup(){
  createCanvas(600, 600);
  count = 0;
  cycle = 100;
  size=40
}

function draw(){
  background(255)
    balloon("I love game",255,255,255,255,0,255,260);


function balloon(t,a,b,c,i,u,o,y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();//文字の高さ
  let p = y;//余白の大きさ]
  fill(i,u,o)
  rect(0, 0, w + p * 2, h + p * 2);
 fill(a,b,c)
  text(t, p, h + p);
}

  count = (count + 1) % cycle;
  size+=10
  noStroke()
 if(size<width/3){
   fill(0,0,225)}
   else if(size>width/3&&size<2*width/3)
  {fill(255,0,0)}
  else if(size>2*width/3&&size<width)
  {fill(255, 212, 0)}
  else{fill(255)}
  ellipse(x, y, size)

}

function mouseClicked(){

  size=1
  x=mouseX
  y=mouseY
}
