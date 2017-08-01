/* There are three types of edits that can be performed on strings:
 insert a character, remove a character, or replace a character.
 Given two strings, write a function to check if they are one edit (or zero edits) away.

 EXAMPLE
 pale, ple -> true
 pales, pale -> true
 pale, bale -> true
 pale, bake -> false */
 
// const str1 = 'pale';
// const str2 = 'bake';

function oneEdit(str1, str2){

	//if the difference between the two strings is greater than 1
	if ((str1.length - str2.length || str2.length - str1.length) > 1) {
		return false
	}


  for (let i = 0, j = 0; i < str1.length && j < str2.length; ++i, ++j) {
   //insert
   //remove
    }

  return true;
}
// console.log(oneEdit(str1, str2))

module.exports =  { oneEdit }