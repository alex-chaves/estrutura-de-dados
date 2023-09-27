// Definição do nó da lista
class No {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  
// Definição da lista ordenada
class listaOrdenada {
    constructor() {
      this.head = null;
}
  
// Verificar se um número pertence à lista
contem(value) {
    let current = this.head;
    while (current !== null) {
    if (current.value === value) {
        return true;
    }
    current = current.next;
    }
    return false;
}
  
    // Inserir um novo elemento na lista mantendo a ordem
    insert(value) {
      const newNo = new No(value);
      if (!this.head || value < this.head.value) {
        newNo.next = this.head;
        this.head = newNo;
      } else {
        let current = this.head;
        while (current.next !== null && current.next.value < value) {
          current = current.next;
        }
        newNo.next = current.next;
        current.next = newNo;
      }
    }
  
// Remover um elemento da lista
remove(value) {
    if (!this.head) return;
    if (this.head.value === value) {
        this.head = this.head.next;
        return;
    }

    let current = this.head;
    while (current.next !== null && current.next.value !== value) {
        current = current.next;
    }
    if (current.next !== null) {
        current.next = current.next.next;
    }
}
  
// Imprimir os valores da lista
print() {
    let current = this.head;
    const result = [];
    while (current !== null) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(' -> '));
}
  
// Copiar a lista para uma nova lista
copy() {
    const newList = new listaOrdenada();
    let current = this.head;
    while (current !== null) {
        newList.insert(current.value);
        current = current.next;
    }
    return newList;
}
  
// Concatenar a lista atual com outra lista
concatenate(otherList) {
    const newList = this.copy();
    let current = otherList.head;
    while (current !== null) {
        newList.insert(current.value);
        current = current.next;
    }
    return newList;
}
  
// Intercalar duas listas ordenadas
mergeWith(otherList) {
    const newList = new listaOrdenada();
    let current1 = this.head;
    let current2 = otherList.head;
    while (current1 !== null && current2 !== null) {
        if (current1.value < current2.value) {
            newList.insert(current1.value);
            current1 = current1.next;
        } else {
            newList.insert(current2.value);
            current2 = current2.next;
        }
    }
    while (current1 !== null) {
        newList.insert(current1.value);
        current1 = current1.next;
    }
    while (current2 !== null) {
        newList.insert(current2.value);
        current2 = current2.next;
    }
      return newList;
    }
}
  
// Exemplo de uso:
const myList = new listaOrdenada();
myList.insert(10);
myList.insert(5);
myList.insert(15);
myList.insert(2);
myList.print();
  
console.log("Contém 5:", myList.contem(5)); // true
console.log("Contém 12:", myList.contem(12)); // false

myList.remove(5);
myList.print();

const myListCopy = myList.copy();
myListCopy.print();

const anotherList = new listaOrdenada();
anotherList.insert(8);
anotherList.insert(12);

const concatenatedList = myList.concatenate(anotherList);
concatenatedList.print();

const mergedList = myList.mergeWith(anotherList);
mergedList.print();
  