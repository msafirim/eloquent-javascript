var variable = "top-level";

function printVariable() {
  alert("inside printVariable, the variable holds '" +
        variable + "'.");
}

function test() {
  var variable = "local";
  alert("inside test, the variable holds '" + variable + "'.");
  printVariable();
}

test();