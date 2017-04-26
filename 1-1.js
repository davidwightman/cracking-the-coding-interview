/*
     * Tests to see if string contains all unique chars.
     * @param {String} str - The string to be checked for uniqueness
     * @returns {Boolean} true if string has only unique chars. False if a duplicate exists
     */

    var str1 = "helol"
    var str2 = "jdsgg"

    var isUnique = function(string) {
    	var stringArray = Array.from(string).sort();
    	if (stringArray.length > 256) return false;
    	for (i = 1; i <= string.length; i++){
    		console.log(i)
    		if (stringArray[i] === stringArray[i - 1]) {
    			return false
    		} 
    	} return true
    }

    console.log(isUnique(str1))
