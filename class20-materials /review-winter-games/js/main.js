//Create a function that takes in an array of numbers. Return a new array containing every 
// even number from the original array (do not use map or filter)
// function newArr(arr){
//     let evenNum = []
  
//     for (let i = 0; i<arr.length; i++){
//         const num = arr[i]
//         if(arr[i]%2 === 0){evenNum.push(num)
//     }
// }
// }

// newArr([0,2,4,5,1])


function onlyEvens(nums){
    let onlyEvenNums = []
    nums.forEach(x => {
        if(x % 2 === 0){
            onlyEvenNums.push(x)
        }
    })
    return(onlyEvenNums)
}

onlyEvens([0,3,2,5,7,3,2,4,7,9,8])
console.log(onlyEvenNums)

console.log(onlyEvens([0,3,2,5,7,3,2,4,7,9,8]))
