// Given n non-negative integers a1, a2, ..., an , 
// where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of 
// line i is at (i, ai) and (i, 0). Find two lines, which 
// together with x-axis forms a container, such that the container 
// contains the most water.

// Note: You may not slant the container and n is at least 2.

// Analysis: 
// Two lines with x axis forms a container 
// n non-negative integers (a1, a2,...an) represent a point at two coordinates, i and ai 
// n(which is number?) vertical lines are drawn such that two endpoints of line i is at (i, ai) and (i, 0)
// --find the two lines, which is together with x-axis and form a container 

//--create two points: i and j for the end points 


var maxArea = function(height) {
    const { length } = height;
    let i = 0;
    let j = length - 1;
    
    let max = 0;
    
    while (i < j) {
        const x = j - i;
        const y = height[height[i] < height[j] ? i++ : j--];
        
        const res = x * y;
            
        if (res > max) max = res;
    }
    
    return max;
};