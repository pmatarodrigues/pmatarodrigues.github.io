


function pageAboutMe(elem){
    aText.pop(aText.length - 1);
    aText.push(
         bashIdentifier + elem,
         '<br><br> <strong> about me: </strong>',
         "I've been a technology lover for a long time, since I was a little kid, when MySpace, mIRC and MSN were still a thing",
         "I like to keep challenging myself, to try new things everyday as that's how we can improve and get better in everything we do<br><br>",
         lastLine
    );
    typewriter(iSpeed); 
}


function pageSkills(elem){

    if(elem == 'skills'){
        aText.pop(aText.length - 1);
        aText.push(
            bashIdentifier + elem,
            '<br><br><strong> add flag to select skill: </strong>',
            ' t - technical skills',
            ' l - language skills',
            "<br>example: <strong>'skills -l'</strong> to select language skills<br><br>",
            lastLine
        );
        typewriter(iSpeed);
    } else if(elem == 'skills -t'){
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

    } else if(elem == 'skills -l'){
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
            aText.push(
                bashIdentifier + elem,
                '<br><br><strong>add flag to select contact: </strong>',
                ' l - linkedin',
                ' g - github',
                ' m - email',
                "<br>example: <strong>'contacts -l'</strong> to open my linkedin",
                '<br>',
                lastLine
            );
            typewriter(iSpeed); 
            break;
        
        case 'contacts -l':
            aText.pop(aText.length - 1);
            aText.push(
                bashIdentifier + elem,
                '<br><br><strong>opening my linkedin page on a new tab...</strong>',                                
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
                '<br><br><strong>opening my github page on a new tab...</strong>',                                
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
