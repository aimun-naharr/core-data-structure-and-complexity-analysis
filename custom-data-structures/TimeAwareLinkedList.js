class TimeAwareLinkedListNode {
  constructor(data) {
    this.data = data;
    this.timeStamp = Date.now();
    this.next = null;
  }
}
class TimeAwareLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    let newNode = new TimeAwareLinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  //retrieve nodes inserted within last n seconds.
  getNode(n) {
    const now = Date.now();
    let current = this.head;
    const result = [];
    const timeLimitForRecentNodes = now - (n * 1000);
    while (current) {
      const nodeTime = current.timeStamp;
      if (nodeTime >= timeLimitForRecentNodes) {
        result.push(current.data);
      }
      current = current.next;
    }

    return result;
  }
}

const list = new TimeAwareLinkedList();

list.append('A');

setTimeout(() => {
  list.append('B');

  setTimeout(() => {
    list.append('C');

    setTimeout(() => {
      const recent = list.getNode(5);
      console.log('Recent nodes', recent);
    }, 2000);

  }, 2000);

}, 2000);


//Real world example
// this TimeAwareLinkedList can be used to store random balls in a game
// and retrieve the balls which are inserted in the last n seconds.