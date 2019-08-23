/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  var folders = path.split('/');
  var stack = [];
  
  for (var i = 0; i < folders.length; i++) {
    if (folders[i] == '..') {
      stack.pop();
    } else if (folders[i] != '.' && folders[i] != '') {
      stack.push(folders[i]);
    }
  }
  
  return '/' + stack.join('/');
};