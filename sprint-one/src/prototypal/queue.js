var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.back = 0;
  obj.front = 0;
  return obj;
};

var queueMethods = {
  enqueue : function(value) {
    this.storage[this.back] = value;
    this.back++;
  },

  dequeue : function() {
    var result = this.storage[this.front];
    this.front++;
    return result;
  },

  size : function() {
    return Math.max(0, this.back - this.front);
  }
};

