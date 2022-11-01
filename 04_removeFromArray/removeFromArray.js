const removeFromArray = function(array, ...toBeRemoved) {
    
    const arrayOfArguments = Array.from(toBeRemoved);
    let newArray = [];

    for (let value of array) {
        if (!arrayOfArguments.includes(value)) {
            newArray.push(value);
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
