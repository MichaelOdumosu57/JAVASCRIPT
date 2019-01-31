var a = 1
function b(){
    var a = 2;
    a += 2
    console.log(a)
}
a += 10
if(a == 11){
    var a = 4
    console.log(a)
}
console.log(a)


// using let any redeclaration in a conditional stays in a contional this is block scoping
var a = 1
function b(){
    var a = 2;
    a += 2
    console.log(a)
}
a += 10
if(a == 11){
    let a = 4
    console.log(a)
}
console.log(a)