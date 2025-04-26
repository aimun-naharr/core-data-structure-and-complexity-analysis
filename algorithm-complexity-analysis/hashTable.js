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
  find(key) {
    if (!this.head) return;
    if (this.head.key === key) return this.head;
    let current = this.head.next;
    while (current) {
      if (current.key === key) return current;
      current = current.next;
    }
    return null;
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
    this.keys = new Set();
  }
  hash(key) {
    let hash = 5381;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 33) ^ key.charCodeAt(i); // O(1) - constant time complexity
    }
    return Math.abs(hash) % this.size;
  }
  //set
  // O(n) - linear time complexity
  // O(1) - constant space complexity
  // asymptotic notation: O(n) - linear time complexity
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
    this.keys.add(key)
  }
  //get
  // O(n) - linear time complexity
  // O(1) - constant space complexity
  // asymptotic notation: O(n) - linear time complexity
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    return bucket ? bucket.find(key) : null;
  }
  //getAllKeys
  // O(n) - linear time complexity
  // O(n) - linear space complexity
  // asymptotic notation: O(n) - linear time complexity
  getAllKeys() {
    return Array.from(this.keys);
  }
  // resize
  // O(n) - linear time complexity
  // O(n) - linear space complexity
  // asymptotic notation: O(n) - linear time complexity
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

class HashSet {
  constructor() {
    this.data = new HashTable()
  }
  add(value) {
    if (this.has(value)) return;
    this.data.set(value, true)
  }
  has(value) {
    return !!this.data.get(value)
  }
  find(value) {
    return this.data.get(value)
  }
  values() {
    return this.data.getAllKeys();
  }
}

// O(n) - linear time complexity
// O(n) - linear space complexity
// asymptotic notation: O(n) - linear time complexity
function commonElements(setA, setB) {
  const result = new HashSet();
  for (let elm of setA.values()) {
    if (setB.has(elm)) {
      result.add(elm)
    }
  }
  return result.values().length;
}

const setA = new HashSet();
const setB = new HashSet();
setA.add('John');
setB.add('John')
setB.add(30);
setA.add('New York');
setB.add('USA');
setA.add('NY');
setB.add('Blue');
console.log(commonElements(setA, setB));

// console.log('table', JSON.stringify(table.table, null, 2))