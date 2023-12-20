// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let sentence = 'What time is it?'

if (sentence.endsWith('?')){
    alert('this is a question')
}
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let multipleWordString = 'hello, my name is trevor. I am a jr. dev working for a jr. dev looking to become a sr. dev'

console.log ( multipleWordString.replaceAll('jr. dev', 'software engineer'))
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rPS(){
    let random = Math.random()
    let result
    if(random < 0.34){
        return 'Rock'
        
    }else if(random < 0.67){
        return 'Paper'
    }else{
        return 'Scissors'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function playRPS(playerChoice){
    let botChoice = rPS()
    if(playerChoice === botChoice){
        console.log("Tie!")
    }else if( (playerChoice === 'Rock' && botChoice === 'Scissors') || (playerChoice === 'Paper' && botChoice === 'Rock') || (playerChoice === 'Scissors' && botChoice === 'Paper') ){
        console.log('You Win!')
    }else{
        console.log('You Lose big baby')
    }
}

playRPS(Paper)

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
