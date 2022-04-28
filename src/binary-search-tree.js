const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {
  constructor () {
    this.tree = null;
  }

  root() { //root — return root node of the tree
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.tree;
  }

  add( data ) { //add(data) — add node with data to the tree
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    let curNode = this.tree;
    let newNode = new Node(data);

    if (!curNode) {
      this.tree = newNode;

    } else {

      while (curNode) {
        if (data > curNode.data) {
          if (curNode.right) {
            curNode = curNode.right;

          } else {

            curNode.right = newNode;
            break;
          }
        } else {
          if (curNode.left) {
            curNode = curNode.left;

          } else {

            curNode.left = newNode;
            break;
          }
        }
      }
    };
  }

  has( data ) { //has(data) — returns true if node with the data exists in the tree and false otherwise
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return !!this.find(data);  // not(this.find(data) === null)
  }

  find( data ) { //find(data) — returns node with the data if node with the data exists in the tree and null otherwise
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let curNode = this.tree;

    if (!curNode) {
      return null;

    } else {

      while (curNode) {
        if (data > curNode.data) {

          curNode = curNode.right;

        } else if (data < curNode.data) {

          curNode = curNode.left;

        } else return curNode; //data = curNode.data 
      }
    };
    return null;
  }

  remove( data, curNode = this.tree ) { //remove(data) — removes node with the data from the tree if node with the data exists
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    //let curNode = this.tree;

    if (!curNode) return null;

    if (data > curNode.data) {
      curNode.right = this.remove(data, curNode.right);

    } else if (data < curNode.data) {
      curNode.left = this.remove(data, curNode.left);

    } else { //del

      if ((curNode.left) && (curNode.right)) { // both

        let min = this.min(curNode.right);
        curNode.data = min;
        curNode.right = this.remove(min, curNode.right);
        
      } else {
        if (curNode.left) { // only left child
          curNode = curNode.left

        } else if (curNode.right) { // only right child
          curNode = curNode.right

        } else { // no child
          curNode = null;
        }
      }
    }
    return curNode;
  }

  min(curNode = this.tree) { //min — returns minimal value stored in the tree (or null if tree has no nodes)
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    //let curNode = this.tree;

    if (!curNode) {
      return null;

    } else {

      while (curNode) {
        if (curNode.left) {
          curNode = curNode.left;

        } else {
          return curNode.data;
        }
      }
    };
  }

  max(curNode = this.tree) { //max — returns maximal value stored in the tree (or null if tree has no nodes)
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    //let curNode = this.tree;

    if (!curNode) {
      return null;

    } else {

      while (curNode) {
        if (curNode.right) {
          curNode = curNode.right;

        } else {
          return curNode.data;
        }
      }
    };
  }
}

module.exports = {
  BinarySearchTree
};

// const tree = new BinarySearchTree();
// tree.add(4);
// tree.add(7);
// tree.add(1);
// tree.add(8);
// tree.add(2);
// tree.add(6);
// console.log(tree);
// tree.remove(4);
// console.log(tree);

// console.log(tree.max());
// console.log(tree.min());
// console.log(tree.min(tree.tree.right));
// console.log(tree.has(1));
// console.log(tree.find(1));
