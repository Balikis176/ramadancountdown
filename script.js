const targetdate = new Date("March 1, 2025 00:00:00").getTime();
function updatecountdown(){
    const now = new Date().getTime();
    const timediff =  targetdate - now;
    if (timediff <= 0) {
        document.getElementById("timer").innerHTML = "Ramadan Mubarak!";
        document.getElementById("dua").innerHTML = "May this blessed month bring you peace,hapiness and fulfillment.Wishing you a blessed Ramadan";
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
document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("ramadanAudio");
    let source = document.getElementById("audioSource");

    // Get the current date
    let today = new Date();
    let march1st = new Date(today.getFullYear(), 2, 1); // Month index starts at 0 (January = 0, March = 2)

    if (today >= march1st) {
        source.src = "song2.mp3"; // Change to the new song
        audio.load(); // Reload the audio element
        audio.play(); // Play the new song
    }
});


setInterval(function() {
    changesong("song2.mp3");
}, 1000);

document.getElementById("shareBtn").addEventListener("click", function () {
    let pageTitle = document.title;
    let pageUrl = window.location.href;
    let shareText = `Check out this Ramadan Countdown: ${pageUrl}`;

    if (navigator.share) {
        navigator.share({
            title: pageTitle,
            text: shareText,
            url: pageUrl
        }).then(() => console.log("Shared successfully"))
          .catch((error) => console.log("Error sharing:", error));
    } else {
        
        let whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
        window.open(whatsappUrl, "_blank"); 
    }
});

