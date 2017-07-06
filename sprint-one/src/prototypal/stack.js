var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.top = 0;

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.top] = value;
    this.top++;
  },

  pop: function() {
    this.top--;
    return this.storage[this.top];
  },

  size: function() {
    return Math.max(0, this.top);
  }
};


