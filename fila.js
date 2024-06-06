function Queue() {
    var items = [];

    this.enqueue = function(element) {
        items.push(element);
        // adiciona um item
    };
    
    this.dequeue = function() {
        return items.shift();
        // remove um item
    };
    
    this.front = function() {
        return items[0];
        // retorna o primeiro elemento da fila
    };
    
    this.isEmpty = function() {
        return items.length === 0;
        // verifica se a fila está vazia
    };
    
    this.size = function() {
        return items.length;
        // retorna o tamanho da fila
    };
    
    this.print = function() {
        console.log(items.toString());
        // imprime a fila no console
    };

    this.clear = function() {
        items = [];
        // limpa todos os itens da fila
    };
    
    this.toArray = function() {
        return items.slice();
        // retorna uma cópia do array de itens
    };
}

// Exemplo de uso da classe Queue
var queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print(); // Deve mostrar "1,2,3" no console

queue.dequeue();
queue.print(); // Deve mostrar "2,3" no console

console.log(queue.front()); // Deve mostrar "2" no console
console.log(queue.isEmpty()); // Deve mostrar "false" no console
console.log(queue.size()); // Deve mostrar "2" no console

queue.clear();
queue.print(); // Deve mostrar "" (vazio) no console
console.log(queue.isEmpty()); // Deve mostrar "true" no console
