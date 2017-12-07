module.exports = function isPointsOnLine(points) {
    if (points.length === 2) {
        return true;
    }

    const point1 = points[0];
    const point2 = points[1];

    const lineFactor = getLineFactor(point1, point2);
    return points.slice(2).every(nextPoint => getLineFactor(point1, nextPoint) === lineFactor);
};

function getPointsDiff(dimension = 'x', point1, point2) {
    const indexToRetrieve = dimension === 'x'
        ? 0
        : dimension === 'y'
            ? 1
            : 2;
    return point2[indexToRetrieve] - point1[indexToRetrieve];
}

function getLineFactor(point1, point2) {
    const xDiff = getPointsDiff('x', point1, point2);
    const yDiff = getPointsDiff('y', point1, point2);
    return yDiff / xDiff;
}
