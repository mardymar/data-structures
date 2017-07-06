

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var n = GraphNode(node);
  this.nodes.push(n);

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(var i = 0; i < this.nodes.length; i++) {
    if(this.nodes[i].data === node) {
      return true;
    }
  }

  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var i = this.nodes.length - 1; i >= 0; i--) {
    if(this.nodes[i].data === node) {
       this.nodes.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromEdges = false;
  var toEdges = false;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].edges.indexOf(fromNode) !== -1) {
      fromEdges = true;
    }

    if (this.nodes[i].edges.indexOf(toNode) !== -1) {
      toEdges = true;
    }
  }

  return fromEdges && toEdges;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].data === fromNode) {
      this.nodes[i].edges.push(toNode);
    }

    if (this.nodes[i].data === toNode) {
      this.nodes[i].edges.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

    for(var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].data === fromNode) {
        var index = this.nodes[i].edges.indexOf(toNode);
        this.nodes[i].edges.splice(index, 1);
      }

      if (this.nodes[i].data === toNode) {
        var index = this.nodes[i].edges.indexOf(fromNode);
        this.nodes[i].edges.splice(index, 1);
      }
    }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for(var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].data);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var GraphNode = function(data){
  var node = {};

  node.edges = [];
  node.data = data;

  return node;
}
