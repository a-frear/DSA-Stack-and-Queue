class _Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data) {
        const node = new _Node(data)

        if (this.first === null) {
            this.first = node
        }
        if (this.last) {
            this.last.next = node;
        }
        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return
        }

        const node = this.first
        this.first = this.first.next

        if (node === this.last) {
            this.last = null
        }
        return node.value
    }
}

function main(){
    const starTrekQ = new Queue()
    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Spock')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')

    return starTrekQ
}

const starTrekQ = main()

console.log(starTrekQ)

function peek(queue) {
    if (!queue.first) return null;
    return queue.first.value;
}

function isEmpty(queue) {
return (queue.first === null);
}

function display(queue) {
    let currNode = queue.first;
    if (currNode === null) console.log('empty queue');
    while (currNode.next !== null) {
        console.log(currNode.value);
        currNode = currNode.next;
    }
    console.log(currNode.value);
}

console.log('Peek: ' + peek(starTrekQ))
console.log('Is it empty?: ' + isEmpty(starTrekQ))
display(starTrekQ)

/*
7. Create a queue class using Doubly linked List
Use the items listed in #6 and enqueue them to your queue.

Check to see who is first one on the Queue?
*/

/*
8. Queue implementation using a stack
There are many ways to implement a queue. 
You have learned using singly linked list, 
and doubly linked list. Keeping the concept of a queue in mind, 
implement a queue using 2 stacks and no other data structure. 
(You are not allowed to use a doubly linked list or array. 
Use your stack implementation 
with a linked list from above to solve this problem.)
*/

/*
9. Square dance pairing
As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line. If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. Maintain a queue of "spares" (men for whom you have no women yet, or vice versa), and pair them as appropriate.

F Jane

M Frank

M John

M Sherlock

F Madonna

M David

M Christopher

F Beyonce

Female dancer is Jane, and the male dancer is Frank
Female dancer is Madonna, and the male dancer is John
Female dancer is Beyonce, and the male dancer is Sherlock
There are 2 male dancers waiting to dance
*/

/*
10. The Ophidian Bank
At the Ophidian Bank, a single teller serves a long queue of people. 
New customers join the end of the queue, 
and the teller will serve a customer only if they have all of the 
appropriate paperwork. Write a representation of this queue; 
25% of the time (random), a customer's paperwork isn't quite right, 
and it's back to the end of the queue. Show what a few minutes of the bank's lobby 
would look like.
*/