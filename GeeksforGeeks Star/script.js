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