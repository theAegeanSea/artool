const { unique } = require('../index.js');
const deepEqual = require('deep-equal');

describe('#unique.js', function() {
  describe('#unique', function() {
    it('unique should return [1, 2, 5]', function() {
      deepEqual(unique([ 1, 2, 5, 5 ]), [ 1, 2, 5 ]);
    });
    it('unique should return [2, 7]', function() {
      deepEqual(unique([ 2, 7, 7, 7 ]), [ 2, 7 ]);
    });
    it('unique should return [{a: 1, b: 2}, {c: 1, v: 2}, {a: 3, b: 2}]', function() {
      deepEqual(unique(
        [{a: 1, b: 2}, {a: 1, v: 2}, {c: 1, v: 2}, {a: 1, c: 1}], 'a'
      ),
        [{a: 1, b: 2}, {c: 1, v: 2}, {a: 3, b: 2}]
      );
    });
    it('unique should return [{a: 1, b: 2}, {a: 1, v: 2}, {c: 1, v: 2}]', function() {
      deepEqual(unique(
        [{a: 1, b: 2}, {a: 1, v: 2}, {c: 1, v: 2}, {a: 1, c: 1}], 'c'
      ),
      [{a: 1, b: 2}, {a: 1, v: 2}, {c: 1, v: 2}]
      );
    });
  });
});
