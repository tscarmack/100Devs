//Create a conditonal that checks their age
document.querySelector('h1').addEventListener('click', checkAge)
let p = document.querySelector('p')


//If under 16, tell them they can not drive
function checkAge() {
    let age = document.querySelector('input').value
if (age < 16) {
    p.innerText = "You can not drive"
}
//If under 18, tell them they can't hate from outside the club, because they can't even get in
else if (age < 18) {
    p.innerText = "You can't hate from outside the club, because you can't even get in"
}
//If under 21, tell them they can not drink
else if (age < 21) {
    p.innerText = "You cannot drink"
}
//If under 25, tell them they can not rent cars affordably
else if (age < 25) {
    p.innerText = "You can not rent cars affordably"
}
//If under 30, tell them they can not rent fancy cars affordably
else if (age < 30) {
    p.innerText = "you can not rent fancy cars affordably"
}
//If over 30, tell them there is nothing left to look forward too
else {
    p.innerText = "there is nother left to look forward to"
}


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph



}


