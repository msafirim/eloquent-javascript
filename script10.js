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


var parenthesized = prompt("Tell me something", "").match(/\((.*)\)/);
if (parenthesized != null)
  console.log("You parenthesized '", parenthesized[1], "'");


function extractDate(string) {
  var found = string.match(/(\d\d?)\/(\d\d?)\/(\d{4})/);
  if (found == null)
    throw new Error("No date found in '" + string + "'.");
  return new Date(Number(found[3]), Number(found[2]) - 1,
                  Number(found[1]));
}

console.log(extractDate("born 5/2/2007 (mother Noog): Long-ear Johnson"));


console.log("Borobudur".replace(/[ou]/g, "a"));


var names = "Picasso, Pablo\nGauguin, Paul\nVan Gogh, Vincent";
console.log(names.replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));


function eatOne(match, amount, unit) {
  amount = Number(amount) - 1;
  if (amount == 1) {
    unit = unit.slice(0, unit.length - 1);
  }
  else if (amount == 0) {
    unit = unit + "s";
    amount = "no";
  }
  return amount + " " + unit;
}

var stock = "1 lemon, 2 cabbages, and 101 eggs";
stock = stock.replace(/(\d+) (\w+)/g, eatOne);

console.log(stock);


function escapeHTML(text) {
  var replacements = {"<": "&lt;", ">": "&gt;",
                      "&": "&amp;", "\"": "&quot;"};
  return text.replace(/[<>&"]/g, function(character) {
    return replacements[character];
  });
}

console.log(escapeHTML("The 'pre-formatted' tag is written \"<pre>\"."));


var badWords = ["ape", "monkey", "simian", "gorilla", "evolution"];
var pattern = new RegExp(badWords.join("|"), "i");
function isAcceptable(text) {
  return !pattern.test(text);
}

console.log(isAcceptable("Mmmm, grapes."));
console.log(isAcceptable("No more of that monkeybusiness, now."));


var digits = new RegExp("\\d+");
console.log(digits.test("101"));