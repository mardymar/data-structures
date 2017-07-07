var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
  this.newStorage = null;
  this.min = 8;
};

HashTable.prototype.insert = function(k, v) {
  this.size++;
  if (this.size >= this._limit * .75) {

    this.size = 0;
    console.log('in if ' + this.size);
    this.rehash(2);
  }



  // if (this._limit >= (this.min * 2) && this.size <= this._limit * .25) {
  //   this.size = 0;
  //   this.rehash(.5);
  // }

  // if (this.size <= this._limit * .25) {
  //   this.size = 0;
  //   this.rehash(.5);
  // }

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      }

      else {
        this._storage[index].push([k, v]);
        this._storage.set(index, [k, v]);
      }
    }
  }

  else {
    this._storage[index] = [];
    this._storage[index].push([k, v]);
  }
  // var getVal = this._storage.get(index);
  // while(getVal !== undefined && k !== ){
  //   this.prototype.rehashup;
  //   var index = getIndexBelowMaxForKey(k, this._limit);
  // }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  this.size--;

  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
      }
    }
  }
  if (this._limit >= (this.min * 2) && this.size <= this._limit * .25) {
    this.size = 0;
    console.log('in if ' + this.size);
    this.rehash(.5);
  }
};

HashTable.prototype.rehash = function(newLimit) {
  this._limit = this._limit * newLimit;
  this.newStorage = LimitedArray(this._limit);
  var index = this._storage;
  for (var key in index) {
    for (var i = 0; i < index.length; i++) {
    this.newStorage.push([this._storage[key][i][0],this._storage[key][i][1]])
    }
  }
  this._storage = JSON.parse(JSON.stringify(this.newStorage));
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


