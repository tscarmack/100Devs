//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
function reverseList(list) {
    console.log(list.reverse())
}
reverseList(['poke1', 'poke2', 'geodude'])

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
let arrayA = [1,4,2,7,3,4,6]
let arrayB = [12,12,4,23,24,12]

// function sumVSCube(first, second){
//     let sumOfSquaresA = 0
//     let sumOfCubesB = 0
//     first.forEach((x)=>(sumOfSquaresA = sumOfSquaresA + (x*x)))
//     second.forEach((x)=> (sumOfCubesB = sumOfCubesB + (x*x*x)))
//     console.log( sumOfSquaresA > sumOfCubesB ? true : false)
// }

function sumVSCube(a,b){
    return a.reduce((acc, c) => acc + c**2, 0) > b.reduce((acc, c) => acc + c**3, 0) 
}

console.log( sumVSCube(arrayA, arrayB) )

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function multipleOfIndex(arr){
    let newArr = []
    arr.forEach((x,i)=>{
        if(x%i===0){
        newArr.push(x)
        }})
    console.log(newArr)
}

function isMultiple(arr){
    return arr.filter((e,i ) => e % i ===0)
}

multipleOfIndex([68, -1, 1, -7, 10, 10])
isMultiple([68, -1, 1, -7, 10, 10])

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfStringAndNumbers(arr){
    let sum = 0
    arr.forEach((x)=>(sum += Number(x)))
    console.log(sum)
}
sumOfStringAndNumbers([2,2,2,2,'12','15','23'])



function sumOfValues(arr){
    return arr.reduce((acc, c) => acc + Number(c), 0)
}

console.log(sumOfValues(['5', 2, '3', 6]))