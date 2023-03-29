// inputs: none
// output: stack object
// constraints: follow last in first out principle
// edge cases:

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  someInstance.storage = storage;

  // Implement the methods below
  someInstance.push = function(value) {
    var lastKey = 0;
    for (key in someInstance.storage) {
      if (key > lastKey) {
        lastKey = key;
      }
    }
    someInstance.storage[lastKey + 1] = value;
  };

  someInstance.pop = function() {
    var maxKey = 0;
    for (key in someInstance.storage) {
      if (key > maxKey) {
        maxKey = key;
      }
    }
    var popValue = someInstance.storage[maxKey];
    delete someInstance.storage[maxKey];
    return popValue;
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
