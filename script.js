const startScreen = document.getElementById("startScreen");
const mainContent = document.getElementById("mainContent");
const candle = document.getElementById("candle");
const music = document.getElementById("bgMusic");

function startSurprise() {
  // 1️⃣ Hide start screen
  startScreen.style.display = "none";

  // 2️⃣ Show content
  mainContent.classList.remove("hidden");

  // 3️⃣ Play music
  music.volume = 0.6;
  music.play().catch(() => {});

  // 4️⃣ SHOW CANDLE AFTER CAKE ANIMATION
  setTimeout(() => {
    candle.classList.remove("hidden");
  }, 6000); // ⏱ matches SVG cake animation duration
}

// Desktop + mobile
startScreen.addEventListener("click", startSurprise);
startScreen.addEventListener("touchstart", startSurprise);
