
    document.addEventListener("DOMContentLoaded", function () {
       
        const ramadanDate = new Date("March 10, 2024 00:00:00").getTime();
        const countdownElement = document.getElementById("timer");
        const duaelement = document.getElementById("dua");
        const countdownAudio = document.getElementById("countdownAudio");
        const ramadanAudio = document.getElementById("ramadanAudio");

        function startMusic() {
            countdownAudio.play().catch(error => console.log("Auto-play blocked, user interaction required."));
        }
        startMusic();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = ramadanDate - now;

            if (timeLeft > 0) {
                const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            } else {
                clearInterval(interval);
                countdownElement.innerHTML = "Ramadan Mubarak!";
                duaelement.innerHTML = "May this blessed month bring you happiness, peace and spiritual fullfilment. Enjoy the special moments of reflection and the joy of breaking fast with loved ones.";
                countdownAudio.pause();
                countdownAudio.currentTime = 0; 
                ramadanAudio.play(); 
            }
        }, 1000);
    });




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

