 //Write a function that returns a promise that tests if a number is greater than 50
function testNum(number){
    return new Promise(function(resolve, reject){
        if(number>50){
            resolve(number + " is greater than 50.");
        }else{
            reject(number + " is less than 50.")
        }
    });
};
console.log(testNum(49));

// Write two functions to chain together. 
// The first function, makeAllCaps, will take in an array of words and capitalize them. 
//A second function, sortWords, will sort the words in alphabetical order. 
// If the array contains anything besides a single word (string), an error should be thrown.
const makeAllCaps= function(words){
    return new Promise(function(resolve, reject){
        if(words.every(function(str1) {//every method checks if every item of the array passes test
            return typeof str1 ==="string";//make function to test string; typeof operate tests data type
        })
        ){
            resolve(sortWords(words.map(function(str1) {//if string, make it uppercase
                return str1.toUpperCase();
            })
            )
            );
        } else {
            reject("Error, this is not a string");//else type error message
        }
    });
};
const sortWords = function(words) {
    return new Promise(function(resolve, reject) {
      if (words) {
        resolve(words.sort()); //if it passes, sort the words
      } else {
        reject('Error, this is not a string');
      }
    });
  };

var words=["you", "always","be", "beautiful"];
var wantWords=["want", 3, "words"];


makeAllCaps(words)
.then(sortWords(words))//chaining
    .then(function(result){ //then, function to print result
    console.log(result)})
    .catch(function(error){ //this catches the error
        console.log(error);
});

makeAllCaps(wantWords)
.then(sortWords(wantWords))//chaining
    .then(function(result){ //then, function to print result
    console.log(result)})
    .catch(function(error){ //this catches the error
        console.log(error);
});