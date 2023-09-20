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

    isEmpty() {
        return this.items.length === 0;
    }
}

const P = new Pilha();
const P_par = new Pilha();
const P_impar = new Pilha();

function transferirParesEImpares(P, P_par, P_impar) {
    for (let i = 1; i <= 15; i++) {
        P.push(i);
    }

    while (!P.isEmpty()) {
        const numero = P.pop();
        if (numero % 2 === 0) {
            P_par.push(numero);
        } else {
            P_impar.push(numero);
        }
    }
}

transferirParesEImpares(P, P_par, P_impar);

console.log("P_par: ", P_par.items);
console.log("-----------------");
console.log("P_impar: ", P_impar.items);