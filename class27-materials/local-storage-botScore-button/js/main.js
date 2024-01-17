//Create a button that adds 1 to a botScore stored in localStorage 

localStorage.setItem('botScore', 1)



//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', addAnotherOne)

function addAnotherOne(){
    let botScoreVal = Number(localStorage.getItem('botScore'))
    botScoreVal +=1
    localStorage.setItem('botScore', botScoreVal)
}
