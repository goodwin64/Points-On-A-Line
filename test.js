const assert = require('assert');
const isPointsOnLine = require('./src/index.js');

const points1 = [[1,2], [7, 4], [22, 9]];
const points2 = [[1,2], [-3, -14], [22, 9]];
const points3 = [[1,1], [2, 1], [3, 1], [10000000, 1]];
const points4 = [[1,2], [-3, -14]];

it('three poistive points on a line', () => {
  assert.equal(isPointsOnLine(points1), true);
});

it('the second point is not on line', () => {
  assert.equal(isPointsOnLine(points2), false);
});

it('all points are on line', () => {
  assert.equal(isPointsOnLine(points3), false);
});

it('both of two points already lie on a line', () => {
  assert.equal(isPointsOnLine(points4), true);
});
