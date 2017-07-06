var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var top = 0;
  var bottom = 0;


  // Implement the methods below

  someInstance.enqueue = function(value) {
    top++;
    storage[top] = value;

  };

  someInstance.dequeue = function() {
    bottom++;
    var result = storage[bottom];
    return result;
  };

  someInstance.size = function() {
    if(top < bottom) {
      return 0;
    }
    return top - bottom;
  };

  return someInstance;
};
