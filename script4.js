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

