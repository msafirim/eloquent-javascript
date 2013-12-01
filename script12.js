console.log(document.body);
//console.log(document.body.parentNode);
//console.log(document.body.childNodes.length);


console.log(document.documentElement.firstChild);
console.log(document.documentElement.lastChild);


//console.log(document.body.previousSibling);
//console.log(document.body.nextSibling);


function isTextNode(node) {
//  return node.nodeType == 3;
}

//console.log(isTextNode(document.body));
//console.log(isTextNode(document.body.firstChild.firstChild));


//console.log(document.body.firstChild.nodeName);
//console.log(document.body.firstChild.firstChild.nodeValue);


function asHTML(node) {
 // if (isTextNode(node))
 //   return escapeHTML(node.nodeValue);
//  else if (node.childNodes.length == 0)
 //   return "<" + node.nodeName + "/>";
 // else
//    return "<" + node.nodeName + ">" +
//           map(asHTML, node.childNodes).join("") +
 //          "</" + node.nodeName + ">";
}

//console.log(asHTML(document.body));


var secondHeader = document.createElement("H1");
var secondTitle = document.createTextNode("Chapter 2: Deep magic");


secondHeader.appendChild(secondTitle);
//document.body.appendChild(secondHeader);


var newImage = document.createElement("IMG");
newImage.setAttribute("src", "img/Hiva Oa.png");
document.documentElement.appendChild(newImage);
console.log(newImage.getAttribute("src"));


function setNodeAttribute(node, attribute, value) {
  if (attribute == "class")
    node.className = value;
  else if (attribute == "checked")
    node.defaultChecked = value;
  else if (attribute == "for")
    node.htmlFor = value;
  else if (attribute == "style")
    node.style.cssText = value;
  else
    node.setAttribute(attribute, value);
}


function forEachIn(object, action) {
  try {
    for (var property in object) {
      if (Object.prototype.hasOwnProperty.call(object, property))
        action(property, object[property]);
    }
  }
  catch(e) {
    if (e != Break)
      throw e;
  }
}

function dom(name, attributes) {
  var node = document.createElement(name);
  if (attributes) {
    forEachIn(attributes, function(name, value) {
      setNodeAttribute(node, name, value);
    });
  }
  for (var i = 2; i < arguments.length; i++) {
    var child = arguments[i];
    if (typeof child == "string")
      child = document.createTextNode(child);
    node.appendChild(child);
  }
  return node;
}

var newParagraph = 
  dom("P", null, "A paragraph with a ",
      dom("A", {href: "http://en.wikipedia.org/wiki/Alchemy"},
          "link"),
      " inside of it.");
document.documentElement.appendChild(newParagraph);