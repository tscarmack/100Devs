//Create an espresso machine class that makes machines with 4 properties and 3 methods
    class BuildEspressoMachine{
        constructor(color, milkWand, beanGrinder, waterCapacity){
            this.color=color
            this.milkWand=milkWand
            this.beanGrinder=beanGrinder
            this.waterCapacity=waterCapacity
        }
        grind(){
            alert('grind on meeee')
        }
        steam(){
            alert('it\'s getting steamy')
        }
        extract(){
            alert('extracting...')
        }
    }

    let brevilleBaristaPro = new BuildEspressoMachine('black', true, true, '1.5 gallons')