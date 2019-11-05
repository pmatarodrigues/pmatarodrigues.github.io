
// set up text to print, each item in array is new line

var startPosition = 5;

if(startPosition == null){
     startPosition = 0;
}

var topLogo = "<div style='font-size: 10px'>\
# developed by Pedro Mata Rodrigues <br>\
# pmatarodrigues@pm.me \
</div> ";

var bashIdentifier = "<strong class='bash-identifier'>pedro@matarodrigues: ~ $ </strong>";
var lastLineDesktop = "<strong class='bash-identifier'>pedro@matarodrigues: ~ $ </strong> ";
var lastLineMobile = "<strong class='bash-identifier'>pedro@matarodrigues: ~ $ </strong> <button onclick=\"verifyUserInput('help');\">help</button> ";
var helpLineDesktop = "<strong class='show-desktop'>Type 'help' to see the available commands </strong>";
var helpLineMobile = "<strong class='show-desktop'>Press 'help' to see the available commands </strong>";
var helpLine;

var aText = new Array(
     bashIdentifier + "hey! I'm Pedro Mata Rodrigues",
     bashIdentifier + "welcome to my personal website",
     bashIdentifier + "i know. This looks... eh... different",
     bashIdentifier + "but this is what my computer looks like everyday",
     bashIdentifier + "so I thought I could share a little bit of my workspace with you <br>"
);

verifyIfMobileDevice();

var prompt = ' \
<textarea type="text" id="setter" onkeyup="writeit(this, event)"></textarea> \
<span id="writer"></span><b class="cursor" id="cursor"></b>';

var iSpeed = 10; // time delay of print out
var iIndex = startPosition; // start printing array at this position
var iArrLength = aText[0].length; // the length of the text array
if(window.mobile){
     var iScrollAt = 8;
}
else{
     var iScrollAt = 12; // start scrolling up at this many lines
}

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row


window.onresize = function(){
     if(verifyOrientation()){
          typewriter(iSpeed);
     }
}

// INITIAL VERIFICATION
if(verifyOrientation()){
     typewriter(iSpeed);
}
