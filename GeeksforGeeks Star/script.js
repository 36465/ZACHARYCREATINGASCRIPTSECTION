var boxOne = document.getElementsByClassName('box')[0];
var running = false;

var toggleTransition = function() {
  if(!running) 
  { 
    boxOne.classList.add('horizTranslate');
  } else {
    boxOne.classList.remove('horizTranslate'); 
  }  

  running = !running;
}