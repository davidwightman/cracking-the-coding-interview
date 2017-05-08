/* Given a string, write a function to check if it is a permutation of a palindrome. 
A palindrome is a word or phrase that is the same forwards and backwards.
A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 

Example:
Input: Tact Coa
Output: True (permutations: "taco cat", "atco cta", etc..) */

const str = /*'Tact Coa'*/ 'f';

const palindromePermutation = function(str) {
	//take out spaces and make all lower case
	str = str.replace(/ /g, '').toLowerCase()
	const setOfCharacters = new Set();
	for(i = 0; i > str.length; i++) {
		setOfCharacters.delete(str[i]) || setOfCharacters.add(str[i])
	} 
	return setOfCharacters.size < 2
};
console.log(palindromePermutation(str));
