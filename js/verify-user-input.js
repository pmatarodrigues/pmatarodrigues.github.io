
function verifyUserInput(elem){       
     if(pageCommands(elem) == false && helpCommands(elem) == false){
          aText.pop(aText.length - 1);               
          aText.push(
               bashIdentifier + elem,
               "<br> command <strong>'" + elem + "'</strong> not found",
               helpLine + '<br>',
               lastLine
          );
          typewriter(iSpeed);
     }
}

function pageCommands(elem){
     switch(elem){
          case 'about':
               pageAboutMe(elem);              
               return true;
          case 'skills':
               pageSkills(elem);
               return true;
          case 'skills -t':
               pageSkills(elem);
               return true;               
          case 'skills -l':
               pageSkills(elem);
               return true;
          case 'timeline':
               pageTimeline(elem);
               return true;
          case 'contacts':
               pageContacts(elem);
               return true;
          case 'contacts -l':
               pageContacts(elem);
               return true;
          case 'contacts -g':
               pageContacts(elem);
               return true;
          case 'contacts -m':
               pageContacts(elem);
               return true;
          default:
               return false;
     }
}

function helpCommands(elem){          
     switch(elem){          
          case 'help':
               aText.pop(aText.length - 1);    
               if(!window.mobile){
                    aText.push(
                         bashIdentifier + elem,
                        '<br><br><strong>help:</strong>',
                        '<pre> <strong>> about </strong> &#9; # these are my motivations and what i like to do</pre>',
                        '<pre> <strong>> skills </strong> &#9; # what i\'m better at and what languages i can speak</pre>',
                        '<pre> <strong>> timeline </strong> &#9; # a list of things i\'ve done in the past that made me be better and learn more</pre>',
                        '<pre> <strong>> contacts </strong> &#9; # if you want to get in touch with me </pre><br><br>',
                        lastLine
                    )
               } else{
                    aText.push(
                         bashIdentifier + elem,
                        '<br><br><strong>help:</strong>',
                        '<pre> <button onclick=\"verifyUserInput(\'about\');\">about</button> &#9; # these are my motivations and what i like to do</pre>',
                        '<pre> <button onclick=\"verifyUserInput(\'skills\');\">skills</button> &#9; # what i\'m better at and what languages i can speak</pre>',
                        '<pre> <button onclick=\"verifyUserInput(\'timeline\');\">timeline</button> &#9; # a list of things i\'ve done in the past that made me be better and learn more</pre>',
                        '<pre> <button onclick=\"verifyUserInput(\'contacts\');\">contacts</button> &#9; # if you want to get in touch with me </pre><br><br>',
                        lastLine
                         
                    );
               }
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