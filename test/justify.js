var assert = require('assert');
var interleaving = require('../interleaving.js');
describe('interleaving.justify', function() {
  it('should give zip-like results for two identical-length arrays', function() {
    assert.deepEqual(
      interleaving.justify(['a','b','c'], ['1','2','3']),
      ['a','1','b','2','c','3']);
  });
  it('should give zip-like results for three identical-length arrays', function() {
    assert.deepEqual(
      interleaving.justify(['a','b','c'], ['1','2','3'], ['X','Y','Z']),
      ['a','1','X','b','2','Y','c','3','Z']);
  });
  it('should give justified results for different arrays', function() {
    assert.deepEqual(
      interleaving.justify(
        ['a','b','c','d','e','f','g','h'],
        ['1','2','3','4'],
        ['X','Y','Z']),
      ['a','b','1','X','c','d','2','e','Y','f','3','g','h','4','Z']
    );
  });
  it('should put one item specified second at the end', function() {
    assert.deepEqual(
      interleaving.justify(['a','b','c','d','e','f','g','h'], ['1']),
      ['a','b','c','d','e','f','g','h','1']
    );
  });
});
