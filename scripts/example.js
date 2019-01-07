function insertTag(tag) {
    //tag is the main content in <> which a html label
    //for example: <p> where tag = p
    return function(text) {
        var tag_start = "<" + tag + ">";
        var tag_end = "</" + tag + ">";
        var str = tag_start + text + tag_end;
        document.write(str);
    }
}

var insertParagraph = insertTag("p");

window.onload = function() {
    var test_div = document.getElementById("testdiv");
    var para = document.createElement("p");
    // var info = "nodeName:" + para.nodeName + " nodeType:" + para.nodeType;
    test_div.appendChild(para);
    
    var txt = document.createTextNode("Hello world");
    para.appendChild(txt);

    var para = document.getElementById("para");
    para.style.color = "red";
    para.style.font = "3em Times, serif";
}

