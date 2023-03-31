

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // get bucket and assign to value
  let bucket = this._storage.get(index);

  if (!Array.isArray(bucket)) {
    this._storage.set(index, [[k, v]]);

  } else {
    // check whether we already have a tupl with this key.
    var tuplIndex = bucket.findIndex( (element) => element[0] === k );

    // if bucket includes a tuple with key - overwrite that tuple
    if (tuplIndex !== -1) {
      bucket[tuplIndex] = [k, v];

    // else if bucket does not include a tuple with key-  append that tuple
    } else if (tuplIndex === -1) {
      bucket.push( [k, v] );
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // get bucket at index
  let bucket = this._storage.get(index);

  // search for tuple that includes key within bucket
  var tuplIndex = bucket.findIndex( (element) => element[0] === k );

  // return that tuple
  return tuplIndex !== -1 ? bucket[tuplIndex][1] : undefined;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // get bucket at index
  let bucket = this._storage.get(index);

  // search tuple that includes key within bucket
  var tuplIndex = bucket.findIndex( (element) => element[0] === k );

  // splice out that tuple
  bucket.splice(tuplIndex, 1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

// limitedArray methods
// get
// set
// each

