
/***@Insert at the beginning of a dynamic array.
 * asymptotic notation: O(n) - linear time complexity
 * space complexity: O(1) - constant space complexity
 * time complexity: O(n) - linear time complexity
 ***/
const insertElement = (arr, elm) => {
  for (let i = arr.length; i >= 0; i--) {
    arr[i] = arr[i - 1]
  }
  arr[0] = elm; // O(1) - inserting element at the beginning
  return arr; // O(n) - shifting elements to the right
}

class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  /**
   *
   * @param {any} data - data to be inserted at the end of the linked list
   * @returns {LinkedListNode} - new node with the given data
   * @description - This function inserts a new node at the end of the linked list.
   * asymptotic notation: O(1) - constant time complexity
   * space complexity: O(1) - constant space complexity
   * time complexity: O(1) - constant time complexity
   */
  insertAtEnd(data) {
    const newNode = new LinkedListNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode; // O(1) - inserting element at the end
  }
}
