
function verifyUserInput(elem){          
     if(pageCommands(elem) == false && helpCommands(elem) == false){
          switch(elem.value.trim()){
               default:
                    aText.pop(aText.length - 1);               
                    aText.push(
                    bashIdentifier + elem.value,
                    "<br> command <strong>'" + elem.value + "'</strong> not found",
                    helpLine + '<br>',
                    lastLine
                    );
                    typewriter(iSpeed);
                    break;
          }
     }
}

function pageCommands(elem){
     switch(elem.value.trim()){
          case 'about':
               pageAboutMe(elem);              
               break;
          case 'skills':
               pageSkills(elem);
               break;
          case 'skills -t':
               pageSkills(elem);
               break;
          case 'skills -l':
               pageSkills(elem);
               break;
          default:
               return false;
     }
}

function helpCommands(elem){          
     switch(elem.value.trim()){          
          case 'help':
               aText.pop(aText.length - 1);               
               aText.push(
                    bashIdentifier + elem.value,
                   '<br><br><strong>help:</strong>',
                   ' - about',
                   ' - skills',                    
                   ' - timeline',
                   ' - contacts <br><br>',
                   lastLine
               )
               typewriter(iSpeed);
               return true;
          case 'clear':
          case 'cls':               
               document.getElementById("text-typing").innerHTML = "";
               iIndex = 0;
               aText.splice(1, aText.length);
               aText.push(lastLine);
               typewriter(0);
               return true;
          default:
               return false;
          
    }
}