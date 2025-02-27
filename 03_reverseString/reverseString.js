const reverseString = function(string) {
    var letters = string.split("");
    var newString ="";
    for (let i = letters.length-1; i >=0 ;i--){
        newString += letters[i];
    }

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
