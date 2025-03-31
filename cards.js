document.getElementById("priorityBtn").addEventListener("click", () => {
    var randomValue = Math.floor(Math.random() * 2);
    if(randomValue == 0) {
        document.getElementById("priorityLeft").style.color = "gold";
    } if(randomValue == 1) {
        document.getElementById("priorityRight").style.color = "gold";
}
});

document.getElementById("yellowCardLeftBtn").addEventListener("click", () => {
    document.getElementById("yellowCardLeft").style.backgroundColor = "gold";
    document.getElementById("fullscreenCard").style.backgroundColor = "gold";
    document.getElementById("fullscreenCard").style.display = "block";
})
document.getElementById("yellowCardRightBtn").addEventListener("click", () => {
    document.getElementById("yellowCardRight").style.backgroundColor = "gold";
    document.getElementById("fullscreenCard").style.backgroundColor = "gold";
    document.getElementById("fullscreenCard").style.display = "block";
})
document.getElementById("redCardLeftBtn").addEventListener("click", () => {
    document.getElementById("redCardLeft").style.backgroundColor = "crimson";
    document.getElementById("fullscreenCard").style.backgroundColor = "crimson";
    document.getElementById("fullscreenCard").style.display = "block";
})
document.getElementById("redCardRightBtn").addEventListener("click", () => {
    document.getElementById("redCardRight").style.backgroundColor = "crimson";
    document.getElementById("fullscreenCard").style.backgroundColor = "crimson";
    document.getElementById("fullscreenCard").style.display = "block";
})
document.getElementById("blackCardLeftBtn").addEventListener("click", () => {
    document.getElementById("fullscreenCard").style.backgroundColor = "black";
    document.getElementById("fullscreenCard").style.display = "block";
})
document.getElementById("blackCardRightBtn").addEventListener("click", () => {
    document.getElementById("fullscreenCard").style.backgroundColor = "black";
    document.getElementById("fullscreenCard").style.display = "block";
})

document.getElementById("fullscreenCard").addEventListener("click", () => {
    document.getElementById("fullscreenCard").style.display = "none";
})

document.getElementById("resetCardsBtn").addEventListener("click", () => {
    document.getElementById("priorityLeft").style.color = "#222";
    document.getElementById("priorityRight").style.color = "#222";
    document.getElementById("yellowCardLeft").style.backgroundColor = "#222";
    document.getElementById("yellowCardRight").style.backgroundColor = "#222";
    document.getElementById("redCardLeft").style.backgroundColor = "#222";
    document.getElementById("redCardRight").style.backgroundColor = "#222";
});
document.getElementById("priorityLeft").addEventListener("click", () => {
    document.getElementById("priorityLeft").style.color = "#222";
});
document.getElementById("priorityRight").addEventListener("click", () => {
    document.getElementById("priorityRight").style.color = "#222";
});