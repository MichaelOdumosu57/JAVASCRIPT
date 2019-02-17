document.querySelectorAll("a").forEach(function(x,i){
    var target = document.createAttribute("target")
    target.value = "_blank"
    x.setAttributeNode(target)
    console.log(x.attributes)
    })
    
    
 