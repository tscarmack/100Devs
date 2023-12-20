//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numArr = [4, 8, 5, 4, 3, 65, 2, 32354]
let sum = 0

for (let i = 0; i < numArr.length; i++) {
    sum += numArr[i]
}

console.log(sum)



let nums = [213, 234512, 467, 23]
let sum2 = nums.reduce ( (acc, c) => acc + c, 0 )

console.log(sum2)
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
