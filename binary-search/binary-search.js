'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let start = 0
    let end = array.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end )/ 2)
        if (target === array[mid]) {
            return true
        } else if (target < array[mid]) {
            end = mid-1
        } else {
            start = mid+1
        }
    }

    // if (target === array[start]) return true

    return false
	
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch