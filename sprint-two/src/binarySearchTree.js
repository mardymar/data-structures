var BinarySearchTree = function(value) {
  var BinaryTree = {};

  BinaryTree.value = value;
  BinaryTree.left = null;
  BinaryTree.right = null;

  _.extend(BinaryTree, BinaryTreeMethods);

  return BinaryTree;
};

var BinaryTreeMethods = {};

BinaryTreeMethods.insert = function(value) {
  var currentNode;

  var alreadyChanged = false;
  if(this.value > value){
    if(this.left === null){
      var n = new BSNode(value);
      this.left = n;
      alreadyChanged = true;
    } else {
      var currentNode = this.left;
    }
  } else {
    if(this.right === null){
      var n = new BSNode(value);
      this.right = n;
      alreadyChanged = true;
    } else {
      var currentNode = this.right;
    }
  }

  var flag = true;


  while(flag && !alreadyChanged) {
    if(value < currentNode.value) {
      if(currentNode.left === null) {
        var n = new BSNode(value);
        currentNode.left = n;
        flag = false;
      } else {
        currentNode = currentNode.left;
      }
    }

    if(value > currentNode.value) {
      if(currentNode.right === null) {
        var n = new BSNode(value);
        currentNode.right = n;
        flag = false;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};


BinaryTreeMethods.contains = function(value) {
  if(this.value === value) {
    return true;
  }

  var currentNode = this.left;

  while (currentNode !== null) {
    if(currentNode.value === value) {
      return true;
    }

    if (value < currentNode.value) {
      currentNode = currentNode.left;
    }

    if (value > currentNode.value) {
      currentNode = currentNode.right;
    }
  }

  currentNode = this.right;

  while (currentNode !== null) {
    if(currentNode.value === value) {
      return true;
    }

    if (value < currentNode.value) {
      currentNode = currentNode.left;
    }

    if (value > currentNode.value) {
      currentNode = currentNode.right;
    }
  }

  return false;
}



BinaryTreeMethods.depthFirstLog = function(cb) {

}



var BSNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
