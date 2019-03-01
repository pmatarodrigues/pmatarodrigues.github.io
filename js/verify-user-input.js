
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
          case 'timeline':
               pageTimeline(elem);
               break;
          case 'contacts':
               pageContacts(elem);
               break;
          case 'contacts -l':
               pageContacts(elem);
               break;
          case 'contacts -g':
               pageContacts(elem);
               break;
          case 'contacts -m':
               pageContacts(elem);
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
                   '<pre> <strong>> about </strong> &#9; # these are my motivations and what i like to do</pre>',
                   '<pre> <strong>> skills </strong> &#9; # what i\'m better at and what languages i can speak</pre>',
                   '<pre> <strong>> timeline </strong> &#9; # a list of things i\'ve done in the past that made me be better and learn more</pre>',
                   '<pre> <strong>> contacts </strong> &#9; # if you want to get in touch with me </pre><br><br>',
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