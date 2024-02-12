//---Easy
//create a function that subtracts two numbers and alerts the difference
function subTwoNums(x, y) {
    alert(x - y)
}

//create a function that divides three numbers and console logs the quotient

function divThreeNums(x, y, z) {
    console.log(x/y/z)
}

//create a function that multiplys three numbers and returns the product
function mulThreeNums(x, y, z) {
    return (x*y*z)
}

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function threeNums(x, y, z) {
    let sum = x + y
    let remainder = sum % z
    return remainder
}

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function fourNums(a, b, c, d) {
    let product = a * b
    if (product > 100) {
        console.log(product + c+d)
    } else if (product < 100) {
        console.log(product - c - d)
    } else {
        alert((a*b*c)%d)
    }
}