
function verifyUserInput(elem){
    switch(elem.value){
         case 'help':
               aText.pop(aText.length - 1);               
               aText.push(
                    bashIdentifier + elem.value,
                   '<br><br><strong>help:</strong>',
                   ' - about',
                   ' - skills',                    
                   ' - timeline <br><br>',
                   lastLine
               )
               typewriter(iSpeed);
               break;
         case 'cls':               
               var destination = document.getElementById("text-typing").innerHTML = "";
               iIndex = 0;
               aText.splice(1, aText.length);
               aText.push(lastLine);
               typewriter(0);
               break;

         default:
               aText.pop(aText.length - 1);               
               aText.push(
               bashIdentifier + elem.value,
                   '<br> command not found',
                   helpLine + '<br>',
                   lastLine
               );
               typewriter(iSpeed);
               break;
    }
}