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
const songs = ['El-Ghorba', 'Liberte', 'Lotf-Allah-El-Khafi', 'Machafouhach'];

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
function playSong(){
    musicContainerEl.classList.add('play');
    playBtnEl.querySelector('i.fas').classList.remove('fa-play');
    playBtnEl.querySelector('i.fas').classList.add('fa-pause');
    audioEl.play();
}

function pauseSong(){
    musicContainerEl.classList.remove('play');
    playBtnEl.querySelector('i.fas').classList.remove('fa-pause');
    playBtnEl.querySelector('i.fas').classList.add('fa-play');
    audioEl.pause();
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