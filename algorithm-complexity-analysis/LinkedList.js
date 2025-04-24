
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
  /**
   *
  * @description - This function deletes a node with the given value from the linked list.
   * asymptotic notation: O(n) - linear time complexity
   */
  deleteByValue(value) {
    if (!this.head) return; // O(1) time complexity;
    if (this.head.data === value) {
      this.head = this.head.next; //O(1) time complexity;
      return;
    }
    let prev = this.head;
    let current = prev.next
    while (current && current.data !== value) {
      // O(n) time complexity;
      prev = current;
      current = current.next;
    }
    prev.next = current.next;
  }
}

function arrayToLinkedList(arr) {
  if (arr.length < 1) return;
  const list = new LinkedList();
  for (let elm of arr) {
    list.insertAtEnd(elm)
  }
  return list;
}

const arr = [1, 2, 3, 4, 5];
const list = arrayToLinkedList(arr)
console.log('list', JSON.stringify(list.head, null, 2))