

// Instantiate a new graph
var Graph = function() {
  this._edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[`${node}`] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this).includes(`${node}`);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[`${node}`];
  // get rid of this node on edges
  let newEdges = [];
  for (var i = 0; i < this._edges.length; i++) {
    if (!this._edges[i].includes(`${node}`)) {
      newEdges.push(this.edges[i]);
    }
  }
  this._edges = newEdges;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // return this._edges.includes([, `${toNode}`]);
  return _.some(this._edges, function(element) {
    return (element.includes(`${fromNode}`) && element.includes(`${toNode}`));
  });
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this._edges.push([`${fromNode}`, `${toNode}`]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  let newEdges = [];
  for (let i = 0; i < this._edges.length; i++) {
    if (this._edges[i].includes(`${fromNode}`) && this._edges[i].includes(`${toNode}`)) {
    } else {
      newEdges.push(this.edges[i]);
    }
  }
  this._edges = newEdges;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this, function (value, key, list) {
    if (this.key === '_edges') {
    } else {
      cb(value);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


