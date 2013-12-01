console.log(document.body);
//console.log(document.body.parentNode);
//console.log(document.body.childNodes.length);


console.log(document.documentElement.firstChild);
console.log(document.documentElement.lastChild);


//console.log(document.body.previousSibling);
//console.log(document.body.nextSibling);


function isTextNode(node) {
  return node.nodeType == 3;
}

console.log(isTextNode(document.body));
console.log(isTextNode(document.body.firstChild.firstChild));