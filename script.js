document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("response").innerText = "Yay! 💕 Can't wait for Valentine's Day with you!";
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    this.style.position = "absolute";
    this.style.left = x + "px";
    this.style.top = y + "px";
});
