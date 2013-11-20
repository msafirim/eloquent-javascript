function makeAddFunction(amount) {
  function add(number) {
    return number + amount;
  }
  return add;
}

var addTwo = makeAddFunction(2);
var addFive = makeAddFunction(5);
console.log(addTwo(1) + addFive(1));

function findSequence(goal) {
  function find(start, history) {
    if (start == goal)
      return history;
    else if (start > goal)
      return null;
    else 
     /* return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)"); */

   var found = find(start + 5, "(" + history + " + 5)");
  if (found == null)
    found = find(start * 3, "(" + history + " * 3)");
  return found;

  }
  return find(1, "1");
}

console.log(findSequence(24));

var add = function(a, b) {
  return a + b;
};
console.log(add(5, 5));

function greaterThan(x) {
  return function(y) {
    return y > x;
  };
}

var greaterThanTen = greaterThan(10);
console.log(greaterThanTen(9));