var totalTime = 180;
var timeInterval = null;

document.getElementById("threeMinBtn").addEventListener("click", () => {
    totalTime = 180;
    var minutes = Math.floor(totalTime / 60);
    var seconds = Math.floor(totalTime % 60);
    document.getElementById('timer').textContent =
        String(minutes) + " : " + String(seconds).padStart(2, '0');

    return totalTime;
})

document.getElementById("oneMinBtn").addEventListener("click", () => {
    totalTime = 60;
    var minutes = Math.floor(totalTime / 60);
    var seconds = Math.floor(totalTime % 60);
    document.getElementById('timer').textContent =
        String(minutes) + " : " + String(seconds).padStart(2, '0');

    return totalTime;
})

document.getElementById("twoMinBtn").addEventListener("click", () => {
    totalTime = 120;
    var minutes = Math.floor(totalTime / 60);
    var seconds = Math.floor(totalTime % 60);
    document.getElementById('timer').textContent =
        String(minutes) + " : " + String(seconds).padStart(2, '0');

    return totalTime;
})

document.getElementById("toggleTimerBtn").addEventListener("click", () => {
    if(!timeInterval) {
        //Start the timer
        document.getElementById("toggleTimerBtn").style.backgroundColour = 'crimson'; //1
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
        document.getElementById("toggleTimerBtn").style.backgroundColour = 'limegreen'; //1
        clearInterval(timeInterval)
        timeInterval = null;
        document.getElementById("toggleTimerBtn").textContent = "Start";
    } 
});

function updateTimerDisplay() {
    var minutes = Math.floor(totalTime / 60);
    var seconds = totalTime % 60;
    document.getElementById("timer").textContent =
        String(minutes) + " : " + String(seconds).padStart(2, '0');
}