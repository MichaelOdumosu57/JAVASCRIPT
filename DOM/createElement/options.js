// Create a class for the element
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Always call super first in constructor
    super();

    // constructor definition left out for brevity
    
  }
}

// Define the new element
customElements.define('expanding-list', ExpandingList, { extends: "ul" });
let expandingList = document.createElement('ul', { is : 'expanding-list' })