class Receita {
  constructor(nome, ingredientes, tempoPreparoMin) {
    this.nome = nome;
    this.ingredientes = ingredientes;
    this.tempoPreparoMin = tempoPreparoMin;
  }

  exibirDetalhes() {
    console.log(
      `Receita de ${this.nome}, usa ${this.ingredientes.length} ingredientes, e leva ${this.tempoPreparoMin}min. `,
    );
  }

  compararIngredientes(itensDisponiveis) {
    const possui = [];
    const falta = [];

    this.ingredientes.forEach((ingrediente) => {
      const encontrado = itensDisponiveis.find((item) => {
        return item.toLowerCase() === ingrediente.toLowerCase();
      });

      if (encontrado) {
        possui.push(ingrediente);
      } else {
        falta.push(ingrediente);
      }
    });

    if (possui.length > 0) {
      console.log(`Ingredientes disponíveis: ${possui.join(", ")}.`);
    } else {
      console.log("Nenhum ingrediente disponível.");
    }

    if (falta.length > 0) {
      console.log(`Ingredientes faltando: ${falta.join(", ")}.`);
    } else {
      console.log("Não falta nenhum ingrediente.");
    }
  }
}

module.exports = Receita;
