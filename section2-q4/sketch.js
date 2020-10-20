// ギリシャ国旗
function setup(){
  createCanvas(400,300)
  for(let i = 0; i < 15; i++){
  for(let j = 0; j < 9; j++){
    noStroke()
       if(j<5&&i<3&&i>=2){fill(255,255,255)}
    else if (i<5&&j<3&&j>=2){fill(255,255,255)}

    else if (i<5&&j<5){fill(0,0,225)}

   else if(j%2==0){fill(0,0,225)}

    else if (j%2==1){fill(255,255,255)}

    rect(i * 20, j * 20, 20, 20);
  }
}


}
