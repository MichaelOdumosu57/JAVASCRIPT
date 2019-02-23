
var pretty_print = {
        seperator        : 5,
        s_key            : "-",
        notes_length_max : -Infinity || -9999999999999999999,
        notes_collection : "",
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
                },
        b                :Object.entries(   this.a   ),
        pretty_do        :function(){
                                for(   var i= 0; i != this.b.length; i++   ){
                                
                                
                                    if(   this.b[i][0].length > this.notes_length_max   ){
                                        this.notes_length_max = this.b[i][0].length
                                    }
                                    
                                }
                                
                                for(   var i= 0; i != this.b.length; i++   ){
                                    this.notes_collection += "\n" + this.b[i][0] + Array(   this.notes_length_max  - this.b[i][0].length + this.seperator ).join(" ") + this.s_key
                                    
                                    
                                     	if(   typeof(   b[i][1]   ) == 'object'   ){
                                
                                
                                     		this.notes_collection += JSON.stringify(   this.b[i][1],null,2   )
                                
                                
                                     	}
                                     	
                                     	
                                     	else{
                                
                                
                                     		this.notes_collection += this.b[i][1]
                                
                                
                                     	}
                                     	
                                     	
                                }
                                return this.notes_collection
                            }
    
    } // will make this plugin OOP
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