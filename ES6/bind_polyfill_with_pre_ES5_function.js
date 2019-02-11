var a = {x:2,write:function(){this.c =1}}
var b = {x:1,write:function(){console.log(this.x)}}
Function.prototype.dot = function(obj_to_bind){
    var d = this
    obj_to_bind.bind = d
    return function(){
        obj_to_bind.bind()
    };
     
}
a.write = b.write.dot(b,1,2)