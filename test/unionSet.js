const { unionSet } = require('../index.js');
const deepEqual = require('deep-equal');

describe('#unionSet.js', function() {
  describe('#unionSet', function() {
    it('unionSet should return [2, 3, 4]', function() {
      deepEqual(unionSet([ 1, 2, 5, 5 ], [ 1, 3, 4 ]), [ 2, 3, 4 ]);
    });
    it('unionSet should return [{c: 1, v: 2}, {d: 1, x: 2}]', function() {
      deepEqual(unionSet(
        [{a: 1, b: 2}, {a: 1, v: 2}, {c: 1, v: 2}],
        [{a: 1, d: 6}, {d: 1, x: 2}],
        'a'
      ),
        [{c: 1, v: 2}, {d: 1, x: 2}]
      );
    });
    it('unionSet should return [{a: 1, b: 2}, {a: 1, d: 6}, {d: 1, x: 2}]', function() {
      deepEqual(unionSet(
        [{a: 1, b: 2}, {a: 1, v: 2}, {c: 1, v: 2}],
        [{a: 1, d: 6}, {d: 1, x: 2}],
        'v'
      ),
        [{a: 1, b: 2}, {a: 1, d: 6}, {d: 1, x: 2}]
      );
    });
  });
});
