function printArray(array) {
  for (var i = 0; i < array.length; i++)
    console.log(array[i]);
}


function sum(numbers) {
  var total = 0;
  forEach(numbers, function (number) {
    total += number;
  });
  return total;
}
console.log(sum([1, 10, 100]));


function negate(func) {
  return function(x) {
    return !func(x);
  };
}
var isNotNaN = negate(isNaN);
console.log(isNotNaN(NaN));


function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

forEach(["Wampeter", "Foma", "Granfalloon"], console.log);