var totalTime = 180;
var timeInterval = null;

document.getElementById("3minBtn").addEventListener("click", () => {
    totalTime = 180;
    var minutes = Math.floor(totalTime / 60);
    var seconds = Math.floor(totalTime % 60);
    document.getElementById('timer').textContent =
        String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');

    return totalTime;
})

document.getElementById("toggleTimerBtn").addEventListener("click", () => {
    if(!timeInterval) {
        //Start the timer
        timeInterval = setInterval(() => {
            if(totalTime > 0) {
                totalTime--;
                updateTimerDisplay();
            } else {
                clearInterval(timeInterval);
                timeInterval = null;
            }
        }, 1000);
        document.getElementById("toggleTimerBtn").textContent = "Pause";
    } else {
        // Pause the timer
        clearInterval(timeInterval)
        timeInterval = null;
        document.getElementById("toggleTimerBtn").textContent = "Start";
    } 
});

function updateTimerDisplay() {
    var minutes = Math.floor(totalTime / 60);
    var seconds = totalTime % 60;
    document.getElementById("timer").textContent =
        String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
}

/*function togglePassivity() {
    var PassivityButton = document.getElementById("togglePassivityBtn");
    
    if () {
        PassivityButton.innerText = "Passivity: ON";
    } else {
        PassivityButton.innerText = "Passivity: OFF";
    }
}*/