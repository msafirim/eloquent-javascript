var slash = /\//;
console.log("AC/DC".search(slash));


var asteriskOrBrace = /[\{\*]/;
var story =
  "We noticed the *giant sloth*, hanging from a giant branch.";
console.log(story.search(asteriskOrBrace));