class _node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor() {
        this.top = null
    }
    push(data) {
        /* If the stack is empty, then the node will be the
        top of the stack */
        if (this.top === null) {
            this.top = new _node(data, null)
            return this.top
        }
        /* If the stack already has something, 
        then create a new node,
        add data to the new node, and
        have the pointer point to the top */
        const node = new _node(data, this.top)
        this.top = node
    }
    pop(){
    /* In order to remove the top of the stack, you have to point
    the pointer to the next item and that next item becomes the
    top of the stack */
        const node = this.top
        this.top = node.next
        return node.data
    }
}

function main(){
    const starTrek = new Stack()
    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')

    return starTrek
}

const starTrek = main()

console.log(starTrek)

const peek = stack => {
    if(stack.top === null){return null}
    return stack.top.data
}

console.log('peek at top: ' + peek(starTrek))

const isEmpty = stack => {
    if (stack.top === null) {
        return true
    }
    return false
}

console.log('Stack empty?: ' + isEmpty(starTrek))

const display = (stack) => {
    if (!stack.top) {
        console.log('Empty stack')
        return;
    }
    let current = stack.top;
    while (current !== null) {
        console.log(current.data);
        current = current.next;
    }
    return;
}

display(starTrek)

// 3. Check for palindromes using a stack
// A palindrome is a word, phrase, or number that is spelled 
// the same forward and backward. For example, “dad” is a palindrome; 
// “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and 
// ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack 
// to determine whether or not a given string is a palindrome.

// Write an algorithm that uses a stack to determine whether a given input 
// is palindrome or not. Use the following template as a starting point.

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    const newStack = new Stack()
    let curr = ''
    //iterate over characters using for..of 
    for (let char of s) {
        newStack.push(char)
    }
    while (!isEmpty(newStack)) {
        curr += newStack.pop()
    }

    return curr === s

}
// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

/*
4. Matching parentheses in an expression
A stack can be used to ensure that an arithmetic expression has 
balanced parentheses. Write a function that takes an arithmetic expression 
as an argument and returns true or false based on matching parenthesis. 
As a bonus provide a meaningful error message to the user as to what's missing. 
For example, you are missing a ( or missing a ")".

For version 1, the parentheses you need to consider are ( and ). 
Finding a close parenthesis without an open parenthesis is an error 
(report the location of the close); reaching the end of the string while still "holding" an open parenthesis 
is also an error (report the location of the open).

Extension exercise: Recognize 3 pairs of brackets: (), [], and {}. 
These must be correctly nested; "([)]" is incorrect, 
and should report an error at the ), stating that you were expecting a 
] but found a ). If this is starting to look and sound very familiar, 
congratulations - you're beginning to write a simple language parser!

Extension extension exercise: 
Also recognize 2 types of quote character: 
"" and ''. Inside quotes, brackets aren't counted at all 
- in fact, nothing is counted until you reach the corresponding close quote.
*/

/*
5. Sort stack
Write a program to sort a stack such that the smallest items 
are on the top (in ascending order). You can use an additional stack, 
but you may not use any other data structure (such as an array, or linked list).
*/
