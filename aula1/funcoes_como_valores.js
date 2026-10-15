const dobro = function(n) {
  return n * 2;
};

const triplo = (n) => n*3;

console.log(dobro(10)); // 20
console.log(triplo(20));


function aplicar(valor, operacao) {
    return operacao(valor);
}

console.log(aplicar(10, dobro));
console.log(aplicar(20, triplo));


function somadorFabrica() {
    return function(n) {
        return n+1;
    }
}

const somaUm = somadorFabrica();

console.log(somaUm(2));
