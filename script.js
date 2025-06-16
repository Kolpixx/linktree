let musicPlaying = true;
const audio = new Audio("./resources/background_jazz.mp3");

document.addEventListener('DOMContentLoaded', () => {
    audio.play()
    audio.volume = 0.2;
})

function toggleMusic() {
    const headphoneOnSvg = document.getElementById("headphone-on");
    const headphoneOffSvg = document.getElementById("headphone-off");

    if (musicPlaying) {
        audio.pause();
        headphoneOnSvg.style.display = "none";
        headphoneOffSvg.style.display = "block";
        musicPlaying = false;
    } else {
        audio.play();
        headphoneOffSvg.style.display = "none";
        headphoneOnSvg.style.display = "block";
        musicPlaying = true;
    }
}