document.getElementById("priorityBtn").addEventListener("click", () => {
    const priorityLeft = document.getElementById("priorityLeft");
    const priorityRight = document.getElementById("priorityRight");

    // Reset colors before blinking
    priorityLeft.style.color = "#222";
    priorityRight.style.color = "#222";

    let blinkCount = 0;
    const blinkInterval = setInterval(() => {
        priorityLeft.style.color = blinkCount % 2 === 0 ? "gold" : "#222";
        priorityRight.style.color = blinkCount % 2 === 0 ? "#222" : "gold";

        blinkCount++;

        if (blinkCount >= 8) {
            clearInterval(blinkInterval);

            // Show the final result
            const randomValue = Math.floor(Math.random() * 2);
            if (randomValue === 0) {
                priorityLeft.style.color = "gold";
                priorityRight.style.color = "#222";
            } else {
                priorityRight.style.color = "gold";
                priorityLeft.style.color = "#222";
            }
        }
    }, 200); // Blink every 200ms
});

function showCard(card, color) {
    document.getElementById("fullscreenCard").style.backgroundColor = color;
    document.getElementById("fullscreenCard").style.display = "block";
    if (color != "black") {
        document.getElementById(card).style.backgroundColor = color; 
    }
}

document.getElementById("yellowCardLeftBtn").addEventListener("click", () => showCard("yellowCardLeft", "gold"));
document.getElementById("yellowCardRightBtn").addEventListener("click", () => showCard("yellowCardRight", "gold"));
document.getElementById("redCardLeftBtn").addEventListener("click", () => showCard("redCardLeft", "crimson"));
document.getElementById("redCardRightBtn").addEventListener("click", () => showCard("redCardRight", "crimson"));
document.getElementById("blackCardLeftBtn").addEventListener("click", () => showCard(null, "black"));
document.getElementById("blackCardRightBtn").addEventListener("click", () => showCard(null, "black"));


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