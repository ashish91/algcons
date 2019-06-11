// https://leetcode.com/discuss/interview-question/309064/google-phone-interview-remove-repeating-numbers
function removeContinuousDuplicates(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if ((i == arr.length - 1) || arr[i+1] != arr[i]) {
			result.push(arr[i]);
		} else {
			do {
				i++;
			} while (arr[i] == arr[i-1] && i < arr.length);
			i--
		}
	}

	return [...new Set(result)];
}