
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

    if(window.innerHeight > 500){
         helpLine = helpLineDesktop;
         lastLine = lastLineDesktop;
         aText.push(
              bashIdentifier + helpLine,
              lastLineDesktop
         );          
         window.mobile = false;
    } else{
         helpLine = helpLineMobile;
         lastLine = lastLineMobile;
         aText.push(
              bashIdentifier + helpLine,
              lastLineMobile
         );
        window.mobile = true;
    }
}
