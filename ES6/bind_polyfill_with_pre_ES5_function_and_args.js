var a = {x:2,write:function(a){this.c =1}}
var b = {x:1,write:function(a){console.log(this.x + a)}}
Function.prototype.dot = function(obj_to_bind){
    var d = this
    console.log(obj_to_bind)
    
    return function(){
         var args = []
         args.push.apply(args,arguments)
         d.call(obj_to_bind,...args)
    }
        
}
a.write = b.write.dot(b)
a.write(3,9)//returns 9


//with args @ bind
var a = {x:2,write:function(a){this.c =1}}
var b = {x:1,write:function(a){console.log(this.x + a)}}
Function.prototype.dot = function(obj_to_bind){
    var d = this
    console.log(obj_to_bind)
    
    var bind_args = []
    bind_args.push.apply(bind_args,arguments)
    return function(){
         var args = []
         args.push.apply(args,arguments)
         d.call(...bind_args,...args)
    }
        
}
a.write = b.write.dot(b,10)
a.write() //returns 11