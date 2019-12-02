// Given an array of points in a 2D plane, find K closest points to 
// the origin.

//ANALYSIS:
//We can use max Heap to find K points closest to the origin
// We can start by pushing K points in the heap. While iterating 
// through the remaining points, if a point (say P) is closer to the 
// origin than the top point of the max-heap, we will remove that top 
// point from the heap and add P to always keep the closest points in 
// the heap.

function kClosest(points, k) {

    //sorts the array in place
    points.sort((point1, point2) => {
        const distanceFromOrigin1 = getDistanceFromOrigin(point1);
        const distanceFromOrigin2 = getDistanceFromOrigin(point2);

        //sort by distance from origin, lowest first
        return distanceFromOrigin1 - distanceFromOrigin2;
    });

    //returns first k elements
    return points.slice(0, k);
}

function getDistanceFromOrigin(point) {
    const [x, y] = point; //array destructuring
    return (x*x) + (y*y);
}

console.log(kClosest([
    [-5, 4],
    [-6, -5],
    [4, 6]
], 2))