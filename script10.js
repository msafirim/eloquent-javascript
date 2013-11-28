var slash = /\//;
console.log("AC/DC".search(slash));


var asteriskOrBrace = /[\{\*]/;
var story =
  "We noticed the *giant sloth*, hanging from a giant branch.";
console.log(story.search(asteriskOrBrace));


var digitSurroundedBySpace = /\s\d\s/;
console.log("1a 2 3d".search(digitSurroundedBySpace));


var notABC = /[^ABC]/;
console.log("ABCBACCBBADABC".search(notABC));