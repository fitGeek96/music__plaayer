//jshint esversion:9
const musicContainerEl = document.querySelector('.music__container');
const playBtnEl = document.querySelector('#play');
const prevBtnEl = document.querySelector('#prev');
const nextBtnEl = document.querySelector('#next');

const audioEl = document.querySelector('#audio');
const progressBarEl = document.querySelector('.progress');
const progressContainerEl = document.querySelector('.progress__container');

const titleEl = document.querySelector('#title');
const coverEl = document.querySelector('#cover');

// SONG TITLES
const songs = ['El Ghorba', 'Liberte', 'Lotf Allah El Khafi', 'Machafouhach'];

// Keep Track of song
let songIndex = 2;

// initially load song details into DOM 
loadSong(songs[songIndex]);

// Update song Detail 
function loadSong(song) {
    titleEl.innerText = song;
    audioEl.src = `music/${song}.mp3`;
    coverEl.src = `images/${song}.jpg`;
}

// Play song
function playSong() {
    musicContainerEl.classList.add('play');
    playBtnEl.querySelector('i.fas').classList.remove('fa-play');
    playBtnEl.querySelector('i.fas').classList.add('fa-pause');
    audioEl.play();
}

function pauseSong() {
    musicContainerEl.classList.remove('play');
    playBtnEl.querySelector('i.fas').classList.remove('fa-pause');
    playBtnEl.querySelector('i.fas').classList.add('fa-play');
    audioEl.pause();
}

// Previous Song
function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();
}

// Previous Song
function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
}


// update progress bar 
function updateProgress(e){
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration ) * 100;
    progressBarEl.style.width = `${progressPercent}%`;
}

function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioEl.duration;

    audioEl.currentTime = (clickX / width) * duration;

}

// EVENT LISTENERS
playBtnEl.addEventListener('click', () => {
    const isPlaying = musicContainerEl.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtnEl.addEventListener('click', prevSong);
nextBtnEl.addEventListener('click', nextSong);
audioEl.addEventListener('timeupdate', updateProgress);
progressContainerEl.addEventListener('click', setProgress);
audioEl.addEventListener('ended', nextSong);    