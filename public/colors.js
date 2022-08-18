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