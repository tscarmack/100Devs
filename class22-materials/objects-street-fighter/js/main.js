//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighterConstructor(name, strength, defense, ultimate,){
    this.name = name
    this.strength = strength
    this.defense = defense
    this.ultimate = ultimate
    this.punch = function(){
        alert(`${this.name} PUNCH!` )
    }
    this.kick = function(){
        alert(`${this.name} KICK BITCH!`)
    }
    this.ultimateMove = function(){
        alert(`${this.name} just used ${this.ultimate}. ha. you\'re screwed nerd.`)
    }
}

let sparkles = new StreetFighterConstructor('Sparkles', '4/100', '89/100', 'Sparkle Spray')