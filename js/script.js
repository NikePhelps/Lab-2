function whatToWear () {
  var eventType = prompt("What type of event are you attending?");
  var tempFahr = prompt("What is the temperature?");
  var result = ("It is " + tempFahr + " and you are going to " + eventType + " event.");


if (eventType === "casual" && tempFahr === "less than 54 degrees Fahrenheit") {
  console.log(result + "You should wear something comfy and a coat.");
 }
 else if (eventType === "casual" && tempFahr === "54-70 degrees Fahrenheit") {
   console.log(result + "You should wear something comfy and a jacket.");
 }
 else if (eventType === "casual" && tempFahr === "more than 70 degrees Fahrenheit") {
   console.log(result + "You should wear something comfy and no jacket.");
 }
 else if (eventType === "semi-formal" && tempFahr === "less than 54 degrees Fahrenheit") {
   console.log(result + "You should wear a polo and a coat.");
 }
 else if (eventType === "semi-formal" && tempFahr === "54-70 degrees Fahrenheit") {
   console.log(result + "You should wear a polo and a jacket.");
 }
 else if (eventType === "semi-formal" && tempFahr === "more than 70 degrees Fahrenheit"){
   console.log(result + "You should wear a polo and no jacket.");
 }
 else if (eventType === "formal" && tempFahr === "less than 54 degrees Fahrenheit") {
   console.log(result + "You should wear a suit and a coat.");
 }
 else if (eventType === "formal" && tempFahr === "54-70 degrees Fahrenheit") {
   console.log(result + "You should wear a suit and a jacket.");
 }
 else if (eventType === "formal" && tempFahr === "more than 70 degrees Fahrenheit") {
   console.log(result + "You should wear a suit and no jacket.");
 }
 else {
   console.log(undefined);
 }
}
