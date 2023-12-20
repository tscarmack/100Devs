// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = 'pasta'
food = 'pizza'
alert(food)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let stringVariable = 'beans'
alert(stringVariable.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNums(n1,n2,n3){
    alert((n1*n2)/n3)
}
threeNums(4,5,6)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function singleNum(num){
console.log(Math.cbrt(num))
}
singleNum(11)
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function month(mon){
    if(mon === 'June' || mon === 'July' || mon === 'August'){
        alert('YAY')
    }else{
        alert('Booo')
    }
}
month('sep')
// or:
const month2 = mon => mon === 'June' || 'July' || 'August' ? alert('YAY') : alert('Booo')
month2('sep')
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function loop(num){
    for(let i = 0; i <= num; i++){
        if(i % 5 === 0){
            console.log(i)
        }
    }
}
loop(100)
