var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
  newNode.parent.push(this);
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



// treeMethods.callBack = function(element, cb) {
//   //we're going to start with a tree element (we can just use the keyword 'this' to do so)
//   var currentNode = this;
//   for (var i = 0; i < currentNode.children.length; i++) {

//   }
//   console.log(currentNode);
//   if (currentNode) {
//   for (var i = 0; i < currentNode.children.length; i++) {
//       cb(currentNode[i]);
//       return treeMethods.callBack(currentNode.children[i], cb);
//   }
// }
//     //we're going to touch every element in that tree and apply our callback function
//       //we'll use recursion to do this and we'll stop when there are no more children left
// }



/*
 * Complexity: What is the time complexity of the above functions?
 */
