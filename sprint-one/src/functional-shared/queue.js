var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.back = 0;

  _.extend(someInstance, queueMethods);

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  return someInstance;
};

var queueMethods = {

  enqueue: function(val) {
    this.storage[this.back] = val;
    this.back++;
  },

  dequeue: function() {
    var result = this.storage[this.front];
    this.front++;
    return result;
  },

  size: function() {
    return Math.max(0, this.back - this.front);
  }

};







