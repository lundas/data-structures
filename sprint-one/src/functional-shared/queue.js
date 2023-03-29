var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  var storage = {};
  someInstance.storage = storage;
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  var maxKey = 0;
  for (var key in this.storage) {
    if (key > maxKey) {
      maxKey = key;
    }
  }
  this.storage[maxKey + 1] = value;
};

queueMethods.dequeue = function() {
  var minKey = Infinity;
  for (var key in this.storage) {
    if (key < minKey) {
      minKey = key;
    }
  }
  var dequeueVal = this.storage[minKey];
  delete this.storage[minKey];
  return dequeueVal;
};

queueMethods.size = function() {
  var objSize = 0;
  for (key in this.storage) {
    objSize++;
  }
  return objSize;
};


