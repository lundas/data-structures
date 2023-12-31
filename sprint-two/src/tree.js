var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};


// pseudocode:
// 1. define trigger boolean
// 2. check if value equals target, is yes return
// 3. make recursive call on each child
treeMethods.contains = function(target, isTarget) {
  isTarget = isTarget === undefined ? false : isTarget;
  if (this.value === target) {
    isTarget = true;
  }
  // let's use the native reduce instead of underbar reduce.
  if (isTarget || !this.children) {
    return isTarget;
  } else {
    // recursive call on each child
    isTarget = this.children.reduce( function(found, child) {
      return child.contains(target, found);
    }, isTarget);
  }
  return isTarget;
};


/*
 * Complexity: What is the time complexity of the above functions?
 *
 */
