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