var dependencies =
  {"ObjectTools.js": ["FunctionalTools.js"],
   "Dictionary.js":  ["ObjectTools.js"],
   "TestModule.js":  ["FunctionalTools.js", "Dictionary.js"]};


var loadedFiles = {};

function require(file) {
  if (dependencies[file]) {
    var files = dependencies[file];
    for (var i = 0; i < files.length; i++)
      require(files[i]);
  }
  if (!loadedFiles[file]) {
    loadedFiles[file] = true;
    load(file);
  }
}


console.log(window);
console.log(window.print == print);
console.log(window.window.window.window.window);


function buildMonthNameModule() {
  var names = ["January", "February", "March", "April",
               "May", "June", "July", "August", "September",
               "October", "November", "December"];
  function getMonthName(number) {
    return names[number];
  }
  function getMonthNumber(name) {
    for (var number = 0; number < names.length; number++) {
      if (names[number] == name)
        return number;
    }
  }

  window.getMonthName = getMonthName;
  window.getMonthNumber = getMonthNumber;
}
buildMonthNameModule();

console.log(getMonthName(11));


function provide(values) {
  forEachIn(values, function(name, value) {
    window[name] = value;
  });
}