var totalTime = 180000;
var timeInterval = null;
var startTime = null;
var remainingTime = totalTime;

document.getElementById("threeMinBtn").addEventListener("click", () => {
    totalTime = 180000;
    remainingTime = totalTime;
    updateTimerDisplay();
});

document.getElementById("oneMinBtn").addEventListener("click", () => {
    totalTime = 60000;
    remainingTime = totalTime;
    updateTimerDisplay();
});

document.getElementById("twoMinBtn").addEventListener("click", () => {
    totalTime = 120000;
    remainingTime = totalTime;
    updateTimerDisplay();
});

document.getElementById("toggleTimerBtn").addEventListener("click", () => {
    if (!timeInterval) {
        // Start the timer
        startTime = Date.now(); // Record the start time
        document.getElementById("toggleTimerBtn").style.backgroundColor = 'crimson';
        timeInterval = setInterval(() => {
            const elapsedTime = Date.now() - startTime; // Calculate elapsed time
            remainingTime = totalTime - elapsedTime; // Update remaining time

            if (remainingTime > 0) {
                updateTimerDisplay();
            } else {
                // Timer finished
                clearInterval(timeInterval);
                timeInterval = null;
                remainingTime = 0; // Ensure remaining time is 0
                updateTimerDisplay();
                document.getElementById("toggleTimerBtn").textContent = "Start";
                document.getElementById("toggleTimerBtn").style.backgroundColor = 'limegreen';
                navigator.vibrate(300);
            }
        }, 10); // Update every 10ms for better accuracy
        document.getElementById("toggleTimerBtn").textContent = "Pause";
    } else {
        pauseTimer();
    }
});


function pauseTimer() {
    totalTime = remainingTime; // Save the remaining time
    clearInterval(timeInterval);
    timeInterval = null;
    document.getElementById("toggleTimerBtn").textContent = "Start";
    document.getElementById("toggleTimerBtn").style.backgroundColor = 'limegreen';
}

function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60000);
    const seconds = Math.floor((remainingTime % 60000) / 1000);

    document.getElementById("timer").textContent =
        `${String(minutes).padStart(2)} : ${String(seconds).padStart(2, '0')}`;
}