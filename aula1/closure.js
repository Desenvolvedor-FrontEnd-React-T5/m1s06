function criaCalculadoraImposto(taxa) {
  return function (valor) {
    return valor + (valor * taxa) / 100;
  };
}

const calculaTaxaImportacao = criaCalculadoraImposto(10);
const calculaTaxaLuxo = criaCalculadoraImposto(20);

console.log(calculaTaxaImportacao(50));
console.log(calculaTaxaLuxo(50));

function criaContador() {
  let count = 0;
  return function () {
    count = count + 1;
    return count;
  };
}

const click = criaContador();
console.log(click());
console.log(click());
console.log(click());
console.log(click());

const contador2 = criaContador();
console.log(contador2());


console.log("Mais um click: " + click());

