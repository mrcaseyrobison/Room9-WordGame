
function countdown() {
    var timeLeft = 5;
  
    
    var timeInterval = setInterval(function () {
     
      if (timeLeft > 1) {
        
        timerEl.textContent = timeLeft + ' seconds remaining';
        
        timeLeft--;
      } else if (timeLeft === 1) {
       
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        
        timerEl.textContent = '';
       
        clearInterval(timeInterval);
        
        displayMessage();
      }
    }, 1000);
  }