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
