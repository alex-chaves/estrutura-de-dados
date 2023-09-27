class No {
    constructor(nome, link) {
      this.nome = nome;
      this.link = link;
      this.proximo = null;
    }
  }
  
class ListaDeSites {
    constructor() {
      this.cabeca = null;
    }
  
    // Método para inserir um novo site na lista
    inserirSite(nome, link) {
      const novoNo = new No(nome, link);
      novoNo.proximo = this.cabeca;
      this.cabeca = novoNo;
    }
  
    // Método para buscar um site e mover o nó para o início
    buscarESubir(nome) {
        if (!this.cabeca) {
            console.log("A lista está vazia.");
            return;
        }
  
        let atual = this.cabeca;
        let anterior = null;
  
        // Percorre a lista em busca do site
        while (atual !== null && atual.nome !== nome) {
            anterior = atual;
            atual = atual.proximo;
        }
  
        // Se o site não for encontrado
        if (atual === null) {
            console.log("Site não encontrado.");
            return;
        }
  
        // Se o site for encontrado, mover para o início da lista
        if (anterior !== null) {
            anterior.proximo = atual.proximo;
            atual.proximo = this.cabeca;
            this.cabeca = atual;
        }
    }
  
    // Método para imprimir os sites na lista
    imprimirSites() {
        let atual = this.cabeca;
        while (atual !== null) {
            console.log(`Nome: ${atual.nome}, Link: ${atual.link}`);
            atual = atual.proximo;
        }
    }
}
  
// Exemplo de uso:
const listaDeSites = new ListaDeSites();
listaDeSites.inserirSite("Google", "https://www.google.com");
listaDeSites.inserirSite("Facebook", "https://www.facebook.com");
listaDeSites.inserirSite("Twitter", "https://www.twitter.com");

console.log("Lista de Sites Original:");
listaDeSites.imprimirSites();

listaDeSites.buscarESubir("Facebook");

console.log("Lista de Sites Após Busca e Subida do Facebook:");
listaDeSites.imprimirSites();
