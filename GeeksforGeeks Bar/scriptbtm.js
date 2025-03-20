var boxOnebtm = document.getElementsByClassName('boxbtm')[0];
var running = false;

var toggleTransitionbtm = function() {
  if(!running) 
  { 
    boxOnebtm.classList.add('horizTranslatebtm');
  } else {
    boxOnebtm.classList.remove('horizTranslatebtm'); 
  }  

  running = !running;
}