var docu = new DOMParser().parseFromString('<xml></xml>', 'application/xml')
        
        var cdata = docu.createCDATASection('Some <CDATA> data & then some');
        
        docu.getElementsByTagName('xml')[0].appendChild(cdata);
        
        alert(new XMLSerializer().serializeToString(docu));
        // Displays: <xml><![CDATA[Some <CDATA> data & then some]]></xml>