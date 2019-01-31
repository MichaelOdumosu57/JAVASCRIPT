https://developer.mozilla.org/en-US/docs/Web/JavaScript


JavaScript Arguments
when you have a function the arguments keyword gives you access to every parameter the code passed to the function
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);

they are available with non-arrow functions 
typeof(arguments) = "object"








you can change them

function func1(a, b, c) {
	arguments[0] = 324
  console.log(arguments[0]);
  // expected output: 324


}

func1(1, 2, 3);



to make an array
var args = Array.prototype.slice.call(arguments);
// Using an array literal is shorter than above but allocates an empty array
var args = [].slice.call(arguments);
var args = Array.from(arguments);
var args = [...arguments];


useful when the amount of parameters are unknown


properties 
arguments.callee
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee
ES5 does not use this in strict mode 

Using arguments.callee in an anonymous recursive function
function create() {
   return function(n) {
      if (n <= 1)
         return 1;
      return n * arguments.callee(n - 1);
   };
}

var result = create()(5);

must use  arguments.callee 
function createPerson(sIdentity) {
    var oPerson = new Function('alert(arguments.callee.identity);');
    oPerson.identity = sIdentity;
    return oPerson;
}

var john = createPerson('John Smith');

john();
can't access ' sIdentity in this case




arguments[@@iterator]
function f() {
  // your browser must support for..of loop
  // and let-scoped variables in for loops
  for (let letter of arguments) {
    console.log(letter);
  }
}
f('w', 'y', 'k', 'o', 'p');
this is an array iterator object 


Rest, default, and destructured parameters
when you dont have it a change to arguments chages the parameter 
function func(a) { 
  arguments[0] = 99; // updating arguments[0] also updates a
  console.log(a);
}
func(10); // 99


you must have
n func(a = 55) or  func(...a) to keep the value
but if the paramater was a variable and not a value its not affected no matter



arguments.length
length of the argument


to prettify your json 
JSON.stringify(   [JSON],null,2   )