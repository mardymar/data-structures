var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.size = 0;
  this.newStorage = null;
};

HashTable.prototype.insert = function(k, v) {
  this.size++;
  if (this.size >= this._limit * .75) {

    this.size = 0;
    console.log('in if ' + this.size);
    this.rehash(2);
  }

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
};

HashTable.prototype.rehash = function(newLimit) {
  console.log("rehash .. " + JSON.stringify(this._storage ));
  //var ht = new HashTable();
  //ht._limit = ht._limit * newLimit;
  this._limit = this._limit * newLimit;
  this.newStorage = LimitedArray(this._limit);

  console.log("hit1");
  this._storage.each(function(bucket, index){
    console.log("hit2 ... " + bucket + ' ... index ... ' + index);
    if(bucket !== undefined){
      console.log("bucket if ... " + bucket);
      this.newStorage.insert(bucket[0], bucket[1]);
    }
  });

  console.log("hit3");
  console.log("newStorage  .. " + JSON.stringify( newStorage ));

  this._storage = JSON.parse(JSON.stringify(this.newStorage));
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


