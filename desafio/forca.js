class Forca {
  constructor(palavra) {
    this.palavra = palavra;
    this.estado = "aguardando chute";
    this.vidas = 6;
    this.letrasAcertadas = [];
    this.letrasChutadas = [];
    for (let i = 0; i < this.palavra.length; i++) {
      this.letrasAcertadas.push("_");
    }
  }

  chutar(letra) {
    if (this.vidas == 1) {
      this.estado = "perdeu";
    }
    if (this.letrasChutadas.includes(letra)) {
    } else {
      if (letra.length > 1) {
      } else {
        this.letrasChutadas.push(letra);
        if (this.palavra.includes(letra)) {
          for (let i = 0; i < this.palavra.length; i++) {
            if (this.palavra[i] === letra) {
              this.letrasAcertadas[i] = letra;
            }
            if (!this.letrasAcertadas.includes("_")) {
              this.estado = "ganhou";
            } else {
              this.estado = "aguardando chute";
            }
          }
        } else {
          this.vidas--;
        }
      }
    }
  }

  buscarEstado() {
    return this.estado;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.letrasAcertadas, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    };
  }
}

module.exports = Forca;
