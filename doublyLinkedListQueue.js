class _Node {
    constructor(val, next, prev) {
        this.value = val;
        this.next = next;
        this.prev= prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertFirst(item) {
        // This is the new element we're creating (will be used to create list)
        const newNode = new _Node(item, this.head, null);
        // If it's the first element in the list, it's both head and tail
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else{
            // We're inserting before the previous head
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    insertLast(item) {
        // This is when we add an item to the queue (to be used in enqueue)
        const newNode = new _Node(item,null, this.tail);
        if (!this.head) {
            this.insertFirst(item)
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    removeFirst() {
        if (!this.head) {
            return "Empty queue"
        }
        const newHead = this.head.next;
        if (!!newHead) {
            newHead.prev = null;
        }
        const oldHeadValue = this.head.value;
        this.head = newHead;
        return oldHeadValue
    }
    display() {
        let output = ''
        let currNode = this.head
        while (currNode !== null) {
            output += currNode.value
            if (currNode.next !== null) {
                output += ' -> '
            }
            currNode = currNode.next
        }
        console.log(output)
    }
}

class Queue {
    // l is DoublyLinkedList
    constructor(l) {
        this.storage = l
    }

    enqueue(item) {
        this.storage.insertLast(item)
    }

    dequeue() {
        return this.storage.removeFirst()
    }

    display() {
        this.storage.display()
    }
}


list = new DoublyLinkedList();
list.insertFirst(2);
list.insertFirst(1);
list.insertFirst(0);
list.insertLast(3);
list.insertLast(4);
list.display();

q = new Queue(list);
q.enqueue(7);
q.storage.display();

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
q.display();