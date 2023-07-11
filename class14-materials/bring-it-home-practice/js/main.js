// *Variables*
// Create a variable and console log the value
let frog = 3
console.log(frog)
// Create a variable, add 10 to it, and alert the value
let car = 7
alert(car + 10)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function plant(){
    alert(100-50-30-10)
}
plant()
// Create a function that divides one number by another and returns the remainder
function zebra(num1,num2){
    return(num1%num2)
}
console.log(zebra(10,4))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function maxx(num1,num2){
    let sum = num1+num2
    if(sum>50){
        alert("Jumanji")
    }
}
maxx(50,1)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mal(num1,n2,n3){
    const prod = num1 * n2 * n3
    if (prod % 3 == 0){
        alert("ZEBRA")
    }
}
mal(2,3,2)