var passivityState = false;

var totalTimeP = 6000;
var timeIntervalP = null;
var startTimeP = null;
var remainingTimeP = totalTimeP;
var currentScoreRight = 0;
var currentScoreLeft = 0;

document.getElementById("togglePassivityBtn").addEventListener("click", () => {
    passivityState = !passivityState;

    if (passivityState) {
        document.getElementById("togglePassivityBtn").textContent = "Passivity: ON";
        
        currentScoreLeft = parseInt(document.getElementById("leftPoints").textContent, 10);
        currentScoreRight = parseInt(document.getElementById("rightPoints").textContent, 10);
        
        document.getElementById("toggleTimerBtn").addEventListener("click", () => {
            if (!timeIntervalP) {
                // Start the timer
                startPassivityTimer();

            } else {
                // Pause the timer
                totalTimeP = remainingTimeP; // Save the remaining time
                clearInterval(timeIntervalP);
                timeIntervalP = null;
            }
        });
    } else {
        document.getElementById("togglePassivityBtn").textContent = "Passivity: OFF";
    }
})

function updateTimerDisplayP() {
    const minutes = Math.floor(remainingTimeP / 60000);
    const seconds = Math.floor((remainingTimeP % 60000) / 1000);

    document.getElementById("timerPassivity").textContent =
        `${String(minutes).padStart(2)} : ${String(seconds).padStart(2, '0')}`;
}

function startPassivityTimer() {
    startTimeP = Date.now();
    timeIntervalP = setInterval(() => {
        const elapsedTime = Date.now() - startTimeP;
        remainingTimeP = totalTimeP - elapsedTime;

        // Check if the score has changed
        const newScoreLeft = parseInt(document.getElementById("leftPoints").textContent, 10);
        const newScoreRight = parseInt(document.getElementById("rightPoints").textContent, 10);

        if (newScoreLeft !== currentScoreLeft || newScoreRight !== currentScoreRight) {
            // Reset the passivity timer if the score changes
            resetPassivityTimer(newScoreLeft, newScoreRight);
        }

        if (remainingTimeP > 0) {
            updateTimerDisplayP();
        } else {
            // Timer finished
            clearInterval(timeIntervalP);
            timeIntervalP = null;
            remainingTimeP = 0; // Ensure remaining time is 0
            updateTimerDisplayP();
            navigator.vibrate(300);
            alert("Passivity detected! Timer stopped.");
            pauseTimer(); // Pause the main timer
        }
    }, 10); // Update every 10ms for better accuracy
}

function resetPassivityTimer(newScoreLeft, newScoreRight) {
    clearInterval(timeIntervalP); // Stop the current interval
    remainingTimeP = totalTimeP; // Reset the remaining time to the full duration
    currentScoreLeft = newScoreLeft; // Update the left score
    currentScoreRight = newScoreRight; // Update the right score
    updateTimerDisplayP(); // Update the passivity timer display

    startPassivityTimer();
}