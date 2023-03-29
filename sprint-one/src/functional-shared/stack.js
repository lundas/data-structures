var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  var storage = {};
  someInstance.storage = storage;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var maxKey = 0;
  for (var key in this.storage) {
    if (key > maxKey) {
      maxKey = key;
    }
  }
  this.storage[maxKey + 1] = value;
};

stackMethods.pop = function() {
  var maxKey = 0;
  for (var key in this.storage) {
    if (key > maxKey) {
      maxKey = key;
    }
  }
  var popVal = this.storage[maxKey];
  delete this.storage[maxKey];
  return popVal;

};

stackMethods.size = function() {
  var objSize = 0;
  for (var key in this.storage) {
    objSize++;
  }
  return objSize;
};


