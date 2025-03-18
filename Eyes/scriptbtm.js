var boxOnebtm = document.getElementsByClassName('box3btm')[0];
var boxTwobtm = document.getElementsByClassName('box3btm')[1];

var running = false;

var toggleTransitionbtm = function() {
  if(!running) 
  { 
    boxOnebtm.classList.add('horizTranslatebtm');
    boxTwobtm.classList.add('horizTranslatebtm');
  } else {
    boxOnebtm.classList.remove('horizTranslatebtm'); 
     boxTwobtm.classList.remove('horizTranslatebtm');
    
  }  

  running = !running;
}
