// if node use exports or figure how to get external modules in here

// an OOP way to do everything javascript, I meant to have this done in python with a superclass oh well
// for meaningful use, every property purpose is easily availble to each other
var ultraObject = {
    eventName:"",           //wants a DOMString event name
    event_obj:undefined,              //wants an Event
    DOM_child:{0:undefined}, // wants a DOM element
    addEventListener:addEventListener, //  dev_obj.fn is used for 1st party dev to add their custom function to the listener
    passing_args: function(   dev_obj   ){console.log(arguments)}, // use this to see parameters from functions that have something to offer
    dispatchEvent: function(   dev_obj   ){ultraObject.DOM_child[0].dispatchEvent(   ultraObject.event_obj   )},    // sync fires
    xhttp:xhttp(),
    // xhr:ultraObject.xhttp //might not be able to use class figure this out might use a function for this
    // for foward compatability , you should tell this function what to return for default is the xmlhttprequest,
    open:open, // for starting xhr
    protocol :"GET", // FOR xhr protocol
    target:"https://raw.githubusercontent.com/MichaelOdumosu57/JAVASCRIPT/master/SNIPPETS_AND_TEMPLATES/ultraObject.js", // to make the xhr request from
    xhttpreadystatechange:xhttpreadystatechange, // see how you can apply ES6 but for compatability, this helps get the response text
    
    seperator : 3, // for pretty print represents spaces to seperate
    s_key:"-", // how to seperate notes and values
    max : -Infinity || -9999999999999999999, // conisder if || is supported in the oldest browser
    notes_object:{
                     '.altKey': 'true if keydown during event',
                     '.button': 'button number pressed during event'
                }, // a sample for what pretty object can do
    notes_collection: '', // for the final pretty print result
    notes_entries : [], // to turn the notes_object to entries for pretty_print to do its job
    notes_entries_fn:notes_entries_fn,// makes the note_entries
    pretty_do:pretty_do
    }
function addEventListener(   dev_obj   ){
        var fn;
        
        
        if(   dev_obj !== undefined   ){
            
            
            if(   dev_obj.fn !== undefined   ){
                
                
                fn = dev_obj.fn
                
                
            }
            
            
            else if(   dev_obj.xhttp === 'true'   ){
                
                
                fn= xhttpreadystatechange
                
                
            }
            
            
            else if(   dev_obj.fn === undefined   ){
                
                
                fn = ultraObject.passing_args
                
                
            }
            
            
        }
        
        
        else if(   dev_obj === undefined   ){
            
            
            fn = ultraObject.passing_args
            
            
        }
        
        
        console.log(fn)
        ultraObject.DOM_child[0].addEventListener(   ultraObject.eventName,fn   )
} //  dev_obj.fn is used for 1st party dev to add their custom function to the listener dev_obj.xhttp is for xhr
function xhttp(   dev_obj   ){
        
        if(   dev_obj === undefined   ){
            
            
            var xhttp_0_i = new XMLHttpRequest()
            return xhttp_0_i
            
            
        }
        
        
        else if(   dev_obj !== undefined   ){
            
            
            var xhttp_0_i = new XMLHttpRequest()
            return xhttp_0_i
            
            
        }
        
        
} // creates an xhr obj
function open(   dev_obj   ){
    
    dev_obj.xhttp.open(   dev_obj.protocol,dev_obj.target,dev_obj.unk_bool   )
} // gets in contact with the host
function xhttpreadystatechange(){
    console.log(    this.readyState)
    var dev_obj = undefined
    
    if (    this.readyState == 4 && this.status == 200   ) {
    
    
        if(   dev_obj !==undefined   ){
            
            
            dev_obj.fn()
            
            
        }
        
        
        else if(   dev_obj ===undefined   ){
            
            
            console.log(   this.responseText   )
            
            
        }
        
    }
    
} // handles getting remote reposnes
function notes_entries_fn(   dev_obj   ){
    ultraObject.notes_entries = Object.entries(   ultraObject.notes_object  )
}// produces the entries for the pretty_print functionality
function pretty_do(   dev_obj   ){

                                if(   dev_obj != undefined   ){
                                    
                                    
                                    if(   dev_obj.notes_object != undefined   ){
    
    
                                        ultraObject.notes_object = dev_obj.notes_object
                                        
                                    }
                                
                                
                                }
                                
                                
                                this.notes_entries_fn()


                                for(   var i= 0; i != this.notes_entries.length; i++   ){
                                
                                
                                    if(   this.notes_entries[i][0].length > this.max   ){
                                        this.max = this.notes_entries[i][0].length
                                    }
                                    
                                }
                                
                                for(   var i= 0; i != this.notes_entries.length; i++   ){
                                    this.notes_collection += "\n" + this.notes_entries[i][0] + Array(   this.max  - this.notes_entries[i][0].length + this.seperator ).join(" ") + this.s_key
                                    
                                    
                                     	if(   typeof(   this.notes_entries[i][1]   ) == 'object'   ){
                                
                                
                                     		this.notes_collection += JSON.stringify(   this.notes_entries[i][1],null,2   )
                                
                                
                                     	}
                                     	
                                     	
                                     	else{
                                
                                
                                     		this.notes_collection += this.notes_entries[i][1]
                                
                                
                                     	}
                                     	
                                     	
                                }
                                return this.notes_collection
                            }





//templates

//to make an xhr request
function h(   dev_obj   ){
            ultraObject.DOM_child[0] = ultraObject.xhttp
            ultraObject.eventName = 'readystatechange'
            ultraObject.addEventListener({xhttp:'true'})
            ultraObject.open({
                    protocol: ultraObject.protocol,
                    xhttp:ultraObject.xhttp,
                    target:ultraObject.target,
                    unk_bool:true
                })
            ultraObject.DOM_child[0].send()
        }


// var a = new UIEvent('b')
//  ultraObject.eventName = 'onload'
//  ultraObject.event_obj = a
//  ultraObject.DOM_child[0] = document.querySelector('canvas')
//  ultraObject.addEventListener()
//  ultraObject.dispatchEvent()

