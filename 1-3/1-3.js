var stringWithSpaces = "Mr John Smith    ";
var spacesInString = / /g;

const replaceSpace = function(str) {
	return str.replace(spacesInString, '%20')
};
console.log(replaceSpace(stringWithSpaces))