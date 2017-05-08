// Check Permutation: Given two strings, write a method to decide if one is a permutiation of the other.

var str1 = "cardboard"
var str2 = "boardcard"

	//console.log(sorted1)
	//console.log(sorted2)
var checkPermutations = function(str1, str2) {

	var sorted1 = str1.split('').sort().join('');
	var sorted2 = str2.split('').sort().join('');

	return sorted2 === sorted1
} 

console.log(checkPermutations(str1, str2))
