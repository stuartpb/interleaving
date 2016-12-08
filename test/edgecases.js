var assert = require('assert');
var interleaving = require('../interleaving.js');

describe('edge cases:', function() {
  describe('interleaving.justify', function () {
    it('should return an empty array for no list', function() {
      assert.deepEqual(interleaving.justify(), []);
    });
    it('should return an empty array for one empty list', function() {
      assert.deepEqual(interleaving.justify([]), []);
    });
    it('should return an empty array for two empty lists', function() {
      assert.deepEqual(interleaving.justify([], []), []);
    });
    it('should return one array unmangled', function() {
      assert.deepEqual(interleaving.justify(['a','1','b','2','c','3']), ['a','1','b','2','c','3']);
    });
    it('should return one array unmangled with empty array second', function() {
      assert.deepEqual(interleaving.justify(['a','1','b','2','c','3'], []), ['a','1','b','2','c','3']);
    });
    it('should return one array unmangled with empty array first', function() {
      assert.deepEqual(interleaving.justify([], ['a','1','b','2','c','3']), ['a','1','b','2','c','3']);
    });
  });
});
