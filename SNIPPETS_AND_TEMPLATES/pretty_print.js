

var pretty_print = {
        seperator        : 3,
        s_key            : "-",
        notes_length_max : -Infinity || -9999999999999999999,
        notes_collection : "{",
        a                :   {
                     '.altKey'         : 'true if keydown during event'
                    ,'.button'         : 'button number pressed during event'
                    ,'.buttons'        : 'buttons depressed during event'
                    ,'.clientX'        : 'X of mouse pointer by DOM coords'
                    ,'.clientY'        : 'Y of mouse pointer bY DOM coords'
                    ,'.ctrlKey'        : 'true if keydown during event'
                    ,'.metaKey'        : 'true if keydown during event'
                    ,'.movementX'      : 'x relative to position of last mousemove event'
                    ,'.movementY'      : 'x relative to position of last mousemove event'
                    ,'.relatedTarget'  : 'if an another listener is fired it shows up here'
                    ,'.screenX'        : 'coord related screen dev coords (check this)'
                    ,'.screenY'        : 'coord related screen dev coords (check this)'
                    ,'.shiftKey'       : 'true if keydown during event'
                    ,'.getModifierState ' : 'needs one KeyboardEvent.key to work true if pressed or locked'
                },
        b                :[] ,
        c                :function(){pretty_print.b = Object.entries(   pretty_print.a   )},
        pretty_do        :function(   dev_obj   ){

                                if(   dev_obj != undefined   ){
                                    
                                    
                                    if(   dev_obj.a != undefined   ){
    
    
                                        pretty_print.a = dev_obj.a
                                        
                                    }
                                
                                
                                }
                                
                                
                                this.c()


                                for(   var i= 0; i != this.b.length; i++   ){
                                
                                
                                    if(   this.b[i][0].length > this.notes_length_max   ){
                                        this.notes_length_max = this.b[i][0].length
                                    }
                                    
                                }
                                
                                for(   var i= 0; i != this.b.length; i++   ){
                                    this.notes_collection += "\n" + this.b[i][0] + Array(   this.notes_length_max  - this.b[i][0].length + this.seperator ).join(" ") + this.s_key
                                    
                                    
                                     	if(   typeof(   this.b[i][1]   ) == 'object'   ){
                                
                                
                                     		this.notes_collection += JSON.stringify(   this.b[i][1],null,2   )
                                
                                
                                     	}
                                     	
                                     	
                                     	else{
                                
                                
                                     		this.notes_collection += this.b[i][1]
                                
                                
                                     	}
                                     	
                                     	
                                }
                                return this.notes_collection + "\n" + "}"
                            }
    
    } // will make this plugin OOP
    pretty_print.pretty_do()
    
var seperator = 5  // spaces needed
var s_key = "-"   //key used to make notes
var notes_length_max = -Infinity || -9999999999999999999
var notes_collection = "" // what notes should look like an properly spaced out notes
var a ={
     '.altKey'         : 'true if keydown during event'
    ,'.button'         : 'button number pressed during event'
    ,'.buttons'        : 'buttons depressed during event'
    ,'.clientX'        : 'X of mouse pointer by DOM coords'
    ,'.clientY'        : 'Y of mouse pointer bY DOM coords'
    ,'.ctrlKey'        : 'true if keydown during event'
    ,'.metaKey'        : 'true if keydown during event'
    ,'.movementX'      : 'x relative to position of last mousemove event'
    ,'.movementY'      : 'x relative to position of last mousemove event'
    ,'.relatedTarget'  : 'if an another listener is fired it shows up here'
    ,'.screenX'        : 'coord related screen dev coords (check this)'
    ,'.screenY'        : 'coord related screen dev coords (check this)'
    ,'.shiftKey'       : 'true if keydown during event'
}
var b = Object.entries(   a   );
for(   var i= 0; i != b.length; i++   ){


    if(   b[i][0].length > notes_length_max   ){
        notes_length_max = b[i][0].length
    }
    
}
for(   var i= 0; i != b.length; i++   ){
    notes_collection += "\n" + b[i][0] + Array(   notes_length_max  - b[i][0].length + seperator ).join(" ") + s_key
    
    
     	if(   typeof(   b[i][1]   ) == 'object'   ){


     		notes_collection += JSON.stringify(   b[i][1],null,2   )


     	}
     	
     	
     	else{


     		notes_collection += b[i][1]


     	}
     	
     	
}

var pointer_props = {a:{
            '.pointerId':'a unique ID for the pointer',
            '.width':  'width in CSS pixels, of pointer contact geometry',
            '.height':  'height in CSS pixels, of pointer contact geometry',
            '.pressure': 'what pressure the machine can detect 0 for min it can detect 1 for max it can detect',
            '.tangentialPressure':'cylinder stress from -1 to 1',
            '.tiltX':'plane angle (degress from -90 to 90) btwn Y-Z plane and plane with transducer(stylus) and Y axis',
            '.tiltY':'plane angle (degress from -90 to 90) btwn X-Z plane and plane with transducer(stylus) and X axis',
            '.twist':'clockwise rotation of transducer (degrees 0 -359)',
            '.pointerType': 'mouse, pen touch ...',
            '.isPrimary':'is this the primary pointerType'
    
            }
    }
var progress_props = {a:{
                            '.lengthComputable':'boolean for if the progress is measureable',
                            '.loaded':' an unsigned long long of work done by child process. for HTTP downloads it does not consider headers and other metadata',
                            '.total':'unsigned long long for the work child process has done'
                        }
    
    }
var keys = {        b: 'boolean if held during event',
                    c:'Key'}
var touch_props = { a:{
                        '.altKey':'boolean if held during event',
                        '.changedTouches':'a TouchList of all Touch objects at single contact points and the changes btwn them',
                        '.ctrlKey':'boolean if held during event',
                        '.metaKey':keys.b,
                        '.shiftKey': keys.c,
                        '.targetTouches':'all Touch object currently in contact with the surface and were started on the same element',
                        '.touches':'TouchList of all Touch obj representing all current surface contact points',
                        
                        
                      },
                  }
var UI_props = { a:{
                        '.detail':'long for event details',
                        
                    }
                }
    
                  