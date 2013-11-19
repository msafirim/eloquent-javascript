function makeAddFunction(amount) {
  function add(number) {
    return number + amount;
  }
  return add;
}

var addTwo = makeAddFunction(2);
var addFive = makeAddFunction(5);
console.log(addTwo(1) + addFive(1));

function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");