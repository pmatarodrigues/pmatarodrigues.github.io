// set up text to print, each item in array is new line

var startPosition = 5;

if(startPosition == null){
     startPosition = 0;
}


var topLogo = "<div style='font-size: 10px'>\
# developed by Pedro Mata Rodrigues <br>\
# pmatarodrigues@pm.me \
</div> ";

var lastLine = "<strong class='bash-identifier'>pedro@matarodrigues: ~ $ </strong> ";

var aText = new Array(
     topLogo,


    "<strong class='bash-identifier'>pedro@matarodrigues: ~ $ </strong> Hey! I'm Pedro Mata Rodrigues. Welcome to my personal website", 
    "<strong class='bash-identifier'>pedro@matarodrigues: ~ $ </strong> This will act as a CV and Portfolio <br>",

    "<strong class='bash-identifier'>pedro@matarodrigues: ~ $ </strong> I've been a technology lover for a long time, since I was a little kid, when MySpace, mIRC and MSN were still a thing",
    "<strong class='bash-identifier'>pedro@matarodrigues: ~ $ </strong> I like to keep challenging myself, to try new things everyday as that's how we can improve and get better in everything we do <br>",

    "<strong class='bash-identifier'>pedro@matarodrigues: ~ $ </strong><strong>Type 'help' to see the available commands </strong>",
    "<strong class='bash-identifier'>pedro@matarodrigues: ~ $ </strong><strong>Hit tab to write and Enter to confirm </strong>",
    
    lastLine,
      
);

var prompt = "<input id='input-text' type='text' />";

var iSpeed = 10; // time delay of print out
var iIndex = startPosition; // start printing array at this position
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter(){

     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("text-typing");

     while ( iRow < iIndex ) {
          sContents += aText[iRow++] + '<br />';
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
          setTimeout("typewriter()", iSpeed);
     }

     // GET ELEMENT INPUT WHEN PRESS ENTER
     var elem = document.getElementById("input-text");
     elem.onkeyup = function(e){
         if(e.keyCode == 13){
             verifyUserInput(elem);
         }
     }
}


typewriter();



function verifyUserInput(elem){
     switch(elem.value){
          case 'help':
               aText.push(
                    '<br><br><strong>help:</strong>',
                    ' - about',
                    ' - skills',                    
                    ' - timeline <br><br>',
                    lastLine
               )
               typewriter();
               break;
     }
}