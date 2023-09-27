class Pilha {
    constructor() {
        this.itens = [];
    }
  
    empilhar(item) {
        this.itens.push(item);
    }
  
    desempilhar() {
        return this.itens.pop();
    }
  
    estaVazia() {
        return this.itens.length === 0;
    }
  
    tamanho() {
        return this.itens.length;
    }
  }
  
function removerItem(pilha, chave) {
    const pilhaTemporaria = new Pilha();
  
    while (!pilha.estaVazia()) {
        const item = pilha.desempilhar();
        if (item !== chave) {
            pilhaTemporaria.empilhar(item);
        }
    }
  
    while (!pilhaTemporaria.estaVazia()) {
      pilha.empilhar(pilhaTemporaria.desempilhar());
    }
  }
  
  // Exemplo de uso:
  const pilha = new Pilha();
  
  pilha.empilhar(1);
  pilha.empilhar(2);
  pilha.empilhar(3);
  pilha.empilhar(4);
  pilha.empilhar(2); // Item a ser removido
  
  const chave = 2; // Chave a ser removida
  
  removerItem(pilha, chave);
  
  while (!pilha.estaVazia()) {
    console.log(pilha.desempilhar());
  }
  