var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    }
    list.tail.next = node;
    list.tail = node;
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    let value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  list.contains = function(target, node) {
    if (list.head === null) {
      return false;
    }
    node = node === undefined ? node = list.head : node = node;
    let isTarget = false;
    if (target === node.value) {
      isTarget = true;
    } else if (node.next === null) {
      return isTarget;
    } else {
      isTarget = list.contains(target, node.next);
    }
    return isTarget;
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

// remove head and add to tail are constant
// contains is linear
// Note: without a tail property, add to tail would also be linear

