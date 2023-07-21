//Create an array of movie titles. Loop through the array and each element to the h2.
let movieArr = ['movie1', 'movie2', 'movie3', 'movie4']
movieArr.forEach((x)=> document.querySelector('h2').innerText += (' ' + x))

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numArr = [1,2,3,4,5,6,7,8,9,10]
numArr.forEach((x,i)=>{
    numArr[i] = x + 3
})

//Find the average of all the numbers from question three

let sum = 0

numArr.forEach((x) => sum += x)
let numArrAvg = sum / numArr.length