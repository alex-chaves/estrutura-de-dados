class No {
    constructor(valor) {
        this.valor = valor;
        this.proximo = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.cabeca = null;
    }

    // Método para inserir um elemento no final da lista
    inserir(valor) {
        const novoNo = new No(valor);
        if (!this.cabeca) {
            this.cabeca = novoNo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo) {
                atual = atual.proximo;
            }
        atual.proximo = novoNo;
    }
}

// Método para verificar se a lista está ordenada
estaOrdenada() {
    let atual = this.cabeca;
    while (atual && atual.proximo) {
        if (atual.valor > atual.proximo.valor) {
            return false;
        }
        atual = atual.proximo;
    }
    return true;
}

// Método para ordenar a lista
ordenar() {
    if (!this.estaOrdenada()) {
        const valores = [];
        let atual = this.cabeca;
        while (atual) {
            valores.push(atual.valor);
            atual = atual.proximo;
        }
        valores.sort((a, b) => a - b);
        atual = this.cabeca;
        let indice = 0;
        while (atual) {
            atual.valor = valores[indice];
            indice++;
            atual = atual.proximo;
        }
    }
}

// Método para mesclar duas listas mantendo a ordenação
mesclarOrdenado(outraLista) {
    const listaMesclada = new ListaEncadeada();
    let atual1 = this.cabeca;
    let atual2 = outraLista.cabeca;

    while (atual1 || atual2) {
        if (!atual1) {
            listaMesclada.inserir(atual2.valor);
            atual2 = atual2.proximo;
        } else if (!atual2) {
            listaMesclada.inserir(atual1.valor);
            atual1 = atual1.proximo;
        } else {
            if (atual1.valor < atual2.valor) {
            listaMesclada.inserir(atual1.valor);
            atual1 = atual1.proximo;
            } else {
            listaMesclada.inserir(atual2.valor);
            atual2 = atual2.proximo;
            }
        }
    }

    return listaMesclada;
}
}

// Exemplo de uso:
const lista1 = new ListaEncadeada();
const lista2 = new ListaEncadeada();

lista1.inserir(5);
lista1.inserir(10);
lista1.inserir(15);

lista2.inserir(2);
lista2.inserir(12);

console.log("Lista 1 está ordenada:", lista1.estaOrdenada());
console.log("Lista 2 está ordenada:", lista2.estaOrdenada());

lista1.ordenar();
lista2.ordenar();

console.log("Lista 1 após ordenação:");
console.log(JSON.stringify(lista1, null, 2));
console.log("Lista 2 após ordenação:");
console.log(JSON.stringify(lista2, null, 2));

const listaMesclada = lista1.mesclarOrdenado(lista2);

console.log("Lista Mesclada após mesclagem:");
console.log(JSON.stringify(listaMesclada, null, 2));
