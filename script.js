function toggleTimer() {
    let button = document.getElementById("toggleTimerBtn");
    
    if (!running) {
        startTimer();
        button.innerText = "Pause";
    } else {
        pauseTimer();
        button.innerText = "Start";
    }
}