var boxOneb = document.getElementsByClassName('box3b')[0];
var boxTwob = document.getElementsByClassName('box3b')[1];

var running = false;

var toggleTransitionb = function() {
  if(!running) 
  { 
    boxOneb.classList.add('horizTranslateb');
    boxTwob.classList.add('horizTranslateb');
  } else {
    boxOneb.classList.remove('horizTranslateb'); 
     boxTwob.classList.remove('horizTranslateb');
    
  }  

  running = !running;
}
