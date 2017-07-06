var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.top = 0;
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);

  return someInstance;

};

var stackMethods = {
  push: function(val) {
    this.top += 1;
    this.storage[this.top] = val;
  },

  pop: function() {
    this.top -= 1;
    return this.storage[this.top + 1];
  },

  size: function() {
    return Math.max(0, this.top);
  }
};


