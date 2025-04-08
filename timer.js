let timerInterval;
let seconds = 0;
let countdownInterval;
let remainingSeconds = 0;

function formatTime(sec) {
    let hrs = Math.floor(sec / 3600);
    let mins = Math.floor((sec % 3600) / 60);
    let secs = sec % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateTimer() {
    document.getElementById("timer").textContent = formatTime(seconds);
}

function startTimer() {
    if (timerInterval) return; // Prevent multiple intervals
    timerInterval = setInterval(() => {
        seconds++;
        updateTimer();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    updateTimer();
}

function updateCountdownTimer() {
    const timerElement = document.getElementById("countdownTimer");
    timerElement.textContent = formatTime(remainingSeconds);
}

function startCountdown() {
    clearInterval(countdownInterval); // Clear any previous countdown
    const inputElement = document.getElementById("countdownInput");
    remainingSeconds = parseInt(inputElement.value, 10) || 0; // Get user input

    if (remainingSeconds > 0) {
        updateCountdownTimer(); // Update the display immediately
        countdownInterval = setInterval(() => {
            remainingSeconds--;
            updateCountdownTimer();

            if (remainingSeconds <= 0) {
                clearInterval(countdownInterval);
                alert("Time's up!");
            }
        }, 1000);
    } else {
        alert("Please enter a valid number of seconds.");
    }
}
