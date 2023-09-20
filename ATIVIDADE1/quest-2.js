class Pilha {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Underflow";
        return this.items.pop();
    }

    pop() {
        if (this.isEmpty()) return "Underflow";
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const p1 = new Pilha();
const p2 = new Pilha();

const p1caracteres = "ACEGIKMOQSUWY";
const p2caracteres = "BDFHJLNPRTVXZ";

for (let i = 0; i < p1caracteres.length; i++) {
    p1.push(p1caracteres[i]);
}

for (let i = 0; i < p2caracteres.length; i++) {
    p2.push(p2caracteres[i]);
}

function exibirAlfabeto(p1, p2) {
    const resultado = new Pilha();

    while (!p1.isEmpty() || !p2.isEmpty()) {
        
        if (!p2.isEmpty()) {
            resultado.push(p2.pop());
        }
        if (!p1.isEmpty()) {
            resultado.push(p1.pop());
        }
    }

    const alfabetoOrdenado = [];
    while (!resultado.isEmpty()) {
        alfabetoOrdenado.push(resultado.pop());
    }

    return alfabetoOrdenado.join(',');
}

const alfabeto = exibirAlfabeto(p1, p2);

console.log(alfabeto);