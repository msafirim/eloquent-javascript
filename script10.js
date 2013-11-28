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


var datePattern = /\d\d\/\d\d\/\d\d\d\d/;
console.log("born 15/11/2003 (mother Spot): White Fang".search(datePattern));


console.log(/a+/.test("blah"));
console.log(/^a+$/.test("blah"));


console.log(/cat/.test("concatenate"));
console.log(/\bcat\b/.test("concatenate"));