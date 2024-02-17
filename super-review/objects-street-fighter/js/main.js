//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeStreetFighter(name, fighterClass, superMove, health) {
    this.name = name
    this.fighterClass = fighterClass
    this.superMove = superMove
    this.health = health
    this.catchphrase = function () {
        console.log("This is my caaatchphrase brother")
    }
    this.superMoveActivate = function () {
        console.log(`Now you have activated my ${this.superMove}`)
    }
    this.fatality = function () {
        console.log("ha! ya dead.")
    }
}