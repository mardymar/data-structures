

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // var getVal = this._storage.get(index);
  // while(getVal !== undefined && k !== ){
  //   this.prototype.rehashup;
  //   var index = getIndexBelowMaxForKey(k, this._limit);
  // }
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

HashTable.prototype.rehashup = function() {
  this._limit = this._limit * 2;
  var newStorage = LimitedArray(this._limit);

  this._storage.each(function(value){
    var index = getIndexBelowMaxForKey(value, this._limit);
    newStorage.set(index, value);
  });

  this._storage = JSON.parse(JSON.stringify(newStorage));
}

/*
 * Complexity: What is the time complexity of the above functions?
 */


