const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

// const { assert } = require('chai');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

function removeKFromList( l, k ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

//  console.log(l);
  let res = l;

  if (l.value === k) { 
    if (l.next === null) return null;
    res = l.next;
  }

  let currPointer = res.next;
  let prevPointer = res;

  while (!(currPointer === null)) {
    if (currPointer.value === k) {
      let el = currPointer;
      prevPointer.next = currPointer.next;
      currPointer = prevPointer.next;
      el.next = null;
    } else {
      currPointer = currPointer.next;
      prevPointer = prevPointer.next;
    }
  }

  return res;

}

module.exports = {
  removeKFromList
};

//const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
//const initial = convertArrayToList([1, 2, 3, 3, 4, 5]);
//const initial = convertArrayToList([1, 2, 3]);
//removeKFromList( initial, 3 );
//console.log(removeKFromList( initial, 3 ));