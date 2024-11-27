class Node {
    constructor(val) {
        this.element = val;
        this.next = null;
    }
}

// add an element at the end 
class LinkedList { 
    constructor() {
        this.head = null;
        this.size =  0;
    }
add(element) {
    let node  =  new Node(element);
    let current;
    
    if (this.head == null) {
        this.head  = node;
    }
    else {
        current = this.head;
        
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
    this.size++;
    
 }


printList() {
    let curr = this.head; 
     let str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    console.log(str);
}
 reverse =  () => { 
  let prev = null;
    let curr = this.head;
    let next;
    while (curr != null) {
         next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    } 
    this.head = prev;
} 
    recursiveReverse = (node  = this.head) => { 
        if (!node || !node.next) {
            this.head = node;
             return node;
        }
        const reversedList = this.recursiveReverse(node.next);
        node.next.next = node;
        node.next = null;
        return reversedList;
    }
}
function reverse(head) {
    let prev = new Node();
    let curr = head;
    let next ;
    while (curr != null) { 
        next = curr.next;
        curr.next = prev; 
        prev = curr; 
        curr  = next
    }
    return prev;
}
function  addTwoLists(num1 , num2) {
    let res = null; 
    let curr = null; 
    let carry = 0;

    num1 = reverse(num1.head);
    num2 = reverse(num2.head);


    while (num1 !== null || num2 !== null || carry !== 0 ) { 
         let sum = carry; 
        if (num1 !== null) { 
            sum += num1.element;
            num1 = num1.next;
        }
        if (num2 !== null) {
            sum += num2.element;
            num2 = num2.next;
        }
        let  newNode = new Node (sum % 10)
        carry = Math.floor(sum/10);
        if (res === null) {
            res =  newNode;
            curr = newNode;
        }else{
            curr.next = newNode;
            curr = newNode;
        }
    }
    return reverse(res );
}


const printList = (head) => { 
    let curr = head;
    let result = " ";
    while(curr) {
        result += curr.element + " ";
        curr = curr.next;
    }
    console.log(result);
}

function  addTwoListVer2(num1 , num2) {
    // tao 1 node gia
    let dummyHead = new Node(0);
    let p = num1.head, q = num2.head, curr = dummyHead;
    let carry = 0;
    while (p !== null || q !== null) {
        const x = p ? p.element : 0;
        const y = q ? q.element : 0;
        const sum = x + y + carry;

        carry = Math.floor(sum / 10);
        curr.next = new Node(sum % 10);
        curr = curr.next;

        if (p) p = p.next;
        if (q) q = q.next;
    }
    if (carry > 0) {
        curr.next = new Node(carry);

    }
    return dummyHead.next;
}



let l1 = new LinkedList();
l1.add(1);
l1.add(2);
l1.add(5);

l1.printList();

// l1.recursiveReverse();


let l2 = new LinkedList();
l2.add(3);
l2.add(4);
l2.add(5);
l2.printList();
//
// let num1 = new Node(1);
// num1.next = 2;
// num1.next.next = 3;
//
// let num2 = new Node(1);
// num2.next = 4;
// num2.next.next = 5;

let sum = addTwoListVer2(l1, l2);
printList(sum);