var leftPoints = 0;
var rightPoints = 0;

document.getElementById("minusLeftBtn").addEventListener("click", () => {
    if(leftPoints > 0) {
        leftPoints--;
        document.getElementById("leftPoints").textContent = leftPoints;
    }
})

document.getElementById("plusLeftBtn").addEventListener("click", () => {
    leftPoints++;
    document.getElementById("leftPoints").textContent = leftPoints;
})


document.getElementById("leftPoints").addEventListener("click", () => {
    leftPoints++;
    document.getElementById("leftPoints").textContent = leftPoints;
})


document.getElementById("minusRightBtn").addEventListener("click", () => {
    if(rightPoints > 0) {
        rightPoints--;
        document.getElementById("rightPoints").textContent = rightPoints;
    }
})

document.getElementById("plusRightBtn").addEventListener("click", () => {
    rightPoints++;
    document.getElementById("rightPoints").textContent = rightPoints;
})
document.getElementById("rightPoints").addEventListener("click", () => {
    rightPoints++;
    document.getElementById("rightPoints").textContent = rightPoints;
})

document.getElementById("resetPointsBtn").addEventListener("click", () => {
    rightPoints = 0;
    leftPoints = 0;
    document.getElementById("leftPoints").textContent = leftPoints;
    document.getElementById("rightPoints").textContent = rightPoints;
})
