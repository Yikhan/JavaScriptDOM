function showPic(which_pic) {
    // change image
    // check if the element we try to manipulate exists
    if (!document.getElementById("placeholder")) return false;
    var source = which_pic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);

    // change the text under image
    // check if the element we try to manipulate exists
    if (document.getElementById("description")) {
        var description = document.getElementById("description");
        var text = which_pic.getAttribute("title");
        description.firstChild.nodeValue = text;
    }
   
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    console.log("There are " + body_element.childNodes.length + " elements in the page");
    //alert(body_element.childNodes);
}

function prepareGallery() {
    // check function support of browser
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("image-gallery")) return false;
    
    var gallery = document.getElementById("image-gallery");
    var links = gallery.getElementsByTagName("a");
    for (var i=0; i<links.length; i++) {
        links[i].onclick = function() {
            showPic(this);
            return false; // prevent page jump when click on the href
        }
    }
}
// an effective way to load multiple functions when page is loaded
function addLoadEvent(func) {
    var old_onload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
            old_onload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);