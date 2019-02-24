var event = new DragEvent("abc");
window.addEventListener("abc",function(e){
console.log(e)
console.log(e.dataTransfer)
})
window.dispatchEvent(event)