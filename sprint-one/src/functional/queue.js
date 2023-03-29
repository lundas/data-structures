var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var maxKey = 0;
    for (var key in someInstance.storage) {
      if (key > maxKey) {
        maxKey = key;
      }
    }
    someInstance.storage[maxKey + 1] = value;
  };

  someInstance.dequeue = function() {
    var minKey = Infinity;
    for (var key in someInstance.storage) {
      if (key < minKey) {
        minKey = key;
      }
    }
    var dequeueVal = someInstance.storage[minKey];
    delete someInstance.storage[minKey];
    return dequeueVal;
  };

  someInstance.size = function() {
    var objSize = 0;
    for (var key in someInstance.storage) {
      objSize++;
    }
    return objSize;
  };

  return someInstance;
};
