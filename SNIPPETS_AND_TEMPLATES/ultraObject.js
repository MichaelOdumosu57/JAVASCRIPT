// if node use exports or figure how to get external modules in here

// an OOP way to do everything javascript, I meant to have this done in python with a superclass oh well
// for meaningful use, every property purpose is easily availble to each other

//if your find problems search PROBLEMS to see whats going on

//is {}[] allowed in ES5
// templates
// FL_0_i for loop object in the purpose action
// {
//     forLoop_0_i:0,
//     forLoopLength:Object.keys(   ultraObject.identifyEO   ).length,
//     fn:function(   dev_obj   ){},
//     args:{}
// }
function ultraObjectReset(   dev_obj   ){
    return {
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
    elementFound:{}, // holds found elements needed by the ultraObject
    removeCN:removeCN,
    removeOP:removeOP,
    identifyE:identifyE,
    identifyEO:{}, // object for all needed identified
    forLoop:forLoop,
    objInvloved:objInvloved,// to keep track of all items responbile for a purpose at a specific point
    objIO:{}, // OBKECT FOR VobjInvloved
    objIFL_0_i:{}
    }
}
var ultraObject = ultraObjectReset()
function objInvloved(   dev_obj   ){
        ultraObject.objIO = dev_obj
        var objInvloved_0_i = 0
        ultraObject.objIFL_0_i={
            forLoop_0_i: objInvloved_0_i,
            forLoopLength:Object.entries(   dev_obj   ).length,
            fn:function(      ){
                console.log(   ultraObject.objIO[ultraObject.objIFL_0_i.forLoop_0_i]   )
                },
            args:undefined
        }
        forLoop(   ultraObject.objIFL_0_i   )
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
    var eCSearchProp_obj = {
                                cBQ:undefined  //chop question marl
                            }
    
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
                    
                    
                    eCSearchProp = eCSearchProp.toString()
                    // console.log(   eCSearchProp    )
                    // console.log(   eCSearchList[eCSearch_2_i]   )
                    // console.log(   eCSearchProp.match(   eCSearchList[eCSearch_2_i]  )   )
                    // console.log(   eCSearchProp.match(   eCSearchList[eCSearch_2_i]   ) !== null ? eCSearchProp.match(   eCSearchList[eCSearch_2_i]   )[0] === eCSearchList[eCSearch_2_i] : null    )
                        // match chops off the question mark for some reason
                        //sdafdfa?sassa'.match('a?s') does not work as intenede
                }
                
                
                try{//async might have a problem with this
                    
                    
                    if(   eCSearchList[eCSearch_2_i].indexOf('?') !== -1   ){
                    
                    
                        if(   eCSearchProp.match(   eCSearchList[eCSearch_2_i]   ) !== null   ){
                            
                            
                            eCSearchProp_obj.cBQ = eCSearchProp.match(   eCSearchList[eCSearch_2_i]   )[0] + "?"
                        
                        
                        }
                        
                        
                    }
                    
                    
                    else if(   eCSearchList[eCSearch_2_i].indexOf('?') === -1   ){
                        
                        
                        if(   eCSearchProp.match(   eCSearchList[eCSearch_2_i]   ) !== null   ){
                            
                            
                            eCSearchProp_obj.cBQ = eCSearchProp.match(   eCSearchList[eCSearch_2_i]   )[0]
                            
                            
                        }
                        
                        
                    }
                    
                    
                    // console.log(   eCSearchProp_obj.cBQ, eCSearchList[eCSearch_2_i]   )
                    // console.log(   eCSearchProp_obj.cBQ === eCSearchList[eCSearch_2_i]     )
                    if(   eCSearchProp_obj.cBQ === eCSearchList[eCSearch_2_i]     ){
                        //PROBLEMS
                        
                        // console.log(   eCSearchList[eCSearch_2_i].match(   eCSearchProp.toString()   )[0]    )
                        // console.log(   eCSearchElem    )
                    
                        if(   ultraObject.elementFound[Object.keys(   ultraObject.elementFound   ).length] !== eCSearchElem   ){
                            
                            
                            ultraObject.elementFound[Object.keys(   ultraObject.elementFound   ).length] = {
                                
                                item:eCSearchElem,
                                query:eCSearchProp,
                                xMark:eCSearchLook[eCSearch_1_i]
                            
                                } // the bug for removing pharma charts
                                
                            
                            
                        }
                                            
                        
                    }
                    
                    
                }
                catch(   e   ){
                    // console.log(e)
                }
            }
        }
    }
    console.log(   eCSearchLook   )
}// seaches for elements with the queried filters and does things to them
function removeCN(   dev_obj   ){
    // removes specified childNodes from the DOM
    
    
    if(   dev_obj != undefined   ){
        
        
        if(   dev_obj.rules === 'all'   ){
            continue;
        }
        
        
        else if(   dev_obj.rules === 'duplicates'   ){
                
        }
        
        // if the rules are differnent consider before items are removed
    }
    removeCNLength = Object.keys(   ultraObject.elementFound   ).length
    for(   var removeCN_0_i = 0; removeCN_0_i !== removeCNLength;  removeCN_0_i++){
        
        
        if(   ultraObject.elementFound[removeCN_0_i] !== undefined   ){
            
            
            ultraObject.elementFound[removeCN_0_i].remove()
            ultraObject.elementFound[removeCN_0_i] = 'elementRemoved'
            // is it removed
            
        
        }
        
            
        console.log(   removeCN_0_i   )
    }
    console.log(   'compeleted'   )
}
function removeOP(   dev_obj   ){
    var removeOPLength;
    var removeOPObj = {}
    if(   dev_obj !== undefined   ){
        
                    
        if(   dev_obj.rules === 'duplicates'   ){
            
            
            removeOPLength = Object.keys(   this.elementFound   ).length   //be careful for nesting
            for(   var removeOP_0_i = 1; removeOP_0_i !== removeOPLength; removeOP_0_i++   ){
                
                // console.log(removeOP_0_i,this.elementFound[removeOP_0_i].item)
                // console.log(   this.elementFound[removeOP_0_i].item === this.elementFound[removeOP_0_i].item   )
                
                
                for(   var removeOP_1_i = 0; removeOP_1_i !== removeOPLength; removeOP_1_i++   ){
                    
                    // console.log(   removeOP_1_i   )
                    
                        if(   this.elementFound[removeOP_0_i].item === this.elementFound[removeOP_1_i].item && removeOP_0_i !== removeOP_1_i  ){
                            
                            
                            this.elementFound[removeOP_0_i].item = null
                            break
                            
                            
                        }
                        
                    
                }
                                
                
            }
            for(   var removeOP_2_i = 0; removeOP_2_i !== removeOPLength; removeOP_2_i++   ){
                
                
                if(   this.elementFound[removeOP_2_i].item !== null   ){
                    
                    
                    removeOPObj[Object.keys(   removeOPObj   ).length] = this.elementFound[removeOP_2_i]
                    
                    
                }
                
                
            }
            this.elementFound = removeOPObj
        }
        
        // if the rules are differnent consider before items are removed
    }
    
        
} //remove specific properties from obj
function forLoop(   dev_obj   ){
    
    
    if(   dev_obj !== undefined   ){

        
        for(   dev_obj.forLoop_0_i; dev_obj.forLoop_0_i !== dev_obj.forLoopLength; dev_obj.forLoop_0_i++   ){
                // console.log(   dev_obj.forLoop_0_i   )
                dev_obj.fn(   dev_obj.args   )// find a better way to do this
        }
        dev_obj.forLoop_0_i = 0

        
    }
}
function identifyE(   dev_obj   ){
    var identifyELength = Object.keys(   ultraObject.elementFound   ).length
    var identifyEC = {} //identify element  Check checls for parents and children for the right node
    for(   var identifyE_0_i = 0; identifyE_0_i !== identifyELength; identifyE_0_i++   ){
        
        
        if(   dev_obj !== undefined   ){
            
           
            if(   dev_obj.action === 'preFill'   ){
                
                
                if(   ultraObject.elementFound[identifyE_0_i].item.tagName.toLowerCase() !== 'input'   ){// if there is more needed make a function im not writing these massive loops
                
                    identifyEC['0'] = ultraObject.elementFound[identifyE_0_i].item
                    var identifyE_1_i = 0
                    var iEFL_1_i ={
                        forLoop_0_i: identifyE_1_i,
                        forLoopLength:ultraObject.elementFound[identifyE_0_i].item.children.length,
                        fn:function(   dev_obj   ){
                            
                            
                                if(   ultraObject.identifyEO[identifyE_0_i] === undefined   ){
                                    
                                    
                                    ultraObject.identifyEO[identifyE_0_i]  = {item : {}}
                                    
                                                                        
                                }
                                
                                
                                if(   identifyEC['0'].children[iEFL_1_i.forLoop_0_i].tagName.toLowerCase() === 'input'   ){
                                    
                                    
                                    ultraObject.identifyEO[identifyE_0_i].item[iEFL_1_i.forLoop_0_i] = {item:{}}
                                    ultraObject.identifyEO[identifyE_0_i].item[iEFL_1_i.forLoop_0_i].item[iEFL_1_i.forLoop_0_i] = identifyEC['0'].children[iEFL_1_i.forLoop_0_i]
                                    
                                
                                }
                                
                                
                            },
                        args:undefined
                    }
                    console.log(   identifyE_0_i   )
                    ultraObject.forLoop(   iEFL_1_i   )
                    // ultraObject.objInvloved({
                    //         0:ultraObject.elementFound,
                    //         1:ultraObject.identifyEO
                    //     })
                    // console.log(   ultraObject.elementFound[identifyE_0_i].item.parentElement   )
                    // if not found in the parentNode find in the parentElement
                    // child nodes may contain text nodes
                        
                }
                
                
            }
            
            
        }
        
        
    }
    
    
    if(   dev_obj.action === 'preFill'   ){
        
        
        var iEFL_2_i ={
            forLoop_0_i:0,
            forLoopLength:Object.keys(   ultraObject.identifyEO   ).length,
            fn:function(   dev_obj   ){
                
                
                
                if(   Object.keys(   ultraObject.identifyEO[iEFL_2_i.forLoop_0_i].item   ).length === 0   ){
                    console.log(   ultraObject.identifyEO[iEFL_2_i.forLoop_0_i]   )
                    ultraObject.elementFound[iEFL_2_i.forLoop_0_i].status = 'findChild'
                    var iEFL_3_i =  {
                             forLoop_0_i:0,
                             forLoopLength:Object.keys(   ultraObject.elementFound[iEFL_2_i.forLoop_0_i].item.children  ).length,
                             fn:function(   dev_obj   ){
                                 console.log(   ultraObject.elementFound[iEFL_2_i.forLoop_0_i].item.children[iEFL_3_i.forLoop_0_i]   )
                                 },
                             args:{}
                         }
                                            //furher search required
                    // console.log(   ultraObject.elementFound[iEFL_2_i.forLoop_0_i]   )
                    ultraObject.forLoop(   iEFL_3_i   )
                            
                }
                
                
                },
            args:{}
        }
        console.group('fl')
        ultraObject.forLoop(   iEFL_2_i   )
        console.groupEnd()
        
        
    }
    
    
} // identifies tags in elementFound and what is needed to do the next tasl

// if(   dev_obj !== undefined   )



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
    ultraObject.allTags = dev_obj.allTags
    ultraObject.eCSearch({
        list:dev_obj.list,
        look:dev_obj.look,
    })
    ultraObject.removeCN({rules:'all'})
}


function preFillForm(   dev_obj   ){
    ultraObject.allTags = dev_obj.allTags
    ultraObject.eCSearch({
        list:dev_obj.list,
        look:dev_obj.look,
    })
    ultraObject.removeOP({rules:'duplicates'})
    ultraObject.identifyE({
                action:'preFill'
            })
    
    
}

            preFillForm({
                allTags : [document.querySelectorAll("body *")[129],document.querySelectorAll("body *")[135],document.querySelectorAll("body *")[140],document.querySelectorAll("body *")[147]],
                list:{
                   'LinkedIn Profile':'https://www.linkedin.com/in/michael-odumosu-a58367b1',
                    'Website':'https://ualbanyasist.github.io/',
                    'How did you hear about this job?':'Linkedin',
                    'What is your desired Salary?': '$80,000'},
                look:{ 'innerHTML':null,'innerText':null,'textContext':null}
            })
// whats a good rules if parameters are part of the ultraObject or come in as an argument
// if a function naturally passes arguments to a function, dev params must go to the ultraObject

