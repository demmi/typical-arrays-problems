
exports.min = function min (array) {
  if (arguments.length === 0) { 
    return 0
  }
  let minArray = arguments[0];
  for (let i of arguments) {
    if (i < minArray) {
      minArray = i;
    }
  }
  return minArray;
}

exports.max = function max (array) {
  if (arguments.length === 0) { 
    return 0
  }
  let maxArray = arguments[0];
  for (let i of arguments) {
    if (i > maxArray) {
      maxArray = i;
    }
  }
  return maxArray;
}

exports.avg = function avg (array) {
  if (arguments.length === 0) { 
    return 0
  }
  let sumArray = arguments[0];
  for (let i of arguments) {
    sumArray += i;
    
  }
  return sumArray / arguments.length;
}
