class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(node, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node) {

      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }

    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  } 
}