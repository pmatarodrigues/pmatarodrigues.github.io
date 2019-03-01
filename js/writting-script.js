// set up text to print, each item in array is new line

var startPosition = 0;

if(startPosition == null){
     startPosition = 0;
}


var topLogo = "<div style='font-size: 10px'>\
# developed by Pedro Mata Rodrigues <br>\
# pmatarodrigues@pm.me \
</div> ";

var bashIdentifier = "<strong class='bash-identifier'>pedro@matarodrigues: ~ $ </strong>";
var lastLine = "<strong class='bash-identifier'>pedro@matarodrigues: ~ $ </strong> ";
var helpLine = "<strong>Type 'help' to see the available commands </strong>";

var aText = new Array(
     topLogo,

     bashIdentifier + "Hey! I'm Pedro Mata Rodrigues", 
     bashIdentifier + "Welcome to my personal website", 
     bashIdentifier + "I know. This looks... eh... different",
     bashIdentifier + "But this is what my computer looks like everyday",
     bashIdentifier + "So I thought I could share a little bit of my workspace with you <br>",    

     bashIdentifier + helpLine,

     lastLine,      
);

//var prompt = "<input id='input-text' type='text' />";

var prompt = ' \
<textarea type="text" id="setter" onkeyup="writeit(this, event)"></textarea> \
<span id="writer"></span><b class="cursor" id="cursor"></b>';

var iSpeed = 10; // time delay of print out
var iIndex = startPosition; // start printing array at this position
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row


// VERIFY DEVICE ORIENTATION
function verifyOrientation(){
     if(window.innerHeight < window.innerWidth){
          typewriter(iSpeed);
     }
}

window.onresize = function(){ 
     verifyOrientation();
}

// INITIAL VERIFICATION
verifyOrientation();

