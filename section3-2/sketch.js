// テキスト「関数を作る(1) 引数のある関数」
// 練習問題：星を描く関数を改造して正N角形を描画する関数を作ってみよう
function setup(){
  createCanvas(400,400)
  let n=12
  regularPolygon(n,50,50,20)

function regularPolygon(n, cx, cy, r){
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < n; i++){
    const theta = TWO_PI * i * 1 / n - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}
}
