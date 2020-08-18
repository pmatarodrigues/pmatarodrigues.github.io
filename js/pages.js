


function pageAboutMe(elem){
    aText.pop(aText.length - 1);
    aText.push(
         bashIdentifier + elem,
         '<br><br> <strong> about me: </strong>',
         "# ~ I'm a technology lover since I was a little kid",
         "# ~ I like to keep challenging myself and try new things everyday",
         "# ~ people also call me a geek, I don\'t know why ¯\\_(ツ)_/¯ <br>",
         "# ~ I hope you're enjoying my website",
         "# ~ if you have any question, recommendation or just wanna talk, go to my contacts page and hit me up on any of the links<br>",
         "# ~ oh and btw, this is me: ",
         '<img src="assets/personal-pic.png"><br>',
         lastLine
    );
    typewriter(iSpeed);
}


function pageSkills(elem){

    switch(elem){
        case 'skills':
            aText.pop(aText.length - 1);
            aText.push(
                bashIdentifier + elem,
                '<br><br><strong> add flag to select skill: </strong>',
                pageSkillsElement('tech skills', 't'),
                pageSkillsElement('language skills', 'l'),
                "<br>example: <strong>'skills -l'</strong> to select language skills<br><br>",
                lastLine
            );
            typewriter(iSpeed);
            break;
        case 'skills -t':
            aText.pop(aText.length - 1);
            aText.push(
                bashIdentifier + elem,
                '<br><br><strong> technical skills: </strong>',
                skillElement('python', 2),
                skillElement('java', 2),
                skillElement('javascript', 3),
                skillElement('c', 2),
                skillElement('sql', 3),
                skillElement('nodejs', 3),
                skillElement('git', 4),
                skillElement('react_native', 1),
                skillElement('react', 1),
                skillElement('photoshop', 4),
                skillElement('illustrator', 3),
                '<br>',
                lastLine
            );
            typewriter(iSpeed);
            break;
        case 'skills -l':
            aText.pop(aText.length - 1);
            aText.push(
                bashIdentifier + elem,
                '<br><br><strong> language skills: </strong>',
                '<pre> <strong>> portuguese </strong> &#09;&#09; [native] </pre>',
                '<pre> <strong>> english </strong> &#09;&#09; [full professional] </pre>',
                '<br>',
                lastLine
            );
            typewriter(iSpeed);
            break;
    }
}

function skillElement(skillName, skillLevel){
  switch (skillLevel) {
    case 0:
      level = 'skill-level-low';
      break;
    case 1:
      level = 'skill-level-medium-low';
      break;
    case 2:
      level = 'skill-level-medium';
      break;
    case 3:
      level = 'skill-level-medium-high';
      break;
    case 4:
      level = 'skill-level-high';
      break;
    default:
      break;
  }
  return ' <pre> <i class="' + level + '">></i><i> ' + skillName + '</i></pre>';

}

function skillBar(skillName, skillPoints){
    var skillBar = '[!';
    for(var i = 0; i < skillPoints; i++){
        skillBar += '-';
    }
    skillBar += ']';
    var skillFull = ' <pre style="color: #4CAF50;"> <i style="color: white">> ' + skillName + '</i> &#09; ' + skillBar + skillPoints + 'pts </pre>';

    return skillFull;
}
function pageSkillsElement(textButton, flag){
    if(!window.mobile){
        return flag + ' - ' + textButton;
    } else{
        return '<button style="width: 150px" onclick=\"verifyUserInput(\'skills -' + flag + '\');\">' + flag + ' - ' + textButton + '</button>';
    }
}


function pageTimeline(elem){
    aText.pop(aText.length - 1);
    aText.push(
         bashIdentifier + elem,
         '<br><br> <strong> timeline: </strong>',
         timelineElement('Inspire Portugal (WebSummit) &#09;&#09;', '2016'),
         timelineElement('SPEC (Technology Blog) &#09;&#09;&#09;', '2016-2017'),
         timelineElement('CyberCrime and CyberSecurity Seminars&#09;', '2017'),
         timelineElement('Refood Volunteering &#09;&#09;&#09;&#09;', '2017'),
         timelineElement('Web Security - HandsOn (Workshop at ENEI)&#09;', '2018'),
         timelineElement('Internship at Picus &#09;&#09;&#09;&#09;', '2018'),
         timelineElement('Degree in Computer Science &#09;&#09;&#09;', '2016-2019'),
         timelineElement('Master\'s degree in Computer Science &#09;&#09;', '2019-'),
         '<br>',
         lastLine
    );
    typewriter(iSpeed);
}

function timelineElement(elementName, elementYear){
    var skillFull = ' <pre> <strong>> ' + elementName + '</strong> &#09; [' + elementYear + '] &#09;' + '</pre>';

    return skillFull;
}


function pageContacts(elem){

    switch(elem){
        case 'contacts':
            aText.pop(aText.length - 1);
            if(!window.mobile){
                aText.push(
                    bashIdentifier + elem,
                    '<br><br><strong>add flag to select contact: </strong>',
                    ' l - linkedin',
                    ' t - twitter',
                    ' g - github',
                    ' m - email',
                    "<br>example: <strong>'contacts -l'</strong> to open my linkedin",
                    '<br>',
                    lastLine
                );
            } else{
                aText.push(
                    bashIdentifier + elem,
                    '<br><br><strong>add flag to select contact: </strong>',
                    '<button style="width: 150px" onclick="verifyUserInput(\'contacts -l\');">l - linkedin</button>',
                    '<button style="width: 150px" onclick="verifyUserInput(\'contacts -t\');">t - twitter</button>',
                    '<button style="width: 150px" onclick="verifyUserInput(\'contacts -g\');">g - github</button>',
                    '<button style="width: 150px" onclick="verifyUserInput(\'contacts -m\');">m - email</button>',
                    "<br>example: <strong>'contacts -l'</strong> to open my linkedin",
                    '<br>',
                    lastLine
                );
            }

            typewriter(iSpeed);
            break;
        case 'contacts -t':
            aText.pop(aText.length - 1);
            aText.push(
                bashIdentifier + elem,
                '<br><br><strong>opening my twitter page...</strong>',
                '<br>',
                lastLine
            );
            typewriter(iSpeed);
            var win = window.open('https://twitter.com/astrolopitech', '_self');
            win.focus();
            break;
        case 'contacts -l':
            aText.pop(aText.length - 1);
            aText.push(
                bashIdentifier + elem,
                '<br><br><strong>opening my linkedin page...</strong>',
                '<br>',
                lastLine
            );
            typewriter(iSpeed);
            var win = window.open('https://linkedin.com/in/pmatarodrigues', '_self');
            win.focus();
            break;
        case 'contacts -g':
            aText.pop(aText.length - 1);
            aText.push(
                bashIdentifier + elem,
                '<br><br><strong>opening my github page...</strong>',
                '<br>',
                lastLine
            );
            typewriter(iSpeed);
            var win = window.open('https://github.com/pmatarodrigues', '_self');
            win.focus();
            break;
        case 'contacts -m':
            aText.pop(aText.length - 1);
            aText.push(
                bashIdentifier + elem,
                '<br><br><strong>opening your default email client...</strong>',
                'don\'t forget to identify yourself :)',
                '<br>',
                lastLine
            );
            typewriter(iSpeed);
            var win = window.open('mailto:me@pmatarodrigues.com', '_self');
            win.focus();
            break;
    }

}

function pageProjects(elem){
    switch(elem){
        case 'projects':
            aText.pop(aText.length - 1);
            aText.push(
                bashIdentifier + elem,
                '<br><br> <strong> my projects (check them by typing "projects <number>". ex: projects 0): </strong>',
                '<br> <p> [0] SharEat - Shopping list without account.. Stack: ReactJS (FrontEnd) and NodeJS (BackEnd). Hosted on Netlify and Vultr. </p>',
                '<p> [1] Today I Learned - Where I share simple snippets of things I learn and might be useful later. </p>',
                '<p> [2] Boutique Belinha - First E-Commerce Project. Stack: Wordpress with WooComerce. </p>',
                '<p> [3] Add Spaces to Glued PDF Words. Python project with the goal of learning more about Natural Language Processing. </p>',
                '<p> [4] Image Recognition Position System - School Project. Stack: Android (Java) and OpenCV </p>',
                '<br>',
                lastLine
            );
            typewriter(iSpeed);
            break;
        case 'projects 0':
            aText.pop(aText.length - 1);
            aText.push(
                bashIdentifier + elem,
                '<br><br><strong>opening shareat...</strong>',
                '<br>',
                lastLine
            );
            typewriter(iSpeed);
            var win = window.open('https://shareat.netlify.app/', '_blank');
            win.focus();
            break;
        case 'projects 1':
            aText.pop(aText.length - 1);
            aText.push(
                bashIdentifier + elem,
                '<br><br><strong>opening TIL...</strong>',
                '<br>',
                lastLine
            );
            typewriter(iSpeed);
            var win = window.open('https://github.com/pmatarodrigues/today-i-learned', '_blank');
            win.focus();
            break;
        case 'projects 2':
            aText.pop(aText.length - 1);
            aText.push(
                bashIdentifier + elem,
                '<br><br><strong>opening Boutique Belinha...</strong>',
                '<br>',
                lastLine
            );
            typewriter(iSpeed);
            var win = window.open('https://boutiquebelinha.com', '_blank');
            win.focus();
            break;
        case 'projects 3':
            aText.pop(aText.length - 1);
            aText.push(
                bashIdentifier + elem,
                '<br><br><strong>opening space pdf words...</strong>',
                '<br>',
                lastLine
            );
            typewriter(iSpeed);
            var win = window.open('https://github.com/pmatarodrigues/spaces-glued-pdf-words', '_blank');
            win.focus();
            break;
        case 'projects 4':
            aText.pop(aText.length - 1);
            aText.push(
                bashIdentifier + elem,
                '<br><br><strong>opening image recognition position system...</strong>',
                '<br>',
                lastLine
            );
            typewriter(iSpeed);
            var win = window.open('https://github.com/pmatarodrigues/positioning-system-image-recognition', '_blank');
            win.focus();
            break;
    }
}
