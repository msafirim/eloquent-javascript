var text = "purple haze";
console.log(text["length"]);
console.log(text.length);

var cat = {colour: "grey", name: "Spot", size: 46};
cat.size = 47;
console.log(cat.size);
delete cat.size;
console.log(cat.size);
console.log(cat);

var empty = {};
empty.notReally = 1000;
console.log(empty.notReally);

var thing = {"gabba gabba": "hey", "5": 10};
console.log(thing["5"]);
thing["5"] = 20;
console.log(thing[2 + 3]);
delete thing["gabba gabba"];

var propertyName = "length";
var text = "mainline";
console.log(text[propertyName]);

var chineseBox = {};
chineseBox.content = chineseBox;
console.log("content" in chineseBox);
console.log("content" in chineseBox.content);

console.log(chineseBox);

var set = {"Spot": true};
// Add "White Fang" to the set
set["White Fang"] = true;
// Remove "Spot"
delete set["Spot"];
// See if "Asoka" is in the set
console.log("Asoka" in set);

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

var mailArchive = ["mail one", "mail two", "mail three"];

for (var current = 0; current < mailArchive.length; current++)
  console.log("Processing e-mail #", current, ": ", mailArchive[current]);

function range(upto) {
  var result = [];
  for (var i = 0; i <= upto; i++)
    result[i] = i;
  return result;
}
console.log(range(4));

var doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());
console.log(doh.toLowerCase());

var mack = [];
mack.push("Mack");
mack.push("the");
mack.push("Knife");
console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack);

var words = "Cities of the Interior";
console.log(words.split(" "));

var array = ["a", "b", "c d"];
console.log(array.join(" ").split(" "));

var paragraph = "born 15-11-2003 (mother Spot): White Fang";
console.log(paragraph.charAt(0) == "b" && paragraph.charAt(1) == "o" &&
     paragraph.charAt(2) == "r" && paragraph.charAt(3) == "n");

console.log(paragraph.slice(0, 4) == "born");

function startsWith(string, pattern) {
  return string.slice(0, pattern.length) == pattern;
}
console.log(startsWith("rotation", "rot"));

console.log("Pip".charAt(250));
console.log("Nop".slice(1, 10));

function catNames(paragraph) {
  var colon = paragraph.indexOf(":");
  return paragraph.slice(colon + 2).split(", ");
}
console.log(catNames("born 20/09/2004 (mother Yellow Bess): " +
              "Doctor Hobbles the 2nd, Noog"));


function findLivingCats() {
  var mailArchive = retrieveMails();
  var livingCats = {"Spot": true};

  function handleParagraph(paragraph) {
    if (startsWith(paragraph, "born"))
      addToSet(livingCats, catNames(paragraph));
    else if (startsWith(paragraph, "died"))
      removeFromSet(livingCats, catNames(paragraph));
  }

  for (var mail = 0; mail < mailArchive.length; mail++) {
    var paragraphs = mailArchive[mail].split("\n");
    for (var i = 0; i < paragraphs.length; i++)
      handleParagraph(paragraphs[i]);
  }
  return livingCats;
}

var howMany = 0;
for (var cat in findLivingCats())
  howMany++;
print("There are ", howMany, " cats.");

function addToSet(set, values) {
  for (var i = 0; i < values.length; i++)
    set[values[i]] = true;
}

function removeFromSet(set, values) {
  for (var i = 0; i < values.length; i++)
    delete set[values[i]];
}


var when = new Date(1980, 1, 1);
console.log(when);