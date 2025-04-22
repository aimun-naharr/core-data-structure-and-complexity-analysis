class LinkedListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  prepend(key, value) {
    const newNode = new LinkedListNode(key, value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;

  }
  *entries() {
    let current = this.head;
    while (current) {
      yield [current.key, current.value]
      current = current.next
    }
  }
}


class HashTable {
  constructor(size = 53) {
    this.size = size;
    this.table = new Array(size);
    this.count = 0;
  }
  hash(key) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 33) ^ key.charCodeAt(i); // O(1) - constant time complexity
    }
    return Math.abs(hash) % this.size;
  }
  set(key, value) {
    if (this.count / this.size > 0.5) {
      this.resize(this.size * 2)
    }
    const index = this.hash(key);
    this.count++;
    if (!this.table[index]) {
      this.table[index] = new LinkedList();
    }
    const bucket = this.table[index];
    bucket.prepend(key, value)
  }
  resize(size) {
    const oldTable = this.table;
    this.table = new Array(size)
    this.size = size;
    for (let bucket of oldTable) {
      if (bucket) {
        for (const [key, value] of bucket.entries()) {
          this.set(key, value)
        }
      }
    }
  }
}

const table = new HashTable(2);
table.set('name', 'John');
table.set('age', 30);
table.set('city', 'New York');
table.set('country', 'USA');
table.set('state', 'NY');
table.set('color', 'Blue');

console.log('table', JSON.stringify(table.table, null, 2))