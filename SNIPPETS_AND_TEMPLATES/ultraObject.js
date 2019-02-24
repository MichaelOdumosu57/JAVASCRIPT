// if node use exports or figure how to get external modules in here

// an OOP way to do everything javascript, I meant to have this done in python with a superclass oh well
// for meaningful use, every property purpose is easily availble to each other
var ultraObject = {
    eventName:"",           //wants a DOMString event name
    DOM_child:{0:undefined}, // wants a DOM element
    addEventListener:function(){ ultraObject.DOM_child[0].addEventListener(ultraObject.eventName,ultraObject.passing_args)},
    passing_args: function(){console.log(arguments)} // use this to see parameters from functions that have something to offer
        
    
    }
    
ultraObject.eventName = 'click'
ultraObject.DOM_child[0] = document
ultraObject.addEventListener()
