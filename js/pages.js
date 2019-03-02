


function pageAboutMe(elem){
    aText.pop(aText.length - 1);
    aText.push(
         bashIdentifier + elem,
         '<br><br> <strong> about me: </strong>',         
         "# ~ i'm a technology lover since a long time ago, like when MySpace, mIRC and MSN were still a thing",
         "# ~ i like to keep challenging myself, to try new things everyday",
         " as that's how we can improve and get better in everything we do",
         "# ~ people also call me a geek, i don\'t know why ¯\\_(ツ)_/¯ <br>",
         "# ~ i hope you're enjoying my website",
         "# ~ if you have any question, recommendation or just wanna talk, go to my contacts page and hit me up on any of the links<br>",
         "# ~ oh this is me: ",
         '<img src="assets/personal-pic.png">',
         "<br>",
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
                skillBar('java &#09;', 60),
                skillBar('javascript &#09;', 70),
                skillBar('c &#09;&#09;', 50),
                skillBar('sql &#09;&#09;', 60),
                skillBar('nodejs &#09;', 40),
                skillBar('git &#09;&#09;', 50),
                skillBar('react_native', 40),
                skillBar('react &#09;', 30),
                skillBar('photoshop &#09;', 80),
                skillBar('illustrator &#09;', 60),
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
         timelineElement('Inspire Portugal (WebSummit) &#09;', '2016', 'Participation in the WebSummit\' students reunion'),
         timelineElement('SPEC &#09;&#09;&#09;&#09;', '2016-2017', 'Website/blog with news about the advances in the technological world'),
         timelineElement('CyberCrime and CyberSecurity Seminars', '2017', 'Participation in two seminars at IPVC'),
         timelineElement('Refood Volunteering &#09;&#09;&#09;', '2017', 'Volunteering at the Refood organization of Viana do Castelo'),
         timelineElement('Web Security - HandsOn &#09;&#09;', '2018', 'Workshop at the National Meeting of Computer Science Students.'),
         timelineElement('Internship at Picus &#09;&#09;&#09;', '2018', 'Summer Bootcamp promoted by Picus'),
         '<br>',
         lastLine
    );
    typewriter(iSpeed); 
}

function timelineElement(elementName, elementYear, elementDescription){
    var skillFull = ' <pre> <strong>> ' + elementName + '</strong> &#09; [' + elementYear + '] &#09;&#09;' + elementDescription + '</pre>';

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
            var win = window.open('https://twitter.com/astrolopitech', '_blank');
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
            var win = window.open('https://linkedin.com/in/pmatarodrigues', '_blank');
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
            var win = window.open('https://github.com/pmatarodrigues', '_blank');
            win.focus();
            break;    
        case 'contacts -m':
            aText.pop(aText.length - 1);
            aText.push(
                bashIdentifier + elem,
                '<br><br><strong>opening your default email client...</strong>',
                'don\'t forget to say who you are :)',
                '<br>',
                lastLine
            );
            typewriter(iSpeed); 
            var win = window.open('mailto:pmatarodrigues@pm.me', '_self');
            win.focus();
            break;                  
    }

}

