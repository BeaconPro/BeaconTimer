document.addEventListener('DOMContentLoaded', () => {
    const timerForm = document.getElementById('timerForm');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    const timerDisplay = document.getElementById('timer');
    const errorMessage = document.getElementById('error-message');
    const startButton = timerForm.querySelector('button[type="submit"]');
    let intervalId = null;
    let totalTime = 0;

    function updateDisplay() {
        const mins = Math.floor(totalTime / 60);
        const secs = totalTime % 60;
        timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function startTimer() {
        if (intervalId !== null) {
            clearInterval(intervalId); // Clear any existing interval
        }
        startButton.disabled = true;
        errorMessage.style.display = 'none';
        totalTime = parseInt(minutesInput.value, 10) * 60 + parseInt(secondsInput.value, 10);

        if (isNaN(totalTime) || totalTime < 0) {
            errorMessage.style.display = 'block';
            errorMessage.textContent = 'Please enter valid numbers.';
            startButton.disabled = false;
            return;
        }

        updateDisplay();

        intervalId = setInterval(() => {
            totalTime--;
            updateDisplay();

            if (totalTime <= 0) {
                clearInterval(intervalId);
                intervalId = null;
                timerDisplay.textContent = 'Time’s Up!';
                startButton.disabled = false;
            }
        }, 1000);
    }

    timerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        startTimer();
    });

    // Optional: Add a stop button
    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop';
    stopButton.addEventListener('click', () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
            startButton.disabled = false;
            timerDisplay.textContent = 'Stopped';
        }
    });
    timerForm.parentNode.insertBefore(stopButton, timerForm.nextSibling);
});
