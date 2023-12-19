//Create a mouse object that has four properties and three methods
let mouse = {}

mouse.color = 'black'
mouse.brand = 'logitech'
mouse.model = 'MX Ergo'
mouse.wireless = true

mouse.leftClick = function(){
    alert('You clicked the left mouse button')
}
mouse.rightClick = function(){
    console.log('Right CLICKKKKK')
}
mouse.scroll = function(){
    console.log('you scrolled')
}