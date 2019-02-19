function locationHashChanged(e) {
  if (location.hash === '#Basic_example') {
	console.log(e);
  }
}

window.addEventListener('hashchange', locationHashChanged);
