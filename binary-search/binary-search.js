'use strict';

// Complete this algo
const binarySearch = (array, target) => {

	if ( target < array[0] || target > array[array.length - 1]){
		return false;
	}

	let midpoint = Math.floor(array.length/2);
	let min = 0;
	let max = array.length - 1;

	// if ( array[midpoint] === target ) {
	// 	return true;
	// }

	// if ( target < array[midpoint] ) {
	// 	min = 0;
	// 	max = midpoint;
	// }

	// if ( target > array[midpoint] ) {
	// 	min = midpoint;
	// 	max = array.length - 1;
	// }

	if ( array[min] === target || array[max] === target ) {
		return true;
	}

	while ( max-min !== 1 ) {
		
		midpoint = Math.floor((max+min)/2);
	
		if ( array[midpoint] === target ) {
			return true;
		}

		if ( target < array[midpoint] ) {
			max = midpoint;
		}

		if ( target > array[midpoint] ) {
			min = midpoint
		}

	}

	return false;

	//refactored code with comments:

	// //check if target is outside array
	// if ( target < array[0] || target > array[array.length - 1]){
	// 	return false;
	// }

	// let midpoint = Math.floor(array.length/2);
	// let min;
	// let max;
	// //check if inital midpoint is target value
	// if ( array[midpoint] === target ) {
	// 	return true;
	// }
	// //set the indexes for the smallest and largest limit using initial midpoint as reference
	// if ( target < array[midpoint] ) {
	// 	min = 0;
	// 	max = midpoint;
	// }

	// if ( target > array[midpoint] ) {
	// 	min = midpoint;
	// 	max = array.length - 1;
	// }
	// //check if one of the index limits is the target value
	// if ( array[min] === target || array[max] === target ) {
	// 	return true;
	// }
	// //while the index limits are not next to each other
	// while ( max-min !== 1 ) {
	// 	//find new midpoint
	// 	midpoint = Math.floor((max+min)/2);
	// 	//check if new midpoint is the target value
	// 	if ( array[midpoint] === target ) {
	// 		return true;
	// 	}

	// 	//if not, reassign an index limit using target value to compare
	// 	//if target is smaller than the new midpoint, the midpoint becomes the new maximum limit
	// 	if ( target < array[midpoint] ) {
	// 		max = midpoint;
	// 	}
	// 	// if target is larger than the new midpoint, the midpoint becomes the new minimum limit
	// 	if ( target > array[midpoint] ) {
	// 		min = midpoint
	// 	}

	// }
	// //in any other case, value is not here so return false
	// return false;

		//initial code:

			// let i = Math.floor(array.length/2)

			// let j;

			// let midpoint;

			// if(target > array[i]){
			// 	j = array.length - 1;
			// 	if( target > array[j]){
			// 		return false;
			// 	}
			// }

			// else if (target < array[i]){
			// 	j = 0;
			// 	if (target < array[j]){
			// 		return false;
			// 	}
			// }

			// while(Math.abs(i-j) !== 1){
			// 	if(target === array[i] || target === array[j]){
			// 		return true
			// 	}

			// 	midpoint = Math.floor((j + i)/2);

			// 	if (target === array[midpoint]){
			// 		return true;
			// 	}

			// 	if ( target < array[midpoint] ) {
			// 		if ( j < i ) {
			// 			i = midpoint;
			// 		}
			// 		else{
			// 			j = midpoint;
			// 		}
			// 	}

			// 	if ( target > array[midpoint] ) {
			// 		if ( j < i ) {
			// 			j = midpoint;
			// 		}
			// 		else {
			// 			i = midpoint;
			// 		}
			// 	}
			// }
			// return false
	
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch