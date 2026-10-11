const audio = document.getElementById('bgAudio');
const introOverlay = document.getElementById('introOverlay');
const scene = document.getElementById('scene');
const openLetterButton = document.getElementById('openLetter');
const closeBtn = document.getElementById('closeBtn');

const defaultMusic = '/Video.mp3';

function playBackgroundMusic() {
  if (!defaultMusic) return;

  audio.src = defaultMusic;
  audio.load();
  audio.volume = 0.55;
  audio.play().catch(() => {
    // Browser memblokir autoplay jika belum ada interaksi user.
    // Tombol Buka sudah merupakan interaksi user, jadi musik akan jalan saat tombol ini diklik.
  });
}

function openLetter() {
  introOverlay.style.opacity = '0';
  introOverlay.style.visibility = 'hidden';
  scene.classList.remove('hidden');
  playBackgroundMusic();
}

function moveExitButton() {
  const wrapper = closeBtn.parentElement;
  const maxX = Math.max(wrapper.clientWidth - closeBtn.offsetWidth - 8, 8);
  const maxY = Math.max(wrapper.clientHeight - closeBtn.offsetHeight - 8, 8);

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  closeBtn.style.position = 'absolute';
  closeBtn.style.left = `${randomX}px`;
  closeBtn.style.top = `${randomY}px`;
  closeBtn.style.transform = 'none';
}

openLetterButton.addEventListener('click', openLetter);
closeBtn.addEventListener('click', moveExitButton);

audio.src = defaultMusic;
audio.volume = 0.55;
