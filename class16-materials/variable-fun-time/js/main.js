//--- Easy
//create a variable and assign it a number
let beans = 12
//minus 10 from that number
beans = beans - 10
//print that number to the console
console.log(beans)
//--- Medium
//create a variable that holds a value from the input
let input = document.querySelector("#danceDanceRevolution").value
//add 25 to that number
input = input + 25
//alert that number
alert(input)
//--- Hard
//create a variable that holds the h1
const frog = document.querySelector("h1")
//add an event listener to that element that console logs the sum of the two previous variables
frog.addEventListener('click', run)
function run() {
    console.log(Number(input) + beans)
}