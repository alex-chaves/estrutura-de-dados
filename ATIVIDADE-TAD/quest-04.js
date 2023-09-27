class Pilha {
    constructor() {
      this.itens = [];
    }
  
    push(item) {
      this.itens.push(item);
    }
  
    pop() {
      return this.itens.pop();
    }
  
    isEmpty() {
      return this.itens.length === 0;
    }
  
    size() {
      return this.itens.length;
    }
}
  
function inverterTexto(texto) {
    const pilha = new Pilha();
    for (let i = 0; i < texto.length; i++) {
        pilha.push(texto[i]);
    }
  
    let textoInvertido = '';
    while (!pilha.isEmpty()) {
        textoInvertido += pilha.pop();
    }
  
    return textoInvertido;
  }
  
function ePalindromo(texto) {
    // Remove espaços e pontos e converte para letras minúsculas
    texto = texto.replace(/ /g, '').replace(/\./g, '').toLowerCase();
    const textoInvertido = inverterTexto(texto);
  
    return texto === textoInvertido;
  }
  
const readline = require('readline');
  
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
  
rl.question('Digite uma sequência de caracteres: ', (texto) => {
    const textoInvertido = inverterTexto(texto);
    const resultadoPalindromo = ePalindromo(texto) ? 'é um palíndromo' : 'não é um palíndromo';
  
    console.log(`Texto invertido: ${textoInvertido}`);
    console.log(`O texto ${resultadoPalindromo}`);
    rl.close();
  });
  