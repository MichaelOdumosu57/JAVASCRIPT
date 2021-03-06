var newul = document.createElement("ul");
document.body.appendChild(newul)
var note = document.querySelector("ul");

// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

// Let us open version 4 of our database
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = function(event) {
    console.log(event)
  note.innerHTML += '<li>Error loading database.</li>';
};
 
DBOpenRequest.onsuccess = function(event) {
    console.log(event)
  note.innerHTML += '<li>Database initialised.</li>';
    
  // store the result of opening the database in the db variable. This is used a lot later on, for opening transactions and suchlike.
  db = DBOpenRequest.result;
};