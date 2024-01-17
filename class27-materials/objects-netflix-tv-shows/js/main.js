//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixTVShow{
    constructor(showName,showCast,showBudget,runTime){
        this.name=showName
        this.cast=showCast
        this.showBudget=showBudget
        this.runTime=runTime
    }
    jumpShark(){
        alert('everyone DIES')
    }
    commercialBreak(){
        alert('Don\'t go anywhere!')
    }
    newShowAlert(){
        alert('coming this fall!')
    }
}


let strangerThings = new NetflixTVShow("Stranger Things", "Finn Wolfhard", "$86 Million", "1 hour")