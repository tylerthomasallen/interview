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

const deleteNode = (node) => {
  if (node.next) {
    node.data = node.next.data;
    node.next = node.next.next;
  } else {
    node.data = null;
  }
}

const deleteDups = (rootNode) => {
  const vals = {}

  let currNode = rootNode;
  while (currNode != null) {
    const data = { currNode };
    if (vals[data]) {
      deleteNode(currNode)
    } else {
      vals[data] = true
    }
    currNode = currNode.next;
  }

  return rootNode;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(3);

node1.appendToTail(node2);
node2.appendToTail(node3);
node3.appendToTail(node4);

deleteDups(node1);

console.log(node1);