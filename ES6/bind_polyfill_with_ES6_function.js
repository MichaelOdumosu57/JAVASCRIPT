var a = {x:2,write:function(){this.c =1}}
var b = {x:1,write:()=> {console.log(b.x)}}
Function.prototype.dot = function(obj_to_bind){
    return this
     
}
a.write = b.write.dot(b,1,2)