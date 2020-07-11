window.setTimeout(function() {
// alert("Hello");

// Intialize variables for Red, Green and Blue numbers
var redColor = Math.floor((Math.random() * 255) + 1);
var greenColor = Math.floor((Math.random() * 255) + 1);
var blueColor = Math.floor((Math.random() * 255) + 1);

// Initialize and load html into variables for "New Colors", Easy and Hard text selections"
var newColorsVar = document.querySelector("#newColors");
var easyVar = document.querySelector("#easy");
var hardVar = document.querySelector("#hard");

// Initialize and load html into variables for "New Colors", Easy and Hard text selections"
var colorGuess1Var = document.querySelector("#colorGuess1");
var colorGuess2Var = document.querySelector("#colorGuess2");
var colorGuess3Var = document.querySelector("#colorGuess3");
var colorGuess4Var = document.querySelector("#colorGuess4");
var colorGuess5Var = document.querySelector("#colorGuess5");
var colorGuess6Var = document.querySelector("#colorGuess6");

// Initialize other variables including total number of guesses (6 - hard, 3 - Easy)
colorGuess1Var.style.background = "pink";
var guessTotalNo = 6;

    // console.log(redColor + " " + greenColor + " " + blueColor);
var displayRed = document.querySelector("#colorRedDisp");
displayRed.textContent = redColor;
var displayGreen = document.querySelector("#colorGreenDisp")
displayGreen.textContent = greenColor;
var displayBlue = document.querySelector("#colorBlueDisp");
displayBlue.textContent = blueColor;


// Event listener for "new colors" text selection"
newColorsVar.addEventListener("click",function() {
console.log("New Colors -- has been clicked");
chooseColorGuesses ()
}) 

// Event listener for "Easy" text selection"
easyVar.addEventListener("click",function() {
console.log("Easy -- has been clicked");
}) 

// Event listener for "Hard" text selection"
hardVar.addEventListener("click",function() {
console.log("Hard -- has been clicked");
}) 

// Event listeners for the 6 color answers"
colorGuess1Var.addEventListener("click",function() {
console.log("guess 1 -- has been clicked " + guessTotalNo);
}) 
colorGuess2Var.addEventListener("click",function() {
console.log("guess 2 -- has been clicked " + guessTotalNo);
}) 
colorGuess3Var.addEventListener("click",function() {
console.log("guess 3 -- has been clicked " + guessTotalNo);
}) 
colorGuess4Var.addEventListener("click",function() {
console.log("guess 4 -- has been clicked " + guessTotalNo);
}) 
colorGuess5Var.addEventListener("click",function() {
console.log("guess 5 -- has been clicked " + guessTotalNo);
}) 
colorGuess6Var.addEventListener("click",function() {
console.log("guess 6 -- has been clicked " + guessTotalNo);
}) 

var chooseColorGuesses = function() { console.log('chooseColorGuesses'); }

}, 500);