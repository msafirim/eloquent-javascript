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