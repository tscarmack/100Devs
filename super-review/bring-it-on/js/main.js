// *Variables*
// Create a variable and console log the value
let x = 10

console.log(x)


// Create a variable, add 10 to it, and alert the value
let y = 27
y = 27 + 10
alert(y)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4Nums(a, b, c, d) {
    alert(a-b-c-d)
}


// Create a function that divides one number by another and returns the remainder

function divOneNum(a,b) {
    return a % b
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoNums(a, b) {
    if (a + b > 50) {
        alert("Jumanji")
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mulThreeNums(a, b, c) {
    if (a * b * c % 3 === 0) {
        alert("Zebra")
    }
}
mulThreeNums(3,3,3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordAndNum(word, x) {
    for (let i = 1; i <= x; i++){
        console.log(word)
    }
}

wordAndNum("pizza", 17)