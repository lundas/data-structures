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
var render = function(n, max) {
  // n = number of nodes, max = maximum value for each node
  var initialVal = Math.floor(Math.random() * max);
  var obj = {
    'tree': BinarySearchTree(initialVal),
    'arr': [initialVal]//random
  };

  for (var i = 0; i < n; i++) {
    var randomVal = Math.floor(Math.random() * max);
    obj.tree.insert(randomVal);
    obj.arr.push(randomVal);
  }

  return obj;
};

////// tree and array generation
// function ( n, max){ // n has to be smaller than max. n is the number we generate.
// for (let i =0 ; i < n; i++)
//  floor random * max
// tree.insert random
// array.push random
// }


////// tree and array performance comparison
// function(tree,array) { }
// generate a random number
// tree.contains (random number)
// array.includes(random number)

/// find closes value to tree
  // if target >= tree.value
  // then compare target with tree.value and tree.right
  // if tree.right is closer-
  // return recursively call on tree.right
  // otherwise same on the left

  // return if value = target- that's always the closest;
  // if the parent is closer than the child, that's the closest.
  // or if there is no child.


var closestArr = function(arr, int) {
  let closest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let currentDif = arr[i] > int ? arr[i] - int : int - arr[i];
    let closestDif = closest > int ? closest - int : int - closest;
    // Math.abs()
    closest = currentDif > closestDif ? closest : arr[i];
  }
  return closest;
};

var closestTree = function(tree, int) {
  // store and pass our closest value so far
  if (int >= tree.value) {
    if (tree.right) { // is this a parent or child in the direction.
      let subtreeClosest = closestTree(tree.right, int);
      return Math.abs(tree.value - int) > Math.abs(subtreeClosest - int) ? subtreeClosest : tree.value;
    } else { // it's just a child.
      return tree.value;
    }
  } else if (int < tree.value) {
    // if int < value - recurse against left
    if (tree.left) {
      let subtreeClosest = closestTree(tree.left, int);
      return Math.abs(tree.value - int) > Math.abs(subtreeClosest - int) ? subtreeClosest : tree.value;
    } else {
      return tree.value;
    }
  }
  // if int = value, closest equals value and return
};

var compareSpeed = function(rendered, max) {
  var randomVal = Math.floor(Math.random() * max);
  closestTree(rendered.tree, randomVal);
  closestArr(rendered.arr, randomVal);
};


/// closestTree rethink
// if target > this.right) or target<this.left
// recurse (this.right) or this.left
// if target >value but < right -
// store closest
// return closer one between closest and recurse of right.