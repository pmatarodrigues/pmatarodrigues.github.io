function $(elid){
    return document.getElementById(elid);
}

var cursor;
window.onload = init;

function init(){
    cursor = $("cursor");				
    cursor.style.left = "0px";
}

function replaceText(txt){
    return txt.replace(/\n/g, "<br />");
}

function writeit(from, e){
    if(e.keyCode == 13){        
        verifyUserInput(from);
    }    
    
    e = e || window.event;
    
    var inputBox = $("writer");
    var tw = from.value;
    inputBox.innerHTML = replaceText(tw);            
}