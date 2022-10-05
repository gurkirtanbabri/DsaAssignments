// 2. Given three points, check whether they lie on a straight (collinear) or not. [Google]
// For example:
// Input- [(1,1), (1,6), (0,9)]
// Output- No
// Input- [(1,1), (1,4), (1,5)]
// Output- Yes


// solution:- we need to check the slop is equal or not 

const coordinate = [[1,1], [1,6], [0,9]]
const coordinate1 = [[1,1], [1,4], [1,5]]


function isPointsAreColinear(coordinates) {
    x1 = coordinates[0][0]
    x2 = coordinates[1][0]
    x3 = coordinates[2][0]
    y1 = coordinates[0][1]
    y2 = coordinates[1][1]
    y3 = coordinates[2][1]
    
    return (y2 - y1)/(x2 - x1) === (y3 - y2)/(x3 - x2) ? 'YES' : 'NO'
}


console.log(isPointsAreColinear(coordinate));
console.log(isPointsAreColinear(coordinate1));


// TIME COMPLIXITY:- O(1)
// SPACE COMPLIXITY:- O(1)
