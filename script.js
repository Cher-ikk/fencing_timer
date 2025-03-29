function set3MinTimer() {
    var totalTime = 180000;
    var minutes = Math.floor(totalTime / 60000);
    var seconds = Math.floor((totalTime % 60000) / 1000);
    document.getElementById('timer').textContent =
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0');
}




function toggleTimer() {
    var StartButton = document.getElementById("toggvarimerBtn");
    
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