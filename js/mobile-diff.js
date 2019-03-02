
// VERIFY DEVICE ORIENTATION
function verifyOrientation(){
    if(window.innerHeight < window.innerWidth){
         return true;
    } else{
         return false;
    }
}

// VERIFY HEIGHT SIZE TO KNOW IF IT'S MOBILE
function verifyIfMobileDevice(){

     // IF DEVICE HAS TOUCH SCREEN
    if('ontouchstart' in document.documentElement){
          helpLine = helpLineMobile;         // CONFIG LINES TO DISPLAY MOBILE VERSION
          lastLine = lastLineMobile;          
          aText.push(
               bashIdentifier + helpLine,
               lastLine
          );
          window.mobile = true;              // GLOBAL VARIABLE TO FACILIATE USE
     } else{
          helpLine = helpLineDesktop;        // CONFIG LINES TO DISPLAY DESKTOP VERSION
          lastLine = lastLineDesktop;
          aText.push(
               bashIdentifier + helpLine,
               lastLine
          );          
          window.mobile = false;
    }
}
