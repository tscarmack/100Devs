//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function NewCharacter(name, boardColor, numOfTattoos){
    this.name = name
    this.boardColor = boardColor
    this.numOfTattoos = numOfTattoos
    this.jump = function(){
        alert('hell yeah bro')
    }
    this.crash = function (){
        alert('woah! wipeout')
    }
}

let tonyHawk = new NewCharacter('Tony', 'red', 0)
