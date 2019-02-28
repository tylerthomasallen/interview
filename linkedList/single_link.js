/* Creating a singly linked list */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  appendToTail(node) {
    this.next = node;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.appendToTail(node2);
node2.appendToTail(node3);

console.log(node1);