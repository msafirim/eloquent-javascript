var answer;
while (true) {
  answer = prompt("You! What is the value of 2 + 2?", "");
  if (answer == "4") {
    alert("You must be a genius or something.");
    break;
  }
  else if (answer == "3" || answer == "5") {
    alert("Almost!");
  }
  else {
    alert("You're an embarrassment.");
  }
}