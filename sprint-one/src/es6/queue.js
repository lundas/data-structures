class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var maxKey = 0;
    for (var key in this.storage) {
      if (key > maxKey) {
        maxKey = key;
      }
    }
    this.storage[maxKey + 1] = value;
  }

  dequeue() {
    var minKey = Infinity;
    for (var key in this.storage) {
      if (key < minKey) {
        minKey = key;
      }
    }
    var dequeueVal = this.storage[minKey];
    delete this.storage[minKey];
    return dequeueVal;
  }

  size() {
    var objSize = 0;
    for (var key in this.storage) {
      objSize++;
    }
    return objSize;
  }

}
