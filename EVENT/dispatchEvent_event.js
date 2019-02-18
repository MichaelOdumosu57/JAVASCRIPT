var elem = document.querySelector('body')

// var event = new Event('build');

var event = new CustomEvent('build', { detail: "some stuff" });
function eventHandler(e) {
  console.log(e);
}

elem.addEventListener('build', eventHandler, false);

elem.dispatchEvent(event);
