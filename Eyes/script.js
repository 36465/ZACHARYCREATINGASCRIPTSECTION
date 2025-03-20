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

