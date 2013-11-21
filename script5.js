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


function lastElement(array) {
  if (array.length > 0)
    return array[array.length - 1];
  else
    throw "Can not take the last element of an empty array.";
}

function lastElementPlusTen(array) {
  return lastElement(array) + 10;
}

try {
  console.log(lastElementPlusTen([]));
}
catch (error) {
  console.log("Something went wrong: ", error);
}


var currentThing = null;

function processThing(thing) {
  if (currentThing != null)
    throw "Oh no! We are already processing a thing!";

  currentThing = thing;
 try { 
  /* do complicated processing... */
}
  finally {
    currentThing = null;
  }
}


try {
  console.log(Sasquatch);
}
catch (error) {
  console.log("Caught: " + error.message);
}