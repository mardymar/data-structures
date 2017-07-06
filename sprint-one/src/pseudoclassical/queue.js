var Queue = function() {
  this.storage = {};
  this.back = 0;
  this.front = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.back++;
}

Queue.prototype.dequeue = function() {
  var result = this.storage[this.front];
  this.front++;
  return result;
}

Queue.prototype.size = function() {
  return Math.max(0, this.back - this.front);
}
