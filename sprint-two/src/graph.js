// Instantiate a new graph
var Graph = function () {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (data) {
  this.nodes[JSON.stringify(data)] = [];
};

Graph.prototype.checkIfConnected = function () {
  var result = [];
  for (var key in this.nodes) {
    result = result.concat(this.nodes[key].edges);
  }
  return result > 0;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  return this.nodes[JSON.stringify(node)] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  var str = JSON.stringify(node);
  if (this.nodes[str] !== undefined) {
    delete this.nodes[str];
  }

  for (var key in this.nodes) {
    var index = this.nodes[key].indexOf(node);
    if(index !== -1){
      this.nodes[key].splice(index, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  var fromEdges = false;
  var toEdges = false;

  if(this.nodes.hasOwnProperty(JSON.stringify(fromNode))) {
    fromEdges = this.nodes[JSON.stringify(fromNode)].indexOf(toNode) !== -1;
  }
  if(this.nodes.hasOwnProperty(JSON.stringify(toNode))) {
    toEdges = this.nodes[JSON.stringify(toNode)].indexOf(fromNode) !== -1;
  }

  return fromEdges && toEdges;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.nodes[JSON.stringify(fromNode)].push(toNode);
  this.nodes[JSON.stringify(toNode)].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {

  var indexFrom = this.nodes[JSON.stringify(fromNode)].indexOf(toNode);
  if(indexFrom !== -1) {
    this.nodes[JSON.stringify(fromNode)].splice(indexFrom, 1);
  }

  var indexTo = this.nodes[JSON.stringify(toNode)].indexOf(fromNode);
  if(indexTo !== -1) {
    this.nodes[JSON.stringify(toNode)].splice(indexTo, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {

  var arr = Object.keys(this.nodes);

  for (var i = 0; i < arr.length; i++) {
    cb(JSON.parse(arr[i]));
  }
};