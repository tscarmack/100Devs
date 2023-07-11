//Write your pseduo code first! 
document.querySelector('#answer').addEventListener('click', run)

function run() {
  const temp = document.querySelector('#celsiusTemp').value

  document.querySelector('#placeForAnswer').innerText = (temp*9/5) + 32
}