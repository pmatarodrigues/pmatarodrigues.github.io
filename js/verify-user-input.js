
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
          case 'whoami':
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
          case 'contacts -t':
               pageContacts(elem);
               return true;
          case 'contacts -g':
               pageContacts(elem);
               return true;
          case 'contacts -m':
               pageContacts(elem);
               return true;
          case 'blog':
               var win = window.open ('blog','_self');
               win.focus();
               return true;
          case 'projects':
                pageProjects(elem);
                return true;
          default:
               return false;
     }
}

function helpCommands(elem){
     switch(elem){
          case 'help':
               aText.pop(aText.length - 1);
               aText.push(
                    bashIdentifier + elem,
                    '<br><br><strong>help:</strong>',
               );
               if(window.mobile){
                    aText.push(
                         '# ~ i can see you\'re using a mobile device so you\'ll be prompted with some buttons',
                         '# ~ all buttons (green border) are clickable<br>'
                    );
               }
               aText.push(
                    helpPage('whoami', '# these are my motivations and what i like to do'),
                    helpPage('skills', '# what i\'m better at and what languages i can speak'),
                    helpPage('timeline', '# a list of things i\'ve done in the past that made me be better and learn more'),
                    helpPage('contacts', '# if you want to get in touch with me'),
                    helpPage('blog', '&#9; # my opinion about some topics and news related to technology'),
                    helpPage('projects', '# some of the side projects and scripts i\'ve done recently'),
                    '<br>',
                    lastLine
               );
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


function helpPage(textButton, descriptionButton){
     if(!window.mobile){
          return '<pre> <strong>>' + textButton + '</strong> &#9; ' + descriptionButton + '</pre>';
     } else{
          return '<pre> <button onclick=\"verifyUserInput(\'' +  textButton + '\');\">' + textButton + '</button> &#9; ' + descriptionButton + '</pre>';
     }
}
