class Pilha {
    constructor() {
      this.tamanhoMaximo = 50;
      this.topo = -1;
      this.elementos = new Array(this.tamanhoMaximo);
    }
  
    empilhar(elemento) {
        if (this.topo < this.tamanhoMaximo - 1) {
            this.topo++;
            this.elementos[this.topo] = elemento;
        } else {
            console.log("A pilha está cheia.");
        }
    }
  
    desempilhar() {
        if (this.topo >= 0) {
            const elemento = this.elementos[this.topo];
            this.topo--;
            return elemento;
        } else {
            console.log("A pilha está vazia.");
            return undefined;
      }
    }
  
    estaVazia() {
      return this.topo === -1;
    }
  }
  
  // Exemplo de uso com duas pilhas separadas
  const pilha1 = new Pilha();
  const pilha2 = new Pilha();
  
  pilha1.empilhar(1);
  pilha1.empilhar(2);
  pilha1.empilhar(3);
  
  pilha2.empilhar(101);
  pilha2.empilhar(102);
  
  console.log("Pilha 1:");
  console.log(pilha1.desempilhar());
  console.log(pilha1.desempilhar());
  
  console.log("Pilha 2:");
  console.log(pilha2.desempilhar());
  console.log(pilha2.desempilhar());
  