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
};

BinaryTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);

  if(this.left !== null) {
    this.depthFirstLogRecursion(cb, this.left);
  }
  if(this.right !== null) {
    this.depthFirstLogRecursion(cb, this.right);
  }
};

BinaryTreeMethods.depthFirstLogRecursion = function(cb, node) {
  cb(node.value);

  if(node.left !== null) {
    this.depthFirstLogRecursion(cb, node.left);
  }

  if(node.right !== null) {
    this.depthFirstLogRecursion(cb, node.right);
  }
};


BinaryTreeMethods.graphValLeft = function(node) {
  // var current = node;

  // while(current.left !== null) {
  //   current = current.left;
  // }

  // return current.value;


  if (node.left !== null) {
    return this.graphValLeft(node.left);
  }
  else {
    var smallest = node.value;
    console.log(smallest);
    return smallest;
  }
}

BinaryTreeMethods.graphValRight = function(node) {
  var current = node;

  while(current.right !== null) {
    current = current.right;
  }

  return current.value;


  // if (node.right !== null) {
  //   this.graphValRight(node.right);
  // }
  // else {
  //   var largest = node.value;
  //   console.log(largest);
  //   return largest;
  // }
}

BinaryTreeMethods.graphRange = function() {
  return this.graphValRight(this) - this.graphLeft(this);
}

var BSNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};
