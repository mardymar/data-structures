var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  if(this.value === target) {
    return true;
  }

  var test = false;
  for(var i = 0; i < this.children.length; i++) {
    test = this.children[i].contains(target) || test;
  }

  return test;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
