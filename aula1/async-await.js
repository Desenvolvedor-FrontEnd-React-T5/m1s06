function checkStock(quantity) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (quantity > 0) resolve(`Em estoque: ${quantity}`);
      else reject("Produto esgotado");
    }, 1000);
  });
}

async function showStock(qtd) {
  console.log("Buscando estoque:");
  let message;
  try {
    message = await checkStock(qtd);
  } catch (error) {
    message = error;
  }
  console.log(message);
}

console.log("Iniciando");

showStock(1);

console.log("Seguindo");
