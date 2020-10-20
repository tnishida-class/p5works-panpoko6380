// 小手調べfunction setup() {
function setup() {
  createCanvas(400, 400);
  noFill()
  for(let i=1;i<6;i++){
    stroke(0,0,255)
    ellipse(200,200,20*i)
  }
  for(let i=6;i<11;i++){
    stroke(255,0,0)
    ellipse(200,200,20*i)
  }
}
