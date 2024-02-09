//--- Easy
//create a variable and assign it a number

let x = 10

//minus 10 from that number

x -= 10

//print that number to the console

console.log(x)

//--- Medium
//create a variable that holds a value from the input

let y = Number(document.querySelector("input").value)



//add 25 to that number

y += 25

//alert that number

alert(y)

//--- Hard
//create a variable that holds the h1

let z = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables

z.addEventListener('click', addition)

function addition(){
    y = Number(document.querySelector("input").value) + 25
    console.log(x + y)
}