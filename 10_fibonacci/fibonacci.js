const fibonacci = function (indexOfFib) {
    indexOfFib = parseInt(indexOfFib)

    if (typeof indexOfFib == "number" && indexOfFib > 0) {
        let result = [1, 1];

        for (let i = 1; i < parseInt(indexOfFib); i++) {
            result.push(result[i - 1] + result[i]);

        }
        return (result[indexOfFib - 1]);
    } else {
        return ("OOPS")
    }
};

// Do not edit below this line
module.exports = fibonacci;
