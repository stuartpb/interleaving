var assert = require('assert');
var interleaving = require('../interleaving.js');
describe('interleaving.center', function() {
  it('should give zip-like results for two identical-length arrays', function() {
    assert.deepEqual(
      interleaving.center(['a','b','c'], ['1','2','3']),
      ['a','1','b','2','c','3']);
  });
  it('should give zip-like results for three identical-length arrays', function() {
    assert.deepEqual(
      interleaving.center(['a','b','c'], ['1','2','3'], ['A','B','C']),
      ['a','1','A','b','2','B','c','3','C']);
  });
  it('should give centered results for different arrays', function() {
    assert.deepEqual(
      interleaving.center(
        ['a','b','c','d','e','f','g','h'],
        ['1','2','3','4'],
        ['A','B','C']),
      ['a','1','b','A','c','2','d','B','e','3','f','C','g','4','h']
    );
  });
  it('should put one item specified second in the middle', function() {
    assert.deepEqual(
      interleaving.center(['a','b','c','d','e','f','g','h'], ['1']),
      ['a','b','c','d','1','e','f','g','h']
    );
  });
  it('should put one item specified first in the middle', function() {
    assert.deepEqual(
      interleaving.center(['1'], ['a','b','c','d','e','f','g','h']),
      ['a','b','c','d','1','e','f','g','h']
    );
  });
});
