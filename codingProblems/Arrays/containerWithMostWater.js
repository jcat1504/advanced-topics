//you are given an array of positive integers where each integer represents the height of a vertical line on a chart.
//Find two lines which together with the x-axis forms a container that would hold the greatest amount of water.
//return the area of water it would hold

//1. figure out the constraints
// - does the thickness of the lines affect the area?
//     -No, assume they take up no space

// - do the left and right sides of the graph count as walls?
//     -no, the sides cannot be used to form a container 

// -can we pick the two values if one value is higher in the middle?
//     -yes, the value in the middle won't affect the container 

const getMaxWaterContainer = function(heights) {
    let maxArea = 0;
    for(let p1=0; p1<heights.length; p++){
        for(let p2=p1+1; p2<heights.length; p2++) {
            const height = Math.min(heights[p1], heights[p2]);
            const width = p2-p1;
            const area = height * width;
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
}