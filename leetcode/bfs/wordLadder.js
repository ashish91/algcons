// Optimized Solution
// Time Complexity: O(N*M)
// Space Complexity: O(N*M)

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

var replaceAt = function(str, chr, index) {
  if (!str || !chr || index >= str.length) {
      return str;
  }
  
  return str.substr(0, index) + chr + str.substr(index + 1);
}

var ladderLength = function(beginWord, endWord, wordList) {
  var queue = [ beginWord ], level = 0, visited = {}, wordMap = {};
  var currentWord = null
  var characters = 'abcdefghijklmnopqrstuvwxyz', temp = null;

  for (var i = 0; i < wordList.length; i++) {
    wordMap[wordList[i]] = true;
  }

  while (queue.length > 0) {
    for (var i = 0; i < queue.length; i++) {
      currentWord = queue.shift();
      
      for (var j = 0; j < currentWord.length; j++) {
        for (var k = 0; k < characters.length; k++) {
          if (characters[k] == currentWord[j]) {
            continue;
          }
          
          temp = replaceAt(currentWord, characters[k], j);          
          if (!wordMap[temp]) {
            continue;
          }
          
          if (temp == endWord) {
            return level + 1;
          } else if (!visited[temp]) {
            queue.push(temp);
            visited[temp] = true;
          }
        }
      }
      
      level++;
    }
  }
    
  return 0;
};


// Naive Solution
// Time Complexity: O(M*N^2)
// Space Complexity: O(N)

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var isReachable = function(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    
    var diffCharacters = 0;
    // Takes O(M) time.
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
          diffCharacters++;
      }  
      if (diffCharacters > 1) {
        return false;
      }
    }
    
    return diffCharacters == 1;
}

var ladderLength = function(beginWord, endWord, wordList) {
    var queue = [ beginWord ], level = 0, visited = {};
    var currentWord = null
    // Takes O(N) space. N for queue and N for tracking visited nodes.
    // Takes O(N^2) time. For each word check every other word.
    while (queue.length > 0) {
      currentWord = queue.shift();
      visited[currentWord] = true;

      if (isReachable(currentWord, endWord)) {
          return level + 1;
      } else {
        for (var i = 0; i < wordList.length; i++) {
          if (!visited[wordList[i]] && isReachable(currentWord, wordList[i])) {
            queue.push(wordList[i]);
          }
        }
        level++;
      }
    }
    
    return 0;
};