'use strict';

// Complete this algo
const binarySearch = (array, target) => {

	let i = Math.floor(array.length/2)

	let j;

	let midpoint;

	if(target > array[i]){
		j = array.length - 1;
		if( target > array[j]){
			return false;
		}
	}

	else if (target < array[i]){
		j = 0;
		if (target < array[j]){
			return false;
		}
	}

	while(Math.abs(i-j) !== 1){
		if(target === array[i] || target === array[j]){
			return true
		}

		midpoint = Math.floor((j + i)/2);

		if (target === array[midpoint]){
			return true;
		}

		if ( target < array[midpoint] ) {
			if ( j < i ) {
				i = midpoint;
			}
			else{
				j = midpoint;
			}
		}

		if ( target > array[midpoint] ) {
			if ( j < i ) {
				j = midpoint;
			}
			else {
				i = midpoint;
			}
		}
	}
	return false
	
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch