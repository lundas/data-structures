var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var maxKey = 0;
  for (var key in this.storage) {
    if (key > maxKey) {
      maxKey = key;
    }
  }
  this.storage[maxKey + 1] = value;
};

Stack.prototype.pop = function () {
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

Stack.prototype.size = function() {
  var objSize = 0;
  for (var key in this.storage) {
    objSize++;
  }
  return objSize;
};

