const music = document.getElementById("bg-music");
window.addEventListener("load", () => music.play());

function toggleMusic() {
  if(music.paused) music.play();
  else music.pause();
}

// Navegación entre pantallas
let currentSection = 0;
const sections = document.querySelectorAll(".section");

function showSection(index) {
  if(index<0 || index>=sections.length) return;
  sections[currentSection].classList.remove("active");
  currentSection = index;
  sections[currentSection].classList.add("active");
}

function nextSection() { if(currentSection<sections.length-1) showSection(currentSection+1); }
function prevSection() { if(currentSection>0) showSection(currentSection-1); }

// Reel de fotos automático
const reelPhotos = [
  "foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg",
  "foto6.jpg","foto7.jpg","foto8.jpg","foto9.jpg","foto10.jpg",
  "foto11.jpg","foto12.jpg","foto13.jpg","foto14.jpg","foto15.jpg",
  "foto16.jpg","foto17.jpg","foto18.jpg","foto19.jpg","foto20.jpg",
  "foto21.jpg","foto22.jpg","foto23.jpg","foto24.jpg","foto25.jpg",
  "foto26.jpg","foto27.jpg","foto28.png","foto29.jpg","foto30.png",
  "foto31.jpg","foto32.jpg","foto33.jpg"
];

let currentPhoto = 0;
const reelImg = document.getElementById("reel-photo");

function changePhoto() {
  reelImg.classList.remove("show");
  setTimeout(() => {
    reelImg.src = reelPhotos[currentPhoto];
    reelImg.classList.add("show");
    currentPhoto = (currentPhoto + 1) % reelPhotos.length;
  }, 500);
}

setInterval(changePhoto, 3000);
changePhoto();