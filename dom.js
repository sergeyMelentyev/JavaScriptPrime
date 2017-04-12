/* SINGLE ELEM SELECTOR */
(function () {
    "use strict";
    var elem = document.getElementById('id');
    var elem = document.querySelector('div p');
    var elem = document.querySelector("[data-role='p']");
})();

/* COLLECTIONS SELECTOR */
(function () {
    "use strict";
    // html collection, methods .length and .item(index)
    var elem = document.getElementsByTagName('p');      // life collection
    var elem = document.getElementsByClassName('name');
    // node elements collection, methods .length and .item(index)
    var elem = document.querySelectorAll('div p');
    var elem = document.querySelectorAll('*[class="name"]');    // any elems with same class name
    var array = [].slice.call(elem);        // get array from NodeList object
})();

/* GET NODE ELEMENT */
(function () {
    "use strict";
    var elem = document.getElementById('id');
    var childNodesName = [];
    if (elem.hasChildNodes()) {
        var children = elem.childNodes;      // .parentNode
        for (var i = 0; i < children.length; i++)
            childNodesName.push(children[i].nodeName);
    }
})();

/* GET AND SET ATTRIBUTE */
(function () {
    "use strict";
    var atr = document.getElementById('one').getAttribute("data-role");
    atr.setAttribute("data-role", atr);
    var img = document.querySelector('img'); 
    img.setAttribute("src", "url");
})();

/* FRAGMENT, NODE ELEMENT, TEXT NODE */
(function () {
    "use strict";
    var fragment = document.createDocumentFragment();
    var p = document.createElement('p');
    var span = document.createElement('span'); span.innerText = 'text';
    p.appendChild(span);
    fragment.appendChild(p);
    document.body.appendChild(fragment);

    var oldNode = document.getElementById('id');
    var newNode = oldNode.cloneNode(true);
    oldNode.parentNode.replaceChild(newNode, oldNode);

    var elements = document.getElementsByTagName('p');      // add to the list of elems
    elements[0].parentNode.appendChild(p);

    var div = document.getElementById('id');
    var elems = div.getElementsByTagName('p');
    var newElem = document.createElement('span');
    div.insertBefore(newElem, elems[3]);

    var text = document.createTextNode("text");
    var p = document.createElement('p').appendChild(text);
})();

/* DELETE NODE ELEMENT */
(function () {
    "use strict";
    var one = document.getElementById('one');
    var set = one.getElementsByTagName('p');
    one.removeChild(set[0]);
})();

/* ADD ID, CLASS IDENTIFIER */
(function () {
    "use strict";
    elem.setAttribute('id', 'id-name');
    elem.setAttribute('class', 'class-name');
    elem.classList.add('class-name');       // .remove .toggle
})();

/* CONTENT MANIPULATION */
(function () {
    "use strict";
    elem.innerHTML = "";        // text in 'elem' plus all inner tags
    elem.textContent = "";      // only text in 'elem' plus text from all inner tags
})();

/* ADD CALLBACKS TO ARRAY OF ELEMS */
(function (forEach) {
    "use strict";
    var elem = document.querySelectorAll('div p');
    var array = [].slice.call(elem);
    array.forEach(namedFunc);        // pass each obj from array to namedFunc as an arg
    function namedFunc(item) {      // add event listener for each object
        item.addEventListener("click", function (event) {
            event.preventDefault();
            var atr = item.getAttribute("data-image-url");    // get any attribute
            item.setAttribute("src", atr);      // set any attribute
            item.textContent = "any text";      // set any content text
        });
    }
})(window);
(function (forLoop) {
    "use strict";
    var elems = document.querySelectorAll('name');
    for (var i = 0; i< elems.length; i++) {
        this.style.color = "green";     // this key word will target only clicked element
    }
})(window);

/* STYLES */
(function () {
    "use strict";

    /*
        { box-sizing: border-box }        // padding and border will be included in the width

    */

    /* intrinsic ration based on content aspect ration
        .container { position: relative; padding-bottom: 56.25%; height: 0; }
        .content { position: absolute; width: 100%; height: 100%; top: 0; left: 0; }
    */

    /* small resolution styles first, then
        @media (min-width: 400px) {}
        @media (min-width: 600px) {}
    */
    
    elem.style.backgroundColor = 'red';
    elem.setAttribute('style', 'background-color: red; color: white;');
})();

/* POPUP OVERLAY */
(function (global) {
    "use strict";
    function displayPopup() {
        var overlay = document.createElement('div').setAttribute('id', 'overlay');
        document.body.appendChild(overlay);
        overlay.onclick = restore;
    }
    function restore() {
        document.body.removeChild(document.getElementById('overlay'));
    }
    global.onload = function () {
        displayPopup();
    };
})(window);

/* EVENTS */
(function () {
    "use strict";
    var div = document.getElementById('btn-wrapper');
    if (document.addEventListener) {    // W3C
        div.addEventListener('click', myHandler, false);
    } else if (document.attachEvent) {  // IE
        div.attachEvent('onclick', myHandler);
    } else {        // last resort
        div.onclick = myHandler;
    }

    function myHandler(e) {
        var src, parts;
        e = e || window.event;      // get event
        src = e.target || e.srcElement; // get source element

        /*
            <div id="btn-wrapper"> one element for all buttons
            if (src.nodeName.toLowerCase() !== "button")
                return;
        */

        parts = src.innerHTML.split(': ');      // actual logic
        parts[1] = parseInt(parts[1], 10) + 1;
        src.innerHTML = parts[0] + ': ' + parts[1];

        if (typeof e.stopPropagation === "function")    // prevent bubbling
            e.stopPropagation();
        if (typeof e.cancelBubble !== "undefined")
            e.cancelBubble = true;

        if (typeof e.preventDefault === "function")     // prevent default action
            e.preventDefault();
        if (typeof e.returnValue !== "undefined")
            e.returnValue = false;
    }
})();

/* PERSISTENCE */
(function () {
    "use strict";
    // Web Storage API sessionStorage and localStorage, key-value pairs, value in string format,
    // indexed array like object

    if (window.sessionStorage && window.localStorage) { /* check if API is supported */ }

    var item = { id: "5456098", name: "Samsung S8", dateView: new Date() };
    localStorage.setItem (item.id, JSON.stringify(item));
    var key, value;
    for (var i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i); value = JSON.parse(localStorage.getItem(key));
        if (Date.parse(value.dateView) < (new Date() - 1000*60*60*24*30))
            localStorage.removeItem(key);
    }

    // IndexedDB API, NOSQL storage, key-value pairs, value can be complex structured obj
    // work with request, pass callback func for answer via DOM notification
    window.indexedDB = window.indexedDB || window.mozIndexedDB  // check if API is supported
            || window.webkitIndexedDB || window.msIndexedDB;

    var db;
    var request = window.indexedDB.open("name", 1); // open 'name' database, ver 1.0
    request.onerror = function(event) { /* error logic */ };
    request.onsuccess = function(event) { db = event.target.result; };

})();

/* BACKGROUND THREAD */
(function () {
    "use strict";
    var ww = new Worker('ww.js');
    ww.onmessage = function (event) {
        // subscribe to the event and receive updates via 'event.data'
    };
})();
(function () {
    "use strict";
    postMessage("post event before start");
    // logic here
    postMessage("post event before end");
})();       // ww.js file

/* SEND REQUEST TO THE SERVER */
(function () {
    "use strict";

    // XMLHttpRequest + $.ajax
    jQuery.ajax();

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {      // provide a callback to the event
        if ((xhr.readyState === 4) && (xhr.status === 200)) {
            document.body.innerHTML += '<div>' + xhr.responseText + '</div>';
        }

    };
    xhr.open("GET", "page.html", true);     // method, url, asynchronous
    xhr.send("");

    // WebSocket
    // browser send GET request, if server response success, TCP connection stay open
    // each side can send data without headers and metadata
    var ws = new WebSocket("ws://site.com/demo");
    ws.onopen = function() { /* success callback, connection established */ };
    ws.onclose = function() { /* closing callback, connection ended */ };
    ws.onmessage = function(data) { /* receiving data callback */ };
})();

/* JQUERY */
(function (global) {
    "use strict";
    var $ = global.jQuery;

    $('elem').keypress(function (event) {
        // receive event each time key pressed
    });

    var windowHeight = $(window).height();
    $('selector').on('click', function () {
        $('body').scrollTop(windowHeight);
    });

    $(window).scroll(function () {
        var div = $('div').height();
        if ($(window).scrollTop() > (div / 4))
            $('selector').animate({top: div + 100}, 1000);
    });

})(window);

/* UNIT TESTING */
(function () {
    "use strict";
    // QUnit модульные тесты для каждой функции
})();
