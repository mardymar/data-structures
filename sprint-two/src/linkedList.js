
var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var n = Node(value);
    if (list.tail) {
      list.tail.next = n;
      n.prev = list.tail;
      list.tail = n;
    } else {
      list.head = n;
      list.tail = n;
    }
  };

  list.addToHead = function (value) {
    var n = Node(value);
    if(list.head) {
      list.head.prev = n;
      n.next = list.head;
      list.head = n;
    } else {
      list.head = n;
      list.tail = n;
    }
  };

  list.removeTail = function(){
    var result = list.tail.value;

    list.tail = list.tail.prev;

    return result;
  };

  list.removeHead = function () {
    var result = list.head.value;

    list.head = list.head.next;

    return result;
  };

  list.contains = function (target) {
    var current = list.head;

    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }

    return false;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};
/*
/!*
 * Complexity: What is the time complexity of the above functions?
 *!/
*!/*/
