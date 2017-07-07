var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i][1] = v;
      }

      else {
        this._storage[index].push([k, v]);
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
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.splice(i, 1);
      }
    }
  }
};

// HashTable.prototype.rehashup = function() {
//   this._limit = this._limit * 2;
//   var newStorage = LimitedArray(this._limit);

//   this._storage.each(function(value){
//     var index = getIndexBelowMaxForKey(value, this._limit);
//     newStorage.set(index, value);
//   });

//   this._storage = JSON.parse(JSON.stringify(newStorage));
// }

/*
 * Complexity: What is the time complexity of the above functions?
 */


