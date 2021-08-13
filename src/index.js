
exports.min = function min (array) {
  if (typeof array === "number") {
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
    else {
    if (array.length === 0) { 
      return 0
    }
    let minArray = array[0];
    for (let i of array) {
      if (i < minArray) {
        minArray = i;
      }
    }
    return minArray;
    }
  }


exports.max = function max (array) {
  if (typeof array === "number") {
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
    else {
    if (array.length === 0) { 
      return 0
    }
    let minArray = array[0];
    for (let i of array) {
      if (i > minArray) {
        minArray = i;
      }
    }
    return minArray;
    }
  }

exports.avg = function avg (array) {
  if (typeof array === "number") {
    if (arguments.length === 0) { 
      return 0
    }
    let sumArray = arguments[0];
    for (let i of arguments) {
      sumArray += i;
    }
    return sumArray / arguments.length;
  }
  else {
    if (array.length === 0) { 
      return 0
    }
    let sumArray = array[0];
    for (let i of array) {
      sumArray += i;
    }
    return sumArray / array.length;
  }
}
