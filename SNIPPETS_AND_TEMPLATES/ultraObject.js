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
    pretty_do:pretty_do,
    
    allTags:undefined, // should i hold this here?? represents serach range for the ultraObject concerning elements
    eCSearch:eCSearch,
    isArray:isArray,
    isObject:isObject,
    elementFound:{} // holds found elements needed by the ultraObject
    
    
    
    
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
function isArray(   dev_obj   ){ // should combine all type query or keep seperate??
    //.type the item in question
    
     if(   dev_obj !== undefined   ){
         
         
        if(   Array.isArray(dev_obj.type) && typeof(   dev_obj.type   ) !== 'object'   ){
             //an array
             
            return true
            
            
        }
        
        
     }
     
     
     return false
} // is item an object will be upgraded to test for more objects, you can use instance of but its not available everywher
function isObject(   dev_obj   ){ // should combine all type query or keep seperate??
    //.type the item in question
    
     if(   dev_obj !== undefined   ){
         
         
        if(   !Array.isArray(dev_obj.type) && typeof(   dev_obj.type   ) === 'object'   ){
             //an array
             
            return true
            
            
        }
        
        
     }
     
     
     return false
}
function eCSearch(   dev_obj   ){
    // .list, desired items
    // .look spot where to look and assert for list, if an object the items should be keys
    // look through innerHTML, innerText, textContext
    // holds the found elements that meet the query in ultraObject.elementFound
    var eCSearchLook = []
    var eCSearchList = []
    var eCSearchProp
    var eCSearchElem
    
    
    if(   dev_obj !== undefined   ){
        
        
        if(   ultraObject.isArray(   {type:dev_obj.look}   )   ){
            
            
            eCSearchLook = dev_obj.look
            
                
        }
        
        
        else if(   ultraObject.isObject(   {type:dev_obj.look}   )   ){
            
            
            eCSearchLook = Object.keys(   dev_obj.look   )
            
                             
        }
        
        
        if(   ultraObject.isArray(   {type:dev_obj.list}   )   ){
            
            
            eCSearchList = dev_obj.list
                
                
        }
        
        
        else if(   ultraObject.isObject(   {type:dev_obj.list}   )   ){
            
            
            eCSearchList = Object.keys(   dev_obj.list   )
            
                             
        }
        
        
        
    }
    
    
    for(   var eCSearch_0_i = 0; eCSearch_0_i !==  ultraObject.allTags.length;  eCSearch_0_i++   ){
        for(   var eCSearch_1_i = 0; eCSearch_1_i !==  eCSearchLook.length;  eCSearch_1_i++   ){
            for(   var eCSearch_2_i = 0; eCSearch_2_i !==  eCSearchList.length;  eCSearch_2_i++   ){
                eCSearchProp = ultraObject.allTags[eCSearch_0_i][eCSearchLook[eCSearch_1_i]]
                eCSearchElem = ultraObject.allTags[eCSearch_0_i]
                
                
                
                if(   eCSearchProp === undefined   ){
                    
                    
                    continue;
                    
                    
                }
                
                
                else if(   eCSearchProp !== undefined   ){
                    
                    
                    eCSearchProp.toString()
                    
                    
                }
                
                
                try{
                    
                    
                    if(   eCSearchList[eCSearch_2_i].match(   eCSearchProp.toString()   )[0] === eCSearchList[eCSearch_2_i]   ){
                        
                        
                        // console.log(   eCSearchList[eCSearch_2_i].match(   eCSearchProp.toString()   )[0]    )
                        // console.log(   eCSearchElem    )
                        
                        
                        if(   ultraObject.elementFound[Object.keys(   ultraObject.elementFound   ).length] !== eCSearchElem   ){
                            
                            
                            ultraObject.elementFound[Object.keys(   ultraObject.elementFound   ).length] = eCSearchElem
                                
                            
                            
                        }
                                            
                        
                    }
                    
                    
                }
                catch(   e   ){
                                        
                }
            }
        }
    }
    console.log(   eCSearchLook   )
}// seaches for elements with the queried filters and does things to them
function removeCN(   dev_obj   ){
    // removes specified childNodes from the DOM
    removeCNLength = Object.keys(   ultraObject.elementFound   ).length
    for(   var removeCN_0_i = 0; removeCN_0_i !== removeCNLength;  removeCN_0_i++){
        
        
        if(   ultraObject.elementFound[removeCN_0_i] !== undefined   ){
            
            console.log(   ultraObject.elementFound[removeCN_0_i]   )
            ultraObject.elementFound[removeCN_0_i].remove()
            ultraObject.elementFound[removeCN_0_i] = 'elementRemoved'
            // is it removed
            console.log(   ultraObject.elementFound[removeCN_0_i]   )
        
        }
        
            
        console.log(   removeCN_0_i   )
    }
    console.log(   'compeleted'   )
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

//to add an eventListener
function a(   dev_obj   ){
    ultraObject.eventName = 'click'
    ultraObject.DOM_child[0] = document
    ultraObject.addEventListener()
}
function b(   dev_obj   ){
    console.log(   dev_obj   )
    ultraObject.allTags = dev_obj.allTags
    eCSearch({
        list:dev_obj.list,
        look:dev_obj.look,
    })
    removeCN()    
}
