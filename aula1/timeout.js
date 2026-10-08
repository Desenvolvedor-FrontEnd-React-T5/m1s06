/* setTimeout(() => {
  console.log("Passou 1s");
}, 1000); */


console.log("1. Pedindo os dados ao servidor...");
setTimeout(() => console.log("3. Dados chegaram!"), 0);
console.log("2. Enquanto isso, o programa continua...");


function carregaPedidos(callback) {
    setTimeout(() => {
        console.log("Pedidos carregados!");
        callback();
    }, 1000)
}

carregaPedidos(() => {console.log("os pedidos são esses: ")});
