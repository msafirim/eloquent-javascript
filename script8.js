var rabbit = {};
rabbit.speak = function(line) {
  console.log("The rabbit says '", line, "'");
};

rabbit.speak("Well, now you're asking me.");


function speak(line) {
  console.log("The ", this.adjective, " rabbit says '", line, "'");
}
var whiteRabbit = {adjective: "white", speak: speak};
var fatRabbit = {adjective: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.");


speak.apply(fatRabbit, ["Yum."]);


speak.call(fatRabbit, "Burp.");


function Rabbit(adjective) {
  this.adjective = adjective;
  this.speak = function(line) {
    console.log("The ", this.adjective, " rabbit says '", line, "'");
  };
}

var killerRabbit = new Rabbit("killer");
//killerRabbit.speak("GRAAAAAAAAAH!");


function makeRabbit(adjective) {
  return {
    adjective: adjective,
    speak: function(line) {/*etc*/}
  };
}

var blackRabbit = makeRabbit("black");


console.log(killerRabbit.constructor);
console.log(blackRabbit.constructor);


var simpleObject = {};
console.log(simpleObject.constructor);
console.log(simpleObject.toString);


console.log(Rabbit.prototype);
console.log(Rabbit.prototype.constructor);


console.log(killerRabbit.toString == simpleObject.toString);


Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
console.log(Rabbit.prototype.teeth);


Rabbit.prototype.dance = function() {
  console.log("The ", this.adjective, " rabbit dances a jig.");
};

killerRabbit.dance();


function Rabbit(adjective) {
  this.adjective = adjective;
}
Rabbit.prototype.speak = function(line) {
  console.log("The ", this.adjective, " rabbit says '", line, "'");
};

var hazelRabbit = new Rabbit("hazel");
hazelRabbit.speak("Good Frith!");


var noCatsAtAll = {};
if ("constructor" in noCatsAtAll)
  console.log("Yes, there definitely is a cat called 'constructor'.");


Object.prototype.properties = function() {
  var result = [];
  for (var property in this)
    result.push(property);
  return result;
};

var test = {x: 10, y: 3};
console.log(test.properties());


Object.prototype.properties = function() {
  var result = [];
  for (var property in this) {
    if (this.hasOwnProperty(property))
      result.push(property);
  }
  return result;
};

var test = {"Fat Igor": true, "Fireball": true};
console.log(test.properties());


function forEachIn(object, action) {
  for (var property in object) {
    if (object.hasOwnProperty(property))
      action(property, object[property]);
  }
}

var chimera = {head: "lion", body: "goat", tail: "snake"};
forEachIn(chimera, function(name, value) {
  console.log("The ", name, " of a ", value, ".");
});


function forEachIn(object, action) {
  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property))
      action(property, object[property]);
  }
}

var test = {name: "Mordecai", hasOwnProperty: "Uh-oh"};
forEachIn(test, function(name, value) {
  console.log("Property ", name, " = ", value);
});


var object = {foo: "bar"};
console.log(Object.prototype.hasOwnProperty.call(object, "foo") &&
     Object.prototype.propertyIsEnumerable.call(object, "foo"));


function Dictionary(startValues) {
  this.values = startValues || {};
}
Dictionary.prototype.store = function(name, value) {
  this.values[name] = value;
};
Dictionary.prototype.lookup = function(name) {
  return this.values[name];
};
Dictionary.prototype.contains = function(name) {
  return Object.prototype.hasOwnProperty.call(this.values, name) &&
    Object.prototype.propertyIsEnumerable.call(this.values, name);
};
Dictionary.prototype.each = function(action) {
  forEachIn(this.values, action);
};

var colours = new Dictionary({Grover: "blue",
                              Elmo: "orange",
                              Bert: "yellow"});
console.log(colours.contains("Grover"));
console.log(colours.contains("constructor"));
colours.each(function(name, colour) {
  console.log(name, " is ", colour);
});


function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.add = function(other) {
  return new Point(this.x + other.x, this.y + other.y);
};
Point.prototype.isEqualTo = function(other) {
  return this.x == other.x && this.y == other.y;
};

console.log((new Point(3, 1)).add(new Point(2, 4)));


var grid = [["0,0", "1,0", "2,0"],
            ["0,1", "1,1", "2,1"]];
console.log(grid[1][2]);


var grid = ["0,0", "1,0", "2,0",
            "0,1", "1,1", "2,1"];
console.log(grid[2 + 1 * 3]);


function Grid(width, height) {
  this.width = width;
  this.height = height;
  this.cells = new Array(width * height);
}
Grid.prototype.valueAt = function(point) {
  return this.cells[point.y * this.width + point.x];
};
Grid.prototype.setValueAt = function(point, value) {
  this.cells[point.y * this.width + point.x] = value;
};
Grid.prototype.isInside = function(point) {
  return point.x >= 0 && point.y >= 0 &&
         point.x < this.width && point.y < this.height;
};
Grid.prototype.moveValue = function(from, to) {
  this.setValueAt(to, this.valueAt(from));
  this.setValueAt(from, undefined);
};



Grid.prototype.each = function(action) {
  for (var y = 0; y < this.height; y++) {
    for (var x = 0; x < this.width; x++) {
      var point = new Point(x, y);
      action(point, this.valueAt(point));
    }
  }
};



var testGrid = new Grid(3, 2);
testGrid.setValueAt(new Point(1, 0), "#");
testGrid.setValueAt(new Point(1, 1), "o");
testGrid.each(function(point, value) {
  console.log(point.x, ",", point.y, ": ", value);
});