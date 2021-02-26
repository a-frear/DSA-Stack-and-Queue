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
    // const node = this.top;
    // this.top = node.next;
    // return node.data;
    /* BUT WHAT IF THERE IS NO NEXT ITEM?*/
        const node = this.top
        if (node === null) {
            return node
        }
        if (node.next) { 
            this.top = node.next
        } else {
            this.top = null
        }
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

console.log('1. look at list: ' + starTrek)

const peek = stack => {
    if(stack.top === null){return null}
    return stack.top.data
}

console.log('2. peek at top: ' + peek(starTrek))

const isEmpty = stack => {
    if (stack.top === null) {
        return true
    }
    return false
}

console.log('3. Stack empty?: ' + isEmpty(starTrek))

const display = (stack) => {
    if (!stack.top) {
        console.log('Empty stack')
        return;
    }
    let current = stack.top;
    while (current !== null) {
        console.log('display ' + current.data);
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

// const parenthesesMatcher = function(s) {
//     let h = new Map()
//     h.set( ')', '(')
//     h.set( ']', '[')
//     h.set( '}', '{')
    
//     let stack = []
//     for(let ch of s){
//         if( '}])'.includes(ch)){
//             if(stack.pop() !== h.get(ch))
//                 return false
//             continue
//         }
//         stack.push(ch)
//     }
//     return true
// };

// console.log('parentheses problem: ' + parenthesesMatcher('{()}'))


var parenthesesMatcher = function(s) {
    s = s.replace(/[^{}()\[\]]/g, "");
    console.log(s)
    const map = {
        "}": "{",
        ")": "(",
        "]": "[",
        };
    const stack = [];
    //push all of the parentheses that aren't a property (opening) to new stack
    for(let ch of s){
        // Check for opening parenthesis. map[ch] is undefined for closing parenthesis so push opening parenthesis to stack.
        if(!map[ch]){
            stack.push(ch);
        }
		// For occurance of closing parenthesis, check if its equal to similar opening parenthesis. 
        else if (map[ch] !== stack.pop()){
            return false;
        }
    }
    return true
};

console.log('Parentheses problem: ' + parenthesesMatcher('{[asd](?)asdf[+_]()f}'))



/*
5. Sort stack
Write a program to sort a stack such that the smallest items 
are on the top (in ascending order). You can use an additional stack, 
but you may not use any other data structure (such as an array, or linked list).
*/

    /*
    Take old stack
    temp becomes pop top of old stack
    if temp is greater than new top of old stack, push temp to new stack, new top becomes temp
    if not, push top of old stack to new stack
    When old stack is empty, push temp to old stack and then push all of new stack back to old stack
    */
   const sortStack = (stack) => {
    //create a temporary stack
    let tempStack = new Stack();
     
     //loop while stack is not empty
     while(!isEmpty(stack)){ 
       
       // pop out the first element 
       let tmp = stack.pop(); 
            
       // while temporary stack is not empty and 
       // top of stack is less than temp 
       while(!isEmpty(tempStack) && peek(tempStack) < tmp){ 
          // pop from temporary stack and  
          // push it to the input stack 
          // are you smaller than me? go back. go back. okay, i can go now.
          stack.push(tempStack.pop()); 
       }          
     // push temp in tempory stack 
     tempStack.push(tmp); 
    } 
    
    return tempStack; 
  }

  function num() {
    const numStack = new Stack()
    numStack.push(5)
    numStack.push(21)
    numStack.push(1)
    numStack.push(4)
    numStack.push(2)
    numStack.push(11)

    return numStack
}

const numStack = num()

let sorted = sortStack(numStack);
while(!isEmpty(sorted)){
  console.log(sorted.pop());
}
