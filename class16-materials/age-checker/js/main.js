//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//let value = 30



    if(value < 16){
        console.log("You cannot drive")
    }else if(value < 18){
        console.log("You can't hate from outside the club, beacause you can't even get in") 
    }else if(value < 21){
        console.log("you cannot drink")
    }else if(value < 25){
        console.log("you cannot rent cars affordably")
    }else if(value < 30){
        console.log("you cannot rent fancy cars affordably")
    }else if(value >= 30){
        console.log("there is nothing left to look forward to")
    }else{
        console.log("ERROR")
    }


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

document.querySelector("h1").addEventListener('click', run)
function run() {
    value=document.querySelector("#danceDanceRevolution").value
    document.querySelector("p").innerHTML
