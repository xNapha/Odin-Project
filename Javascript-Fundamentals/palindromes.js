const palindromes = function (x) {
    let string = x.toLowerCase().split(/\W/).join('')
    function reverseString(y){
        if (y == ""){
            return "";
        }
        return reverseString(y.substr(1)) + y.charAt(0);
    }
    return string == reverseString(string);
};

// Do not edit below this line
module.exports = palindromes;