let paleta;

//Funcao de selecionar por peso criada por George Francis
function createWeightedSelector(items) {
  const weightedArray = [];

  for (const item of items) {
    for (let i = 0; i < item.weight; i++) {
      weightedArray.push(item.value);
    }
  }

  //console.log(weightedArray.length)

  return function () {
    return weightedArray[Math.floor(fxrand() * weightedArray.length)];
  };
}
const pickPaleta = createWeightedSelector([
  {
    weight: 1,
    value: 'Outono',
  },
  {
    weight: 1,
    value: 'Fronce',
  },
  {
    weight: 1,
    value: 'Set',
  },
  {
    weight: 1,
    value: 'Vapor',
  },
  {
    weight: 1,
    value: 'Garden',
  },
  {
    weight: 1,
    value: 'Blood',
  },
  {
    weight: 1,
    value: 'Moon',
  },
  {
    weight: 1,
    value: 'Monochrome',
  },
  {
    weight: 1,
    value: 'Pink',
  },
]);

let corzinha = pickPaleta();

//Palettes
if (corzinha == 'Outono') {
  paleta = {
    colors: ['#053043', '#F37247', '#FDAF3A'],

    bg: [
      '#fcd5ce',
      '#fae1dd',
      '#f8edeb',
      '#e8e8e4',
      '#d8e2dc',
      '#ece4db',
      '#ffe5d9',
      '#ffd7ba',
      '#effaf8',
    ],

    name: 'Outono',
    dark: false,
  };
} else if (corzinha == 'Fronce') {
  paleta = {
    colors: [
      '#800016',
      '#a0001c',
      '#c00021',
      '#ff002b',
      '#1565c0',
      '#407ba7',
      '#004e89',
      '#002962',
      '#002962',
      '#00043a',
    ],
    bg: ['#F2F2F2', '#FFF1E0', '#F2E7C4'],
    name: 'Fronce',
    dark: false,
  };
} else if (corzinha == 'Set') {
  paleta = {
    colors: [
      '#001219',
      '#005f73',
      '#0a9396',
      '#94d2bd',
      '#ee9b00',
      '#ca6702',
      '#bb3e03',
      '#ae2012',
      '#9b2226',
    ],
    bg: ['#F2F2F2', '#f8edeb', '#FFF1E0', '#F2E7C4'],
    name: 'Set',
    dark: false,
  };
} else if (corzinha == 'Vapor') {
  paleta = {
    colors: [
      '#D7E8FC',
      '#b7d3f2',
      '#afafdc',
      '#9370FD',
      '#84afe6',
      '#79beee',
      '#BA72F1',
      '#FFFFFF',
    ],
    bg: ['#142638', '#141938', '#0B0E1F', '#181024'],
    name: 'Vapor',
    dark: true,
  };
} else if (corzinha == 'Garden') {
  paleta = {
    colors: ['#2E5902', '#65A603', '#558C03', '#338C03', '#338C32'],
    bg: ['#ECFFCB', '#D6FFD6', '#E1FFE9', '#F0FFD4', '#021F03'],
    name: 'Garden',
    dark: false,
  };
} else if (corzinha == 'Blood') {
  paleta = {
    colors: ['#E08781', '#FFADC3', '#CBB5DD', '#DF7474', '#EDF7F7', '#EDFFF7'],
    bg: ['#DD2923', '#DD2C5A', '#DB2C3D', '#DB4B3D', '#B4135D'],
    name: 'Blood',
    dark: true,
  };
} else if (corzinha == 'Moon') {
  paleta = {
    colors: ['#F1F0F2', '#F2BF5E', '#F2D091', '#59A8D9'],
    bg: ['#121212', '#00181F', '#000C17', '#011629', '#012340'],
    name: 'Golden',
    dark: true,
  };
} else if (corzinha == 'Monochrome') {
  paleta = {
    colors: ['#F1F0F2', '#FFFFFF', '#EEEEEE', '#353535'],
    bg: ['#0F0F0F', '#0E0E0E', '#2C2C2C', '#0E0F0F', '#161616'],
    name: 'Monochrome',
    dark: true,
  };
} else if (corzinha == 'Pink') {
  paleta = {
    colors: ['#FF37CA', '#CC2198', '#6E0A6E', '#DD00E7', '#A1009C', '#7E01B9'],
    bg: ['#CAF0F0', '#D2E9FF', '#E5F3F0'],
    name: 'Pink',
    dark: false,
  };
}

/*let paleta;

//Funcao de selecionar por peso criada por George Francis
function createWeightedSelector(items) {
  const weightedArray = [];

  for (const item of items) {
    for (let i = 0; i < item.weight; i++) {
      weightedArray.push(item.value);
    }
  }
  return function () {
    return weightedArray[Math.floor(fxrand() * weightedArray.length)];
  };
}
const pickPaleta = createWeightedSelector([
  {
    weight: 2,
    value: 'Outono',
  },
  {
    weight: 2,
    value: 'Fronce',
  },
]);

let corzinha = pickPaleta();

//Palettes
if (corzinha == 'Outono') {
  paleta = {
    colors: ['#053043', '#F37247', '#FDAF3A'],

    bg: [
      '#fcd5ce',
      '#fae1dd',
      '#f8edeb',
      '#e8e8e4',
      '#d8e2dc',
      '#ece4db',
      '#ffe5d9',
      '#ffd7ba',
      '#effaf8',
    ],

    name: 'Outono',
    dark: false,
  };
} else if (corzinha == 'Fronce') {
  paleta = {
    colors: [
      '#800016',
      '#a0001c',
      '#c00021',
      '#ff002b',
      '#1565c0',
      '#407ba7',
      '#004e89',
      '#002962',
      '#002962',
      '#00043a',
    ],
    bg: ['#F2F2F2', '#FFF1E0', '#F2E7C4'],
    name: 'Fronce',
    dark: false,
  };
}
*/
