class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;

  }
  prepend(key, value) {
    const newNode = new Node(key, value);
    this.size++;
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
  find(key) {
    const current = this.head;
    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
  }
  *entries() {
    const current = this.head;
    while (current) {
      yield [current.key, current.value]
      current = current.next;
    }
  }
}


class SecureHashTable {
  constructor() {
    this.bucketSizes = [53, 97, 199, 307, 509, 769, 1021, 1297, 1601, 2027, 2539, 3079, 3583, 4093, 4637, 5231, 5923, 6599, 7331, 8009, 8731, 9491];
    this.bucketSizeIndex = 0;
    this.size = this.bucketSizes[this.bucketSizeIndex];
    this.table = new Array(this.size);
    this.count = 0;
  }
  hash(key) {
    let hash = 5381;
    for (let char of key) {
      hash = hash * 33 ^ char.charCodeAt(0);
    }
    return Math.abs(hash) % this.size;
  }
  set(key, value) {
    if (this.count / this.size > 0.5) {
      this.resize(this.bucketSizeIndex++);
    }
    const index = this.hash(key);
    this.count++;
    if (!this.table[index]) {
      this.table[index] = new LinkedList();
      return;
    }
    const bucket = this.table[index];
    bucket.prepend(key, value);
  }
  getValue(key) {
    const index = this.hash(key);
    if (!this.table[index]) {
      console.log('No such key found')
    };
    const bucket = this.table[index];
    const value = bucket.find(key);
    return value;
  }
  resize(newSize) {
    this.size = newSize;
    const oldTable = this.table;
    this.table = new Array(newSize);
    for (let bucket of oldTable) {
      if (bucket) {
        for (let [key, value] of bucket.entries()) {
          this.set(key, value);
        }
      }
    }
  }

}