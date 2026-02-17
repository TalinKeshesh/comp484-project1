  // For each track, connect play/pause buttons to its <audio>
document.querySelectorAll(".tracklist-item").forEach(item => {
const audio = item.querySelector(".audio");
const playBtn = item.querySelector(".icon-btn.play");
const pauseBtn = item.querySelector(".icon-btn.pause");

playBtn.addEventListener("click", () => {
      // Stop other songs so only one plays
document.querySelectorAll(".audio").forEach(a => {
    if (a !== audio) { a.pause(); a.currentTime = 0; }
    });
    audio.play();
});

pauseBtn.addEventListener("click", () => {
    audio.pause();
});
});
