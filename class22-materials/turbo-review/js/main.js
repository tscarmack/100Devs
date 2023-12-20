// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favoriteDrink = 'Apple Juice'
console.log(favoriteDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let possibleApple = 'Lettuce Mango Pineapple Pear'
let apple = 'Apple'
console.log(possibleApple.includes(apple))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function getRandomChoice() {
   let random = Math.random()
   if (random < .33){
    return 'rock'
   }else if (random < .66){
    return 'paper'
   }else{
    return 'scissors'
   }

}
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkForWin(myChoice){
    let botChoice = getRandomChoice()
    if(myChoice === botChoice){
        console.log('Tie')
    }else if(
        (myChoice === 'rock' && botChoice === 'scissors') || (myChoice === 'paper' && botChoice === 'rock') || (myChoice === 'scissors' && botChoice === 'paper')
    ){
        console.log('You Win!')
    }else{
        console.log('You Lose :(')
    }
}
checkForWin('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
// function arrOfChoices([choice1, choice2, choice3])

function playGameXTimes(arr){
    arr.forEach( choice => checkForWin(choice))
}

playGameXTimes(['rock', 'paper', 'scissors'])