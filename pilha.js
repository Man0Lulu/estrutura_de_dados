//pilhas
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        // Adiciona um item
        this.items.push(element)
      
    }

    pop() {
        // Remove o último item da pilha
        return this.pop()
    }

    peek() {
        // Retorna o elemento no topo da pilha
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        // Verifica se a pilha está vazia
        return this.items.length === 0;
    }

    clear() {
        // Remove todos os elementos da pilha

       this.items = [];
    }
    print(){
        // imprime a pilha no console
        console.log(items.toString());
    }

    size() {
        // Retorna o tamanho da pilha
       return this.items.length;

    }
}

//criando (instancia) um objeto stack (pilha)
const stack = new Stack();

//verificando se a pilha está vazia
console.log(stack.isEmpty());
// adicionando elementos no topo da pilha 
stack.push(5);
stack.push(8);
// exibindo o elemento do topo da pilha
console.log(stack.peek()); // exibe 8
//vamos adiciconar outro elemento na pilha 
stach.push(11);
//exibindo o tamanho da pilha
console.log(stack.size()); // exibe 3
//verificando se a pilha está vazia
console.log(stack.isEmpty()); 
//por fim, vamos acrescentar outro elemento
stack.push(15);
// mostrando todos os elemento da pilha
stack.print();

stack.pop();
stack.pop();
stack.print();