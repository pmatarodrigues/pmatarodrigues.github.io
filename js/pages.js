


function pageAboutMe(elem){
    aText.pop(aText.length - 1);
    aText.push(
         bashIdentifier + elem.value.trim(),
         '<br><br> <strong> about me: </strong>',
         "I've been a technology lover for a long time, since I was a little kid, when MySpace, mIRC and MSN were still a thing",
         "I like to keep challenging myself, to try new things everyday as that's how we can improve and get better in everything we do<br><br>",
         lastLine
    );
    typewriter(iSpeed); 
}


function pageSkills(elem){

    if(elem.value.trim() == 'skills'){
        aText.pop(aText.length - 1);
        aText.push(
            bashIdentifier + elem.value.trim(),
            '<br><br><strong> add flag to select skill: </strong>',
            ' t - tech skills',
            ' l - lang skills',
            "<br>example: <strong>'skills -l'</strong> to select lang skills<br><br>",
            lastLine
        );
        typewriter(iSpeed);
    } else if(elem.value.trim() == 'skills -t'){
        aText.pop(aText.length - 1);
        aText.push(
            bashIdentifier + elem.value.trim(),
            '<br><br><strong> tech skills: </strong>',
            ' java &#09; ######################',
            ' javascript &#09; ######################',
            ' c &#09; ######################',
            '<br>',            
            lastLine
        );
        typewriter(iSpeed);
    }
}