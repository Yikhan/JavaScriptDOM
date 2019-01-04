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

function showPic(whichPic) {
    // change image
    // 如果没有预览区域，则返回true让浏览器自动跳转到新页面显示图片
    if (!document.getElementById("placeholder")) return true;
    var placeholder = document.getElementById("placeholder");
    var source = whichPic.getAttribute("href");
    placeholder.setAttribute("src", source);

    // change the text under image
    // check if the element we try to manipulate exists
    if (document.getElementById("description")) {
        var description = document.getElementById("description");
        var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
        description.innerHTML = text;
    }
    // 最后返回false防止浏览器跳转到新页面打开图片
    return false;
}

function countBodyChildren() {
    var bodyElement = document.getElementsByTagName("body")[0];
    console.log("There are " + bodyElement.childNodes.length + " elements in the page");
    //alert(bodyElement.childNodes);
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
            // return false if showPic runs successfully
            return showPic(this);
        }
    }
}

function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function preparePlaceholder() {
    // check function support of browser
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("image-gallery")) return false;

    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.gif");
    placeholder.setAttribute("alt", "My Image Gallery");

    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var desText = document.createTextNode("Choose an image");
    description.appendChild(desText);
    // insert new node
    var gallery = document.getElementById("image-gallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
