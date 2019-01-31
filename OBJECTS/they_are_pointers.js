//this will make object1 point to the memory location that object2 is pointing at
var object2 = {a:1}
var object1 = object2;

//this will make object2 point to the memory location that object1 is pointing at 
console.log(object1)
object2.a = 3
console.log(object1)

var object3 = {b:1}
object2 = object3
console.log(object1)
object3.b = 5
console.log(object2)

// use this logic to move data around but dont leave it pointless it can be an unknown build up 