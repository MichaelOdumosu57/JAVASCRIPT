// if node use exports or figure how to get external modules in here

// an OOP way to do everything javascript, I meant to have this done in python with a superclass oh well
// for meaningful use, every property purpose is easily availble to each other
var ultraObject = {
    eventName:"",           //wants a DOMString event name
    event_obj:undefined,              //wants an Event
    DOM_child:{0:undefined}, // wants a DOM element
    addEventListener:function(   dev_obj   ){ ultraObject.DOM_child[0].addEventListener(   ultraObject.eventName,dev_obj !== undefined ? dev_obj.fn : ultraObject.passing_args   )},
    passing_args: function(   dev_obj   ){console.log(arguments)}, // use this to see parameters from functions that have something to offer
    dispatchEvent: function(   dev_obj   ){ultraObject.DOM_child[0].dispatchEvent(   ultraObject.event_obj   )}    // sync fires events
        
    
    }

// var a = new UIEvent('b')
//  ultraObject.eventName = 'onload'
//  ultraObject.event_obj = a
//  ultraObject.DOM_child[0] = document.querySelector('canvas')
//  ultraObject.addEventListener()
//  ultraObject.dispatchEvent()
