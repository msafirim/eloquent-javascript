function power(base, exponent) {
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}


function between(string, start, end) {
    var startAt = string.indexOf(start);
  if (startAt == -1)
    return undefined;
  startAt += start.length;
  var endAt = string.indexOf(end, startAt);
  if (endAt == -1)
    return undefined;

  return string.slice(startAt, endAt);
}


var input = prompt("Tell me something", "");
var parenthesized = between(input, "(", ")");
if (parenthesized != undefined)
  console.log("You parenthesized '", parenthesized, "'.");


function lastElement(array) {
  if (array.length > 0)
    return array[array.length - 1];
  else
    return undefined;
}

console.log(lastElement([1, 2, undefined]));