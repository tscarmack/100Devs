// *Variables*
// Create a variable and console log the value
let frog = 10
console.log(10)
// Create a variable, add 10 to it, and alert the value
let frogPlusTen = 15
frogPlusTen += 10
alert(frogPlusTen)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(num1, num2, num3, num4){
    alert(num1 - num2 - num3 - num4)
}
// Create a function that divides one number by another and returns the remainder
function divides(num1, num2){
    return num1 % num2 
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function adds(num1, num2){
    let ans = num1+num2
    if(ans>50){
        alert(Jumanji)
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multi(num1, num2, num3){
    let ans2 = num1 * num2 * num3
    if(ans2 % 3 === 0){
        alert(ZEBRA)
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the 
//number passed in
function words(word1, num1){
    for(let i=1; i<=num1; i++){
        console.log(word1)
    }
}
words('wonderful',21)