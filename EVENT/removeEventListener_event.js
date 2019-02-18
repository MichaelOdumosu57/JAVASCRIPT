var body = document.querySelector('body')
var div_tem_0_i = document.createElement("div")
var div_att_0_i = document.createAttribute("id")
div_att_0_i.value = 'click-target'
div_tem_0_i.setAttributeNode(div_att_0_i)
div_tem_0_i.style.height = '60px'
div_tem_0_i.style.width  = '60px'
div_tem_0_i.style.backgroundColor = 'blue'
body.appendChild(div_tem_0_i)

var div_tem_1_i = document.createElement("div")
var div_att_1_i = document.createAttribute("id")
div_att_1_i.value = 'mouse-over-target'
div_tem_1_i.setAttributeNode(div_att_1_i)
div_tem_1_i.style.height = '60px'
div_tem_1_i.style.width  = '60px'
div_tem_1_i.style.backgroundColor = 'red'
body.appendChild(div_tem_1_i)

var clickTarget = document.getElementById('click-target')
var mouseOverTarget = document.getElementById('mouse-over-target')
var toggle = false;

function makeBackgroundYellow() {
    'use strict';

    if (toggle) {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'yellow';
    }

    toggle = !toggle;
}

clickTarget.addEventListener('click',
    makeBackgroundYellow,
    false // if this is made true you need the exact same arguments to remove the listener
);

mouseOverTarget.addEventListener('mouseover', function () {
    'use strict';

    clickTarget.removeEventListener('click',
        makeBackgroundYellow,
        {passive:false}
    );
});