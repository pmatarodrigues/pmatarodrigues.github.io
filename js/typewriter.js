function typewriter(speedValue){

    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("text-typing");

    while ( iRow < iIndex ) {
         sContents += aText[iRow++] + '<br/>';
    }

    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + prompt + '<span class="cursor"></span>';
    

    if ( iTextPos++ == iArrLength ) {
         iTextPos = 0;
         iIndex++;
         if ( iIndex != aText.length ) {
              iArrLength = aText[iIndex].length;
              setTimeout("typewriter()", 50);          
         }
    } else {
         setTimeout("typewriter()", speedValue);
    }

    // GET ELEMENT INPUT WHEN PRESS ENTER
    var elem = document.getElementById("input-text");
    elem.focus();
    elem.select();
    elem.onkeyup = function(e){
        if(e.keyCode == 13){
            verifyUserInput(elem);
        }
    }
}