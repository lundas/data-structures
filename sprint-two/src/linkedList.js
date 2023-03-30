var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  };

  list.removeHead = function() {
  };


  //pseudocode:
  // grab the value at head. test if head.value === target
  // make recursive call
  // base: if it has the value or next is null, then contains === false
  // recursive: call this function on node.next
  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

