let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#noice').addEventListener('click', sports)
document.querySelector('#seven').addEventListener('click', frog)
document.querySelector('#maybeThisOne').addEventListener('click', plusOne)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sports() {
  total = total - 5
  document.querySelector('#placeToPutResult').innerHTML = total
}

function frog() {
  total = total - 7
  document.querySelector('#placeToPutResult').innerHTML = total
}

function plusOne() {
  total = total + 1
  document.querySelector('#placeToPutResult').innerHTML = total
}

