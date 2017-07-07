var BinarySearchTree = function(value) {
  var BinaryTree = {};

  BinaryTree.head = new BSNode(value);
  _.extend(BinaryTree, BinaryTreeMethods);

  return BinaryTree;
};

var BinaryTreeMethods = {};

BinaryTreeMethods.insert = function(value) {
  var currentNode = this.head;

  var flag = true;

  while(flag) {
    if(currentNode.value > value ) {
      if(currentNode.left === null) {
        var n = new BSNode(value);
        currentNode.left = n;
        flag = false;
      } else {
        currentNode = currentNode.left;
      }
    }
    if(currentNode.value < value ) {
      if(currentNode.right === null) {
        var n = new BSNode(value);
        currentNode.right = n;
        flag = false;
      } else {
        currentNode = currentNode.right;
      }
    }
};


BinaryTreeMethods.left = function(value) {

};

  var test = false;
  for(var i = 0; i < this.children.length; i++) {
    test = this.children[i].contains(target) || test;
  }

  return test;
};

var BSNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
