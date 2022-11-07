const palindromes = function (string) {
    let input = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '')
    input = input.replace(/\s+/g, '')
    input = input.toLowerCase();
    let palindromeTest = Array.from(input);
    palindromeTest = palindromeTest.reverse()
    input = Array.from(input);
    if (input.toString() == palindromeTest.toString()) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
