    var str1 = "helol"
    var str2 = "jdsgg"

    var isUnique = function(string) {
    	var stringArray = Array.from(string).sort();
    	for (i = 1; i <= string.length; i++){
    		if (stringArray[i] === stringArray[i - 1]) {
    			return false
    		} 
    	} return true
    }

    console.log(isUnique(str1))
