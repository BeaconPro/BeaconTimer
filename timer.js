let countdown;
    
    function startTimer() {
      clearInterval(countdown);

      let minutes = parseInt(document.getElementById('minutes').value) || 0;
      let seconds = parseInt(document.getElementById('seconds').value) || 0;

      let totalSeconds = minutes * 60 + seconds;

      countdown = setInterval(() => {
        if (totalSeconds <= 0) {
          clearInterval(countdown);
          document.getElementById('timer').textContent = "Time's up!";
          return;
        }

        totalSeconds--;

        let min = Math.floor(totalSeconds / 60);
        let sec = totalSeconds % 60;

        document.getElementById('timer').textContent = 
          `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
      }, 1000);
    }
    if seconds && minutes = 0 {
      alert('Time/s Up!')
    }
