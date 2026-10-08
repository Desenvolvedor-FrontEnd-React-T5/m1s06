function checkStock(quantity) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (quantity > 0) resolve(`Em estoque: ${quantity}`);
      else reject("Produto esgotado");
    }, 1000);
  });
}

checkStock(0)
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

console.log("esperando a promise");
console.log("mas sigo executando o restante do codigo");
