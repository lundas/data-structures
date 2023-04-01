

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[`${node}`] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this).includes(`${node}`);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // get rid of all connections that other nodes have to this node.
  this[`${node}`].forEach(function (elem, index, collection) {
    let removalIndex = this[elem].indexOf(`${node}`);
    if (removalIndex !== -1) {
      this[elem].splice(removalIndex, 1);
    }
  }, this);
  // get rid of this
  delete this[`${node}`];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // return this._edges.includes([, `${toNode}`]);
  return this[`${fromNode}`].includes(`${toNode}`);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this[`${toNode}`] === undefined || this[`${fromNode}`] === undefined) {
    throw new Error('Adding Edge to a node which does not exist');
  }
  if (!this[`${fromNode}`].includes(`${toNode}`)) {
    this[`${fromNode}`].push(`${toNode}`);
    this[`${toNode}`].push(`${fromNode}`);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this[`${fromNode}`].includes(`${toNode}`)) {
    let removalIndex = this[fromNode].indexOf(`${toNode}`);
    this[fromNode].splice(removalIndex, 1);
    removalIndex = this[toNode].indexOf(`${fromNode}`);
    this[toNode].splice(removalIndex, 1);
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this, function (value, key, list) {
    cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


