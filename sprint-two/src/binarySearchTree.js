// Binary Search Tree
// Properties:
// value: value at nodoe
// children: object containing left and right properties


var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.value = value;
  return newTree;
};

BinarySearchTree.prototype.insert = function(value) {
  var isGreater = value > this.value;
  if (this.value === value) {
    // throw new Error('Value already in tree');
    throw new Error('Value already in tree');
  }

  if (!this.right && isGreater) {
    this.right = BinarySearchTree(value);
  } else if (!this.left && !isGreater) {
    this.left = BinarySearchTree(value);
  } else if (isGreater && this.right) {
    this.right.insert(value);
  } else if (!isGreater && this.left) {
    this.left.insert(value);
  }
};

BinarySearchTree.prototype.contains = function(target) {
  var isGreater = target > this.value;

  if (this.value === target) {
    return true;
  } else if (!this.right && isGreater) {
    return false;
  } else if (!this.left) {
    return false;
  } else if (isGreater) {
    return this.right.contains(target);
  } else {
    return this.left.contains(target);
  }

};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
