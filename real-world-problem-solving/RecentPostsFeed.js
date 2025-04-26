class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(data) {
    const newNode = new Node(data);
    this.size++;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  removeHead() {
    if (!this.head) {
      return;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    this.head = this.head.next;
    this.head.prev = null;
    this.size--;
  }
  allData() {
    const all = []
    let current = this.head;
    while (current) {
      all.push(current.data);
      current = current.next;
    }
    return all;
  }
}

class RecentPosts {
  constructor() {
    this.posts = new DoublyLinkedList();
    this.maxSize = 10;
  }
  addPost(post) {
    if (this.posts.size >= this.maxSize) {
      this.posts.removeHead(); //removing old one which complexity is 0(1)
    }
    this.posts.append(post); //appending new one which complexity is 0(1)
  }
  getAllPosts() {
    return this.posts.allData() //by chronological order;
  }
}
