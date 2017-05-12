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
