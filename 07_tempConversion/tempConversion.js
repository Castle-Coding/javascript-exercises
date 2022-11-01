const ftoc = (tempInF) => parseFloat(((((tempInF - 32) * (0.5556)) * 10) / 10 ).toFixed(1))

const ctof = (tempInC) => parseFloat((((((tempInC * 1.8) + 32) * 10 / 10))).toFixed(1));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
