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
  var currentNode = this.head;

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

//     if (value < currentNode.value) {
//       if (currentNode.left !== null) {
//       currentNode = currentNode.left;
//       } else {
//         return false;
//       }
//     if (value > currentNode.value) {
//       if (currentNode.right !== null) {
//       currentNode = currentNode.right;
//       } else {
//         return false;
//       }
//     }
//   }
// }
// return false;
// };


// BinaryTreeMethods.depthFirstLog = function(value) {
//   var currentNode = this.head;

//   if(currentNode.value === value) {
//     return true;
//   }

//  }


// //   var flag = true;

// //   while(flag) {
// //     if(currentNode.value > value ) {
// //       if(currentNode.left === null) {
// //         var n = new BSNode(value);
// //         currentNode.left = n;
// //         flag = false;
// //       } else {
// //         currentNode = currentNode.left;
// //       }
// //     }

// //     if(currentNode.value < value ) {
// //       if(currentNode.right === null) {
// //         var n = new BSNode(value);
// //         currentNode.right = n;
// //         flag = false;
// //       } else {
// //         currentNode = currentNode.right;
// //       }
// //     }
// //   }
// // }

BinaryTreeMethods.depthFirstLog = function(cb) {

}



var BSNode = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
