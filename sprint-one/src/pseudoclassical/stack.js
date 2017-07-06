var Stack = function() {
  this.storage = {};
  this.top = 0;
};


  Stack.prototype.push = function(value) {
    this.storage[this.top] = value;
    this.top++;
  }

  Stack.prototype.pop = function() {
    this.top--;
    return this.storage[this.top];
  }

  Stack.prototype.size = function() {
    return Math.max(0, this.top);
  }



