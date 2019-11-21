//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Food() {
    this.type = "Noodels"
}

Food.prototype.model = function() {
    console.log("I am a ravioli but I inherit my type "+ this.type + " from my parent");
};
    
var uncleBens = new Food();
uncleBens.model();


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var deleteNumber = numbers.slice(4);
console.log(deleteNumber);

//3. Delete the last number in the array that you created above.

numbers.pop();
console.log(numbers);


//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
//Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.

function changeFruit(speech) {
   // if it's not a string, return an error message
   if (typeof speech !== "string") {
      console.error("Error! Please input some text.");
      return;
   }

   // otherwise, change strawberry to banana
   speech = speech.replace(/strawberry/g, "banana");
   speech = speech.replace(/Strawberry/g, "Banana");
   speech = speech.replace(/strawberries/g, "bananas");
   speech = speech.replace(/Strawberries/g, "Bananas");

   return speech;
}

console.log (changeFruit("Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied."));


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var footballClubs = ['Arsenal', 'Tottenham', 'Chelsea', 'Liverpool'];

document.getElementById("demo1").innerHTML = "Original Array:<br>" + footballClubs;

function myFunction() {
	footballClubs.splice(0, 4, 'BMW', 'Mercedes', 'Tesla', 'Volvo');
  
	document.getElementById("demo2").innerHTML = "New Array:<br>" + footballClubs;

	console.log(footballClubs);
}


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var people = [
    {firstName: 'John', lastName: 'Smith'},
    {firstName: 'Mike', lastName: 'Johnson'},
    {firstName: 'George', lastName: 'Williams'},
]

var firstNames = people.filter(function(firstName){
    return (firstName.lastName === "Johnson");
})

console.log(firstNames);


//7. Create a simple function that logs the date.

var d = new Date();

console.log(d);