//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this.name = name
    }
    get name(){
        return this.name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class Bird extends Animal{
    constructor(name,type){
        super(name)
        this.type = type
    }
    get type(){
        return this.type
    }
    speak(){
        super.speak()
        console.log(`${this.name} says "CaCAWWWW"`)
    }    
}


let joseph = new Bird("Joseph", "Cockatiel")