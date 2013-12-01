//var perry = window.open("http://www.pbfcomics.com");

//console.log(perry.Math);

//perry.close();


var encoded = encodeURIComponent("aztec empire");
console.log(encoded);
console.log(decodeURIComponent(encoded));


console.log(document.location.href);
console.log(document.title);

var form = window.open("myfirstpage.html");
console.log(form);


var userForm = document.forms.userinfo;
console.log(userForm.method);
console.log(userForm.action);



function validInfo(form) {
  return form.elements.name.value != "" && /^.+@.+\.\w{2,3}$/.test(form.elements.email.value);
}

console.log(validInfo(document.forms.userinfo));


userForm.elements.send.onclick = function() {
  alert("Click.");
};


userForm.elements.send.onclick = function() {
  if (validInfo(userForm))
    userForm.submit();
  else
    alert("Give us a name and a valid e-mail address!");
};