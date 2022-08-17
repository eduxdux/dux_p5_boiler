let seed = rnd_btw(0, 10000);
let rnd_cor = rnd_int(0, paleta.colors.length - 1);
let rnd_bege = rnd_int(0, paleta.bg.length - 1);

let colorir, nois;

let quantidade = 100;
let arr_grid = [];

let printTest = true;

function setup() {
  scribble = new Scribble();
  angleMode(DEGREES);
  comeco(1000, 800);
  createCanvas(cnvX, cnvY);
  frameRate(50);
  background(paleta.bg[rnd_bege]);

  let tm = width / (quantidade * 0.75);
  let gap = width * 0.02;
  ///////CRIA AQUI O ARRAY DE CLASSES
  for (let i = 0; i < quantidade; i++) {
    for (let j = 0; j < quantidade; j++) {
      let px = i * ((tm + gap) + tm / 2)+rnd_btw(-10,10);
      let py = j * ((tm + gap) + tm / 2)+rnd_btw(-10,10);

      nois = (noise(px * 0.01, py * 0.01) * gap) / 2;
      // let noisoru = map(nois, 0,1,0,angle)
      rnd_cor = rnd_int(0, paleta.colors.length - 1);
      colorir = rnd_cor;

      let unid = new Grid(px, py, tm*1.35, colorir, nois);
      arr_grid.push(unid);
    }
  }
}

function draw() {
  for (let i of arr_grid) {
    i.mostra();
  }

  if (frameCount > 24) {
    noLoop();
    noFill();
    stroke(chroma(paleta.bg[rnd_bege]).brighten(9).hex());
    strokeWeight(width / 20);
    rect(0, 0, width, height);
    granulate(13);
    fxpreview();
  }
}

function comeco(w, h) {
  cnvX = w;
  cnvY = h;
  randomSeed(seed);
  noiseSeed(seed);
}

//////////Função de gerador dos brushes

function giz(px, py, tm) {
  push();
  translate(px, py);
  noStroke();
  //fill(paleta.colors[rnd_cor])
  for (let i = 0; i < 4; i++) {
    ellipse(
      rnd_btw(tm * 0.3, tm),
      rnd_btw(tm * 0.3, tm),
      rnd_btw(tm * 0.2, tm * 0.5),
    );
  }
  pop();
}
function lapis(px, py, tm, rd_cor) {
  push();
  //blendMode(BURN)
  translate(px, py);
  noFill();
  stroke(paleta.colors[rd_cor]);
  for (let i = 0; i < 12; i++) {
    rect(
      rnd_btw(0, tm),
      rnd_btw(0, tm),
      rnd_btw(tm * 0.2, tm * 0.5),
      rnd_btw(tm * 0.04, tm * 0.15),
      5,
    );
    // ellipse(
    //   rnd_btw(tm*0.5,tm),
    //   rnd_btw(tm*0.5,tm),
    //   rnd_btw(tm*0.04,tm*0.15),
    //      )
  }
  stroke(paleta.bg[rnd_bege]);
  for (let i = 0; i < 8; i++) {
    ellipse(
      rnd_btw(tm * 0.5, tm),
      rnd_btw(tm * 0.5, tm),
      rnd_btw(tm * 0.04, tm * 0.15),
    );
  }
  pop();
}
function brush2(px, py, tm) {
  push();
  noFill();

  translate(px, py);

  // stroke(0)
  // rect(0,0,tm)

  stroke(paleta.colors[rnd_cor]);

  scribble.scribbleLine(tm * 0.2, 0, tm * 0.2, tm);
  scribble.scribbleLine(tm / 2, 0, tm / 2, tm);
  scribble.scribbleLine(tm * 0.8, 0, tm * 0.8, tm);

  // for (let i = 0; i < 3; i++) {
  //   scribble.scribbleRect(
  //     i*tm/2,
  //     rnd_btw(tm*0.2,tm*0.5),
  //     tm/8,
  //     tm/2,
  //     50)
  // }
  pop();
}

class Grid {
  constructor(px, py, tm, colore, noise) {
    this.px = px;
    this.py = py;
    this.tm = tm * rnd_btw(0.5, 1.5);
    this.colore = colore;
    this.ruido = noise * 5;
    this.prob = rnd_int(0, 100);
    this.minusY = rnd_int(-1, 1);
    this.minusX = rnd_int(-1, 1);
  }

  mostra() {
    fill(paleta.colors[this.colore]);

    if (this.prob > 25) {
      giz(this.px, this.py, this.tm);
    } else  {
      lapis(this.px, this.py, this.tm, this.colore);
    } 
    this.px += (this.ruido * this.minusY)/rnd_int(2,12);
    this.py += (this.ruido * this.minusX)/rnd_int(2,12);

    //console.log(this.px)
  }
}

