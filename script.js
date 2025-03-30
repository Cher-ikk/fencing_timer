var totalTime = 180;
var timeInterval;

document.getElementById("set3MinBtn").addEventListener("click", () => {
    totalTime = 180;
    var minutes = Math.floor(totalTime / 60);
    var seconds = Math.floor(totalTime % 60);
    document.getElementById('timer').textContent =
        String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

    return totalTime;
})

document.getElementById("toggleTimerBtn").addEventListener("click", () => {
    if(!timeInterval) {
        timeInterval = setInterval(() => {
            if(totalTime > 0) {
                totalTime--;
                updateTimerDisplay();
            } else {
                clearInterval(timeInterval);
                timeInterval = null;
            }
        }, 1000);
    } else {
        clearInterval(timeInterval);
        timeInterval = null;
    }
});

function updateTimerDisplay() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    document.getElementById("timer").textContent =
        String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
}

function toggleTimerBtn() {
    var StartButton = document.getElementById("toggleTimerBtn");
    
    if (!running) {
        startTimer();
        StartButton.innerText = "Pause";
    } else {
        pauseTimer();
        StartButton.innerText = "Start";
    }
}

/*function togglePassivity() {
    var PassivityButton = document.getElementById("togglePassivityBtn");
    
    if () {
        PassivityButton.innerText = "Passivity: ON";
    } else {
        PassivityButton.innerText = "Passivity: OFF";
    }
}*/