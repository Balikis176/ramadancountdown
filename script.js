
        const ramadanStart = new Date("March 1, 2025 00:00:00").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = ramadanStart - now;

            if (timeLeft <= 0) {
                document.getElementById("timer").innerHTML = "Ramadan Mubarak!";
                document.getElementById("dua").innerHTML = "May this blessed month bring you peace, happiness and spiritual fulfillment. Enjoy the special moments of reflection and the joy of breaking fast with loved ones. "
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("timer").innerHTML = 
                `${days}day || ${hours}hours || ${minutes}minutes || ${seconds}seconds`;
        }

        setInterval(updateCountdown, 1000);
        updateCountdown(); 

    
            
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
const switchTime = 10000; 
        
function startMusic() {
     audioPlayer.play().catch(error => {
        console.log("Autoplay blocked. User interaction may be required.");
         });
}
        
                
function changeSong() {
     audioSource.src = "song2.mp3"; 
    audioPlayer.load(); 
    audioPlayer.play();
    }
        
    window.onload = function () {
    startMusic(); 
    setTimeout(changeSong, switchTime); 
};
            

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

