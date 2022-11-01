const sumAll = function(startingValue, endingValue) {
    let finalSum = 0;
    const array = [startingValue, endingValue].sort(function(a, b){return a - b});

    if (startingValue < 0 || endingValue < 0 || typeof startingValue != "number" || typeof endingValue != "number") {
        return "ERROR"
    } else {
    for (let i = array[0]; i <= array[1]; i++) {
        finalSum += i;
    }
    return finalSum;
}
};

// Do not edit below this line
module.exports = sumAll;