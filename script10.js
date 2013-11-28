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


var parenthesizedText = /\(.*\)/;
console.log("Its (the sloth's) claws were gigantic!".search(parenthesizedText));


var datePattern = /\d{1,2}\/\d\d?\/\d{4}/;
console.log("born 15/11/2003 (mother Spot): White Fang".search(datePattern));


var mailAddress = /\b[\w\.-]+@[\w\.-]+\.\w{2,3}\b/;

console.log(mailAddress.test("kenny@test.net"));
console.log(mailAddress.test("I mailt kenny@tets.nets, but it didn wrok!"));
console.log(mailAddress.test("the_giant_sloth@gmail.com"));


var cartoonCrying = /boo(hoo+)+/i;
console.log("Then, he exclaimed 'Boohoooohoohooo'".search(cartoonCrying));


var holyCow = /(sacred|holy) (cow|bovine|bull|taurus)/i;
console.log(holyCow.test("Sacred bovine!"));


console.log("No".match(/Yes/));
console.log("... yes".match(/yes/));
console.log("Giant Ape".match(/giant (\w+)/i));