let seed = rnd_btw(0, 10000);
let rnd_cor = rnd_int(0, paleta.colors.length - 1);
let rnd_bege = rnd_int(0, paleta.bg.length - 1);


function setup() {
  angleMode(DEGREES);
  createCanvas(1000, 1000);
  background(paleta.bg[rnd_bege]);
  randomSeed(seed)

}

function draw() {

}



