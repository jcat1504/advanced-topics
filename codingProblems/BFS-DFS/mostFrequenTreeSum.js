// 

//find most frequent tree sum
var findFrequentTreeSum = function(root) {
let max = 1;
const map = new Map();

findMostFrequent(root);
let result = [];

for (const [sum, count] of map) {
	if (count == max) result.push(sum);
}

return result;

function findMostFrequent(node) {
	if (node == null) return 0;
	const leftSum = findMostFrequent(node.left);
	const rightSum = findMostFrequent(node.right);

	const sum = leftSum + node.val + rightSum;

	if (!map.has(sum)).map.set(sum, 0);
	map.set(sum, map.get(sum) + 1);

	max = Math.max(max, map.get(sum));

	return sum;
   }
}
