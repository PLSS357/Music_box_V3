"use strict";

// ===== Configuração de músicas =====
const songs = [
  {
    title: "Regret Message",
    audio: "MP3/musica.mp3",
    image: "IMG/disco.png",
  },
  {
    title: "Lullaby",
    audio: "MP3/musica2.mp3",
    image: "IMG/Red.png",
  },
  { title: "Bad Romance", audio: "MP3/musica3.mp3", image: "IMG/Blue.png" },
  {
    title: "Simple and Clean",
    audio: "MP3/musica4.mp3",
    image: "IMG/Yellow.png",
  },
  {
    title: "It's Raining Somewhere Else",
    audio: "MP3/musica5.mp3",
    image: "IMG/Rose.png",
  },
];

// ===== Estado =====
let isOpen = false;
let isPlaying = false;
let wasPlayingBeforeClose = false;
let currentSong = 0;
let isChangingSong = false;

// ===== Elementos =====
const boxContainer = document.getElementById("boxContainer");
const musicBox = document.getElementById("musicBox");
const boxLid = document.getElementById("boxLid");
const interior = document.getElementById("interior");
const vinylRecord = document.getElementById("vinylRecord");
const recordImage = document.getElementById("recordImage");
const musicalNotes = document.getElementById("musicalNotes");
const statusEl = document.getElementById("status");
const audio = document.getElementById("musicAudio");
const volumeSlider = document.getElementById("volumeSlider");
const volumeCard = document.getElementById("volumeCard");
const musicSelector = document.getElementById("musicSelector");
const songButtons = document.querySelectorAll(".song-button");

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  audio.volume = parseFloat(volumeSlider.value || "0.7");
  statusEl.textContent = "Caixinha Fechada";

  loadSong(0);

  // Botões de música
  songButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      if (index !== currentSong && !isChangingSong) {
        button.classList.add("selecting");
        setTimeout(() => button.classList.remove("selecting"), 800);
        changeSong(index);
      }
    });
  });
});

// Impedir propagação
volumeCard.addEventListener("click", (e) => e.stopPropagation());
musicSelector.addEventListener("click", (e) => e.stopPropagation());

volumeSlider.addEventListener("input", function (e) {
  e.stopPropagation();
  audio.volume = parseFloat(this.value);
});

// Alterna caixa ao clicar no container
boxContainer.addEventListener("click", toggleMusicBox);

function toggleMusicBox() {
  if (isChangingSong) return;
  isOpen = !isOpen;
  if (isOpen) openMusicBox();
  else closeMusicBox();
}

function openMusicBox() {
  boxLid.classList.add("open");
  musicBox.classList.add("open");
  interior.classList.add("visible");
  if (wasPlayingBeforeClose || !audio.currentTime) playMusic();
  setTimeout(() => {
    statusEl.textContent = isPlaying
      ? `Tocando: ${songs[currentSong].title} ♪`
      : "Caixinha Aberta";
  }, 350);
}

function closeMusicBox() {
  wasPlayingBeforeClose = isPlaying;
  boxLid.classList.remove("open");
  musicBox.classList.remove("open");
  interior.classList.remove("visible");
  pauseMusic();
  statusEl.textContent = "Caixinha Fechada";
}

function playMusic() {
  audio
    .play()
    .then(() => {
      isPlaying = true;
      vinylRecord.classList.add("spinning");
      musicalNotes.classList.add("floating");
      if (isOpen)
        statusEl.textContent = `Tocando: ${songs[currentSong].title} ♪`;
    })
    .catch((err) => {
      console.warn("Não foi possível reproduzir o áudio:", err);
      statusEl.textContent = "Erro: verifique o arquivo MP3";
    });
}

function pauseMusic() {
  audio.pause();
  isPlaying = false;
  vinylRecord.classList.remove("spinning");
  musicalNotes.classList.remove("floating");
}

function loadSong(index) {
  const song = songs[index];
  audio.src = song.audio;
  recordImage.src = song.image;
  currentSong = index;
  songButtons.forEach((btn, i) => btn.classList.toggle("active", i === index));
}

// ===== Nova troca com 3D =====
function changeSong(index) {
  if (isChangingSong || index === currentSong) return;
  isChangingSong = true;

  const wasPlaying = isPlaying;
  if (isPlaying) pauseMusic();

  statusEl.textContent = "Trocando música...";
  // efeito sutil nas notas
  musicalNotes.classList.add("bounce");
  setTimeout(() => musicalNotes.classList.remove("bounce"), 600);

  vinylRecord.classList.remove("swap-in");
  vinylRecord.classList.add("swap-out");

  const OUT_MS = 900;
  const IN_MS = 900;

  setTimeout(() => {
    loadSong(index); // troca a capa e o áudio
    vinylRecord.classList.remove("swap-out");
    vinylRecord.classList.add("swap-in");

    setTimeout(() => {
      if (wasPlaying && isOpen) {
        playMusic();
      } else if (isOpen) {
        statusEl.textContent = `Música: ${songs[currentSong].title}`;
      } else {
        statusEl.textContent = "Caixinha Fechada";
      }
      vinylRecord.classList.remove("swap-in");
      isChangingSong = false;
    }, IN_MS);
  }, OUT_MS);
}

// Eventos do áudio
audio.addEventListener("ended", () => {
  isPlaying = false;
  vinylRecord.classList.remove("spinning");
  musicalNotes.classList.remove("floating");
  if (isOpen) statusEl.textContent = "Música finalizada";
});
audio.addEventListener("error", () => {
  statusEl.textContent = "Erro: verifique o caminho do MP3";
});

// Teclado: espaço abre/fecha, M muta, números trocam música (1..N)
window.addEventListener("keydown", (e) => {
  const tag = document.activeElement?.tagName;
  if (["INPUT", "TEXTAREA", "SELECT", "OPTION"].includes(tag)) return;

  if (e.code === "Space") {
    e.preventDefault();
    toggleMusicBox();
  }
  if (e.key && e.key.toLowerCase() === "m") {
    audio.muted = !audio.muted;
  }

  const num = parseInt(e.key, 10);
  if (
    !Number.isNaN(num) &&
    num >= 1 &&
    num <= songs.length &&
    !isChangingSong
  ) {
    changeSong(num - 1);
  }
});
