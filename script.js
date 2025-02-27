const targetdate = new Date("March 1, 2025 00:00:00").getTime();
function updatecountdown(){
    const now = new Date().getTime();
    const timediff =  targetdate - now;
    const countdownAudio = document.getElementById("countdownAudio");
    const ramadanAudio = document.getElementById("ramadanAudio");
    countdownAudio.play();
    if (timediff <= 0) {
        document.getElementById("timer").innerHTML = "Ramadan Mubarak";
        countdownElement.innerHTML = "Ramadan Mubarak!";
        countdownAudio.pause();
        countdownAudio.currentTime = 0; 
        ramadanAudio.play(); 
        document.getElementById("ramadanAudio").play();
        return;
    }
    const days = Math.floor(timediff/ (1000 * 60 * 60 * 24));
    const hours = Math.floor((timediff % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timediff % (1000 * 60 * 60))/ (1000 * 60));
    const seconds = Math.floor((timediff % (1000 * 60))/1000);
    document.getElementById("timer").innerHTML = `${days} days || ${hours} hours
     || ${minutes}minutes || ${seconds} Seconds `;
}
setInterval(updatecountdown,1000);
updatecountdown();

function shareCountdown() {
    const shareText = "Check out this live Ramadan Countdown!";
    const shareURL = window.location.href;

    if (navigator.share) {
        navigator.share({
            title: "Ramadan Countdown",
            text: shareText,
            url: shareURL
        }).then(() => console.log("Shared successfully"))
        .catch(error => console.log("Error sharing:", error));
    } else {
        alert("Your browser doesn't support sharing.");
    }
}
