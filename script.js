let musicPlaying = true;
const audio = new Audio("https://raw.githubusercontent.com/Kolpixx/linktree/refs/heads/main/resources/background_jazz.mp3");
const headphoneOnSvg = document.getElementById("headphone-on");
const headphoneOffSvg = document.getElementById("headphone-off");

document.addEventListener('DOMContentLoaded', () => {
    audio.play()
        .catch(err => {
            console.log(err);
            headphoneOnSvg.style.display = "none";
            headphoneOffSvg.style.display = "block";
            musicPlaying = false;
        })
    audio.loop = true;
    audio.volume = 0.2;
})

function toggleMusic() {
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