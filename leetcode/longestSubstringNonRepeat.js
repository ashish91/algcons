// Given a string, find the length of the longest substring without repeating characters.
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Author: Ashish Gaur

function longestSubstringNonRepeating(s) {
	if (s.length <= 1) {
		return s.length;
	}

	// Keep two pointers for start and end of substrings.
	let begin = 0, ending = 1;
	let longestSubstring = 1;

	// Hashtable to save the characters already seen.
	// Save their position so it can be used .
	let seenCharacters = {};
	seenCharacters[s[begin]] = 0;

	while (ending < s.length) {
		if (seenCharacters[s[ending]] >= 0) {
			// Update the index to the last occurrence of the character
			// if it's greater than current begin position.
			begin = Math.max(begin, seenCharacters[s[ending]] + 1) ;
		}

		longestSubstring = Math.max(longestSubstring, (ending - begin + 1));
		seenCharacters[s[ending]] = ending;
	
		ending++;
	}

	return longestSubstring;
}
