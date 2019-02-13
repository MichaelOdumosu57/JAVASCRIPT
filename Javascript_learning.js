https://developer.mozilla.org/en-US/docs/Web/JavaScript


JavaScript Arguments
when you have a function the arguments keyword gives you access to every parameter the code passed to the function
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);

they are available with non-arrow functions
typeof(arguments) = "object"








you can change them

function func1(a, b, c) {
	arguments[0] = 324
  console.log(arguments[0]);
  // expected output: 324


}

func1(1, 2, 3);



to make an array
var args = Array.prototype.slice.call(arguments);
// Using an array literal is shorter than above but allocates an empty array
var args = [].slice.call(arguments);
var args = Array.from(arguments);
var args = [...arguments];


useful when the amount of parameters are unknown


properties
arguments.callee
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee
ES5 does not use this in strict mode

Using arguments.callee in an anonymous recursive function
function create() {
   return function(n) {
      if (n <= 1)
         return 1;
      return n * arguments.callee(n - 1);
   };
}

var result = create()(5);

must use  arguments.callee
function createPerson(sIdentity) {
    var oPerson = new Function('alert(arguments.callee.identity);');
    oPerson.identity = sIdentity;
    return oPerson;
}

var john = createPerson('John Smith');

john();
can't access ' sIdentity in this case




arguments[@@iterator]
function f() {
  // your browser must support for..of loop
  // and let-scoped variables in for loops
  for (let letter of arguments) {
    console.log(letter);
  }
}
f('w', 'y', 'k', 'o', 'p');
this is an array iterator object


Rest, default, and destructured parameters
when you dont have it a change to arguments chages the parameter
function func(a) {
  arguments[0] = 99; // updating arguments[0] also updates a
  console.log(a);
}
func(10); // 99


you must have
n func(a = 55) or  func(...a) to keep the value
but if the paramater was a variable and not a value its not affected no matter



arguments.length
length of the argument



to prettify your json
JSON.stringify(   [JSON],null,2   )



JavaScript pointers

they are really references

https://medium.com/@naveenkarippai/learning-how-references-work-in-javascript-a066a4e15600




read about Classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
https://gist.github.com/WebReflection/5282385

6.0.0
Full support 4.0.0Disabled
Disabled From version 4.0.0: this feature is behind the --use_strict runtime flag.
Full support 5.0.0Disabled
Disabled From version 5.0.0: this feature is behind the --harmony runtime flag.



js ...args when given as an array with the same name, would seperate as
seperate parameters on function call this allows

var args = [1,2,3,4,5]
function a(...args){}
to be equal to
a(1,2,3,4,5)leading to 5 arguments parameters





The DOM



there are two HTML docs an XML docs for other like data
the document is an guiding object on how to manipulate the target content


document.all
    
    returns an HTMLALLCollection representing the whole documnet
    
    to use
    document.all()
    
    specs
        read-only
        
document.anchors

    returns a list of anchors in the document
    
    to use
    document.anchors
    
    specs
        read-only
    
document.body
    
    Returns the <body> or <frameset> node of the current document.
    
    to use
        document.body
    
    specs
    
document.characterSet
    
    returns characterSet docs is using

    to use
        document.characterSet
    
    specs
        read-only
        
document.contentType

    Returns the Content-Type from the MIME Header of the current document.
        

    to use
        heading
    
    specs
        read-only

document.doctype
    
    Retnrus Document Type Definition (DTD) of current document

    to use
        heading
    
    specs
        read-only
        
.documentElement

    returns the element that is the direct child of the document

    to use
        heading
    
    
    sample
        <html lang ='en-US' dir='ltr' class>
            <head></head>
            <body></body>
        </html>
    
    specs
        read only
        
        
.documentURI

    returns document location as a string
    
    to use
        heading
    
    
    sample
        "https://developer.mozilla.org/en-US/docs/Web/API/Document"

    
    specs
        readonly
        
.embeds

    returns a list of the <embed> in the document


    to use
        heading
    
    
    sample

    
    specs
        read only
        
.fonts

    returns the experimental FontFaceSet interface of the doc
    
    to use
        heading
    
    
    sample
        (returns a promise)

    
    specs


.forms

    returns the <form>'s in the element

    to use
        heading
    
    
    sample
        HTMLCollection [
            <form></form>,
            <form></form>,
            <form></form>,
        ]

    
    specs
        read only,
   
   
    
.head

    returns doc head

    to use
        heading
    
    sample
        <head></head>

    specs
        read only
        

.images

    returns all images in the doc
    
    to use
        heading
    
    
    sample
        HTMLCollection [img]

    
    specs
            read only
    
.implementation

    returns DOM implementation with the current document
    
    to use
        heading
    
    
    sample
        DOMImplementation {}

    
    specs
        read only
        
.lastStyleSheetSet
    
    returns last enabled stylesheet

    to use
        heading
    
    
    sample

    
    specs
        read only
        
.links
    
    returns all hyperlinks in the doc
    
    to use
        heading
    
    
    sample
        HTMLCollection ()[a,a,a]
    
    specs
        read only

.plugins

    retuns list of availble plugins, different from modules

    to use
        heading
    
    
    sample
        HTMLCollection ()[]
    
    specs
        read only
    
.scripts

    retuns scripts on doc.

    to use
        heading
    
    
    sample
        HTMLCollection ()[]
    
    specs
        read only
        
.scrollingElement

    retuns the element that scrolls the doc
   
    to use
        heading
    
    
    sample
        <html></html>

    
    specs
        read only
    

.selectedStyleSheetSet
    
    returns what is in use

    to use
        heading
    
    
    sample

    
    specs
        read only
        
.styleSheetSets

    rerturns all stylesheets in the document
    
    to use
        heading
    
    
    sample

    
    specs
        read only
        
.visibilityState

    retuns visible state of doc, val
        

    to use
        heading
    
    
    sample
        visible,hidden, prerender, unloaed

    
    specs
        read only
        
        
the Parent Node interface extends the document interface
REFER THERE FOR DETAILS ON HOW TO ACCESS THE OBJECTS
    
    
HTML Document

document.cookie

    returns the cookie of the document, this is not a string
    
    to use
        heading
    
    
    sample
        "dwf_contrib_beta=False; dwf_sg_task_completion=False; _ga=GA1.2.1149063120.1549561678"
    
    specs
        read only
        
        
.defaultView

    returns a reference tothe window object
    
    to use
        heading
        
    sample
        Window
        
    specs
        read only
        
.designMode

    gets/sets ability to design the document
    
    
    to use
        heading
        
    sample
        "on"
        
    specs
        read only
        
.dir

    gets/sets ability to invert the the document


    to use
        heading = ('rtl' || 'ltr')
        
    sample
        'ltr'
        
    specs
        read only
        
.domain

    gets/sets domain of the current document

    to use
        heading
    
    
    sample
        return 'developer.moziila.org'

    
    specs
        read only
        
.lastModified

    retuns last modified date
    
    to use
        heading
    
    
    sample
        "02/11/2019 16:10:28"
    
    specs
        read only
        
        
.location

    returns the URI object of the current element

    to use
        heading
    
    
    sample

    
    specs
        read only
        
.readyState


    to use
        heading
    
    
    sample
        

    
    specs
        read only
        
.referrer

    returns URIobject of the page that is lnked to the page


    to use
        heading
    
    
    sample
        

    
    specs
        read only
        
.title

    returns title of the document
    
    to use
        heading
    
    
    sample

    
    specs
        read only
        
.URL

    returns document URL as a string
    
    to use
        heading
    
    
    sample
        "https://developer.mozilla.org/en-US/docs/Web/API/Document"

    
    specs
        read only
    
    


Document or ShadowRoot (only in chrome)

.activeElement
    
    return element within the shadowtree that has focus

    to use
        heading
    
    
    sample

    
    specs
        read only
        
.fullscreenElement

    return element currently in fullscreen mode
  
    to use
        heading
    
    
    sample
        head to youtube type in fullscreen and open up the console

    
    specs
        read only
        
.styleSheets

    returns all stylesheets in explicitly linked or embeded in a document
 

    to use
        heading
    
    
    sample
        StyleSheetList{}

    
    
    specs
        read only
    
        .experimental
        
            document.compatMode
            
                indicates how doc is rendered
            
                to use
                    document.compatMode
                
                specs
                    read-only
                    experimental
                
                
            .mozSyntheticDocument
            
                returns true sythethic such as a standalone image or video
            
                to use
                    heading
                
                
                sample
            
                
                specs
                    read only
                    experimental
                            
            .policy
            
                returns Policy API for policies applied to a document
                
                to use
                    heading
                
                
                sample
                    na
                
                specs
                    read only
                    experimental
                

        
    
    
    .
    Event handlers
    
.onfullscreenchange
.onfullscreenerror
.onvisibilitychange

        extension.
        GlobalEventHandlers
        
        
            .onabort
            .onblur
            .onerror
            .onfocus
            .oncancel
            .oncanplay
                retuns null or a function
            .oncanplaythrough
            .onchange
            .onclick
            .onclose
            .oncontextmenu
            .oncuechange
            .ondblclick
            .ondrag
            .ondragend
            .ondragenter
            .ondragexit
            .ondragleave
            .ondragover
            .ondragstop
            .ondrop
            .ondurationchange
            .onemptied
            .onended
            .ongotpoitnercapture
            .oninput
            .oninvalid
            .onkeydown
            
                event for when a key is pressed, this is how hackers keylog
                    the
                
                to use
                    document.querySelector('input').onkeydown
                
                
                sample
                    input.onkeydown = logKey;
                    
                    function logKey(e) {
                      log.textContent += ` ${e.code}`;
                    }
                    this is how you see what key is pressed
                
                specs
                    read only
                    
                    
            .onkeypress
                deprecated
            .onkeyup
            
                same sample template for onkeydown however when you hold the key its not
                recorded, it is only recorded when you lift up the key
            
            .onload
            
                when the window, XML HTTPRequest has finishe loading
                
                    to use
                        heading
                    
                    
                    sample
                      function load() {
                        console.log("load event detected!");
                      }
                      window.onload = load;
                   
                    specs
                        
            .onloadeddata
            .onloadedmetadata -- check this
            .onloadend
                when progress has stopped on loading a resource
            .onloadstart
                when progress has starte on loading a resource
            .onlostpointercapture
            .onmousedown
            .onmouseenter
            .onmouseleave
            .onmousemove
            .onmouseout
            .onmouseover
            .onmouseup
            .onwheel
            .onpause
            .onplaying
            .onpointerdown
            .onpointermove
            .onpointerup
            .onpointercancel
            .onpointerout
            .onpointerenter
            .onpointerleave
            .onreset
            .onresize
            .onscroll
            .onselect
            .onselectstart
            .onselectionchange
            .onsubmit
            .ontransitioncancel
            .ontransitionend
            
.
Methods

.adoptNode

    to use
        node = document.adoptNode(externalNode);
    
    sample
        var iframe = document.querySelector('iframe');
        var iframeImages = iframe.contentDocument.querySelectorAll('img');
        var newParent = document.getElementById('images');
        
        iframeImages.forEach(function(imgEl) {
          newParent.appendChild(document.adoptNode(imgEl));
        });

    
    specs
        to clone a ext. doc node use document.importNode()
        
.createAttribute
        
        returns an attrbiute node, DOM  does not care when you add attr's like this

        to use
            attribute = document.createAttribute(name)
        
        
        sample
            var node = document.getElementById("div1");
            var a = document.createAttribute("my_attrib");
            a.value = "newVal";
            node.setAttributeNode(a);
            console.log(node.getAttribute("my_attrib")); // "newVal"
        
        specs
            read only
        
        compatibilty
            yes
    
    
.createCDATASection
    
    returns a CDATASection node
    

    to use
        var CDATASectionNode = document.createCDATASection(data);
    
    
    sample
        var docu = new DOMParser().parseFromString('<xml></xml>', 'application/xml')
        
        var cdata = docu.createCDATASection('Some <CDATA> data & then some');
        
        docu.getElementsByTagName('xml')[0].appendChild(cdata);
        
        alert(new XMLSerializer().serializeToString(docu));
        // Displays: <xml><![CDATA[Some <CDATA> data & then some]]></xml>

    
    specs
        only works with xml
        
        
    compatibilty
        no
        
    files
        DOM/createCDATASection_dom.js
        
.createComment()
    return a comment node

    to use
        CommentNode = document.createComment(data);
    
    
    sample
        var docu = new DOMParser().parseFromString('<xml></xml>',  'application/xml');
        var comment = docu.createComment('This is a not-so-secret comment in your document');
        
        docu.getElementsByTagName('xml')[0].appendChild(comment);
        
        alert(new XMLSerializer().serializeToString(docu));

    
    specs
        docu is a different doc from what  u see in the page
        
    compatibilty
        no
        
    files
        createComment_dom.js

.createDocumentFragment()

    creates an empty Document fragment. they are DOM nodes that stay in memory an are replaced by it kids once appended to the doc. better performance
 
    to use
        var fragment = document.createDocumentFragment();
    
    
    sample
        var element  = document.getElementById('ul'); // assuming ul exists
        var fragment = document.createDocumentFragment();
        var browsers = ['Firefox', 'Chrome', 'Opera',
            'Safari', 'Internet Explorer'];
        
        browsers.forEach(function(browser) {
            var li = document.createElement('li');
            li.textContent = browser;
            fragment.appendChild(li);
        });
        
        element.appendChild(fragment)
        
    
    specs
        read only
        
    compatibilty
        all execept Samsung internet
        
    files
        folder: createDocumentFragment
        

.createElement()

    creates HTML element, or HTMLUnknownElement if !tagName in known[]
    you can customize them too
    

    to use
        var element = document.createElement(tagName[, options]);
        yield
        tagName type of element, don't use qualifed names
            it converts to lowercase
        options
            allows for customization refer to options in the folder in files
        
    
    
    sample
          var newDiv = document.createElement("div");
          // and give it some content
          var newContent = document.createTextNode("Hi there and greetings!");
          // add the text node to the newly created div
          newDiv.appendChild(newContent);

    
    specs
        customElements is a registry
        
    compatibilty
        basic: yes but samsung internet
        options:no
        
        
    files
        folder:createElement
        
        
        
.createElementNS()
        
        creates an element with the given namespace
 
 
     to use
        var element = document.createElementNS(namespaceURI, qualifiedName[, options]);
            namespaceURI is
                Important Namespace URIsSection
                    HTML
                    http://www.w3.org/1999/xhtml
                    SVG
                    http://www.w3.org/2000/svg
                    MathML
                    http://www.w3.org/1998/mathml
        qualifiedName- the element
            options for compatbiliy can provide strings instead of object
    
    
    sample

    
    specs
        
        
    compatibilty
        yes
        
    files

    
.createTextNode()
    creates a textnode this needs to be added to an element
    
    
    
    to use
        var text = document.createTextNode(data);
    
    
    sample
        to use
    
    specs
        
        
    compatibilty
        all execpt
        
    files
        files: createTextNode.html
    
    
    
    
tempalte

    to use
        heading
    
    
    sample

    
    specs
        read only
        
    compatibilty
        no
        
    files
            
     
.createExpression()
    Compiles an XPathExpression which can then be used for (repeated) evaluations.
        
        
.createNSResolver()
    Creates an XPathNSResolver object.
    
.evaluate()
    Evaluates an XPath expression.
     
    .
    HTML document ext
    
    .close()
        close a document stream for writing
        
    .execCommand()
        on an editable document, executes the command
        
    .getElementsByName()
    .hasFocus()
        true if focues is in the doc
    .open()
        opens a doc stream for writing
        
    .queryCommandEnabled()
        true if formatting command can be executed on the current range.
    
    .queryCommandState()
        Returns true if the formating command has been executed on the current range.
        
    .queryCommandSupported()
        Returns true if the formating command is supported on the current range.
        
    .write
        wrties text in a document
        
    .writeln
        writes a ln of text in a document

        .
        shadowRoot
        
            .getSelection()
                
                returns an object about the user text selection or an object
                
                to use
                    heading
                
                
                sample
                    Selection{...}
            
                
                specs
                    
                    
            .elementFromPoint()
            .elementsFromPoint()
            
                returns the top element at the specified coorinates
                    
                to use
                    ([x],[y])
                
                
                sample
                    
            
                
                specs
                    read only
                            
    
    
            
                
            

tempalte

    to use
        heading
    
    
    sample

    
    specs
        read only
        
    
    
            
        
        
        
         
     
     
     
     
     
     
     
     
     
     
        
.requestStorageAccess()

    performs negiotiation with the browser to gain access to localStorage. after 24 hours
    it must ask the user
    
    its tough with this dynamic limiting
    
    set dom.storage_access.auto_grants in about:config to false in mozilla so it can prompt everytime
    
    change dom.storage_access.max_concurrent_auto_grants, to decide when the method has to ask the user
    
    
    
    to use
        heading
    
    
    sample
        document.requestStorageAccess().then(
          () => { console.log('access granted') },
          () => { console.log('access denied') }
        );

    
    specs
        experimental
        

        
        
        



    

    
    
    
        
template

    to use
        heading
    
    
    sample

    
    specs
        read only
        
    
    
