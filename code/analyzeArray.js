const analyzeArray = function (array) {
  let obj = {
    avg: 0,
    min: 0,
    max: 0,
    length: 0,
  };

  let newAverage = array.reduce((prevN, currentN) => prevN + currentN, obj.avg);
  obj.avg = newAverage / array.length;

  let minimum = Math.min(...array);
  obj.min = minimum;

  let maximum = Math.max(...array);
  obj.max = maximum;

  let arrayLength = array.length;
  obj.length = arrayLength;

  return obj;
};

module.exports = analyzeArray;
