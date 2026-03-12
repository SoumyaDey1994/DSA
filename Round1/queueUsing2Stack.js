/**
 * Create a queue using 2 stacks
 */

class Stack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        this.stack.push(data);
    }

    pop() {
        const element = this.stack.pop();
        return element;
    }

    size() {
        return this.stack.length;
    }

    print() {
        const size = this.size();
        let result = this.stack[0];
        for(let i=1; i<size; i++) {
            result += '-->' + this.stack[i];
        }
        return result;
    }
}

class Queue {
    constructor(stack1, stack2) {
        this.stack1 = stack1;
        this.stack2 = stack2;
    }

    enQueue(data) {
        this.stack1.push(data);
        return this;
    }

    deQueue() {
        let size = this.stack1.size();
        while(size > 0) {
            this.stack2.push(this.stack1.pop());
            size--;
        }
        const element = this.stack2.pop();

        size = this.stack2.size();
        while(size > 0) {
            this.stack1.push(this.stack2.pop());
            size--;
        }
        return element;
    }

    size() {
        return this.stack1.size();
    }

    printElements() {
        console.log(this.stack1.print());
    }
}

const s1 = new Stack();
const s2 = new Stack();

const queue = new Queue(s1, s2);
queue.enQueue(1).enQueue(2).enQueue(3);
queue.printElements();
console.log(`Length of queue: ${queue.size()}`);

let element = queue.deQueue();
console.log(`Removed element from queue: ${element}`);
queue.printElements();

queue.enQueue(4).enQueue(5);
console.log(`Length of queue: ${queue.size()}`);
queue.printElements();

element = queue.deQueue();
console.log(`Removed element from queue: ${element}`);
element = queue.deQueue();
console.log(`Removed element from queue: ${element}`);
queue.printElements();
