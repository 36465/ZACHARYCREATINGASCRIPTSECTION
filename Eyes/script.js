var boxOne = document.getElementsByClassName('box3')[0];
var boxTwo = document.getElementsByClassName('box3')[1];

var running = false;

var toggleTransition = function() {
  if(!running) 
  { 
    boxOne.classList.add('horizTranslate');
    boxTwo.classList.add('horizTranslate');
  } else {
    boxOne.classList.remove('horizTranslate'); 
     boxTwo.classList.remove('horizTranslate');
    
  }  

  running = !running;
}
