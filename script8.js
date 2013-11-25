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
killerRabbit.speak("GRAAAAAAAAAH!");


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