function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}

  throw new Error("Could not create HTTP request object.");
}

console.log(typeof(makeHttpObject()));


var request = makeHttpObject();
request.open("GET", "script14.js", false);
request.send(null);
console.log(request.responseText);


console.log(request.getAllResponseHeaders());
console.log(request.getResponseHeader("Last-Modified"));


console.log(request.status);
console.log(request.statusText);