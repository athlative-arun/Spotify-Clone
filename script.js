const playlistsData = [  
{
    title: "enna solla pogirai",
    artist: "shankar mahadevan",
    cover: "image/enna solla pogirai.jpg",
    songFile: "song/Enna-Solla-Pogirai.mp3"
},
{
    title: "enna vilai azhage",
    artist: "Unni Menom",
    cover: "image/enna vilai azhage.jpg",
    songFile: "song/Enna-Vilai.mp3"
},
{
    title: "ennai thalatta varuvalo",
    artist: "Hariharan",
    cover: "image/ennai thalatta varuvalo.jpg",
    songFile: "song/Ennai-Thalatta-Varuvalo.mp3"
},
{
    title: "innisai paadivarum",
    artist: "Hariharan",
    cover: "image/innisai paadivarum.jpg",
    songFile: "song/Innisai-Paadi-Varum-M.mp3"
},
{
    title: "Konja naal",
    artist: "Hariharan",
    cover: "image/konja naal.jpg",
    songFile: "song/Konja-Naal-Poru-Thalaivaa.mp3"
},
{
    title: "Kurukku siruthavele",
    artist: "Hariharan",
    cover: "image/kurukku siruthavele.jpg",
    songFile: "song/Kurukku-Siruthavale.mp3"
},
{
    title: "Megamai vanthu",
    artist: "Hariharan",
    cover: "image/megamai vanthu.jpg",
    songFile: "song/Megamai-Vanthu.mp3"
},
{
    title: "Minnalai pidithu",
    artist: "Hariharan",
    cover: "image/minnalai pidithu.jpg",
    songFile: "song/Minnalai-Pidithu.mp3"
},
{
    title: "Nadhiye Nadhiye",
    artist: "Unni Menon",
    cover: "image/nadhiye nadhiye.jpg",
    songFile: "song/Nathiyae-Nathiyae.mp3"
},
{
    title: "uyire uyire",
    artist: "Hariharan",
    cover: "image/uyire uyire.jpg",
    songFile: "song/Uyire-Uyire.mp3"
}
];

const playlistsDataLibrary = [
{
    title: "ennodu nee irundhal",
    artist: "shankar mahadevan",
    cover: "image/I.jpg",
    songFile: "song/Ennodu-Nee-Irundhal.mp3"
},
{
    title: "Mudhal nee muduvam nee",
    artist: "shankar mahadevan",
    cover: "image/mudhal-nee-mudivum-nee.jpg",
    songFile: "song/Mudhal-Nee-Mudivum-Nee-Title-Track-MassTamilan.io.mp3"
},
{
    title: "Kurukku siruthavele",
    artist: "Hariharan",
    cover: "image/kurukku siruthavele.jpg",
    songFile: "song/Kurukku-Siruthavale.mp3"
},
{
    title: "enna solla pogirai",
    artist: "shankar mahadevan",
    cover: "image/enna solla pogirai.jpg",
    songFile: "song/Enna-Solla-Pogirai.mp3"
},
{
    title: "vaa senthaazhini",
    artist: "shankar mahadevan",
    cover: "image/vaa senthaazhini.jpg",
    songFile: "song/Vaa-Senthaazhini-MassTamilan.dev.mp3"
},
{
    title: "Yaar Azhaippadhu",
    artist: "shankar mahadevan",
    cover: "image/yaar Azhaippadhu.jpg",
    songFile: "song/Yaar-Azhaippadhu-MassTamilan.fm.mp3"
},
{
    title: "Minnalai pidithu",
    artist: "Hariharan",
    cover: "image/minnalai pidithu.jpg",
    songFile: "song/Minnalai-Pidithu.mp3"
},
{
    title: "Yennai Maatrum Kadhale",
    artist: "shankar mahadevan",
    cover: "image/yennai maatrum kadhale.jpg",
    songFile: "song/Yennai-Maatrum-Kadhale.mp3"
},
];

const audioPlayer = document.getElementById('audio-player');
const prevBtn = document.getElementById('prev-btn');
const playPauseBtn = document.getElementById('play-pause-btn');
const nextBtn = document.getElementById('next-btn');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const mainContent = document.querySelector('.main-content');
const homeLink = document.querySelector('.nav-links a:nth-child(1)'); 
const libraryLink = document.querySelector('.nav-links a:nth-child(3)'); 
const searchLink = document.querySelector('.nav-links a:nth-child(2)'); 

let currentSongIndex = 0;
let activePlaylists = playlistsData; 
let activePlaylistIndex = 0;

const albumCover = document.getElementById('album-cover');
const albumPopup = document.getElementById('album-popup');
const popupAlbumCover = document.getElementById('popup-album-cover');
const popupTrackTitle = document.getElementById('popup-track-title');
const popupTrackArtist = document.getElementById('popup-track-artist');
const popupClose = document.getElementById('popup-close');
const progressBar = document.getElementById('progress-bar');
const currentTimeElem = document.getElementById('current-time');
const totalTimeElem = document.getElementById('total-time');

// sidebar active
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});
// pop up
albumCover.addEventListener('click', () => {
albumPopup.classList.add('show'); 
popupAlbumCover.src = albumCover.src;
popupTrackTitle.textContent = trackTitle.textContent;
popupTrackArtist.textContent = trackArtist.textContent;
});
//close popup
popupClose.addEventListener('click', () => {
albumPopup.classList.remove('show'); 
});

function loadSongByTitle(songTitle) {
let songFound = null;

const allPlaylists = [...playlistsData, ...playlistsDataLibrary];

allPlaylists.forEach((playlist, index) => {
    if (playlist.title === songTitle) {
        songFound = playlist;
    }
});

if (songFound) {
    audioPlayer.src = songFound.songFile;
    trackTitle.textContent = songFound.title;
    trackArtist.textContent = songFound.artist;
    albumCover.src = songFound.cover;
    albumCover.style.display = "block";
    audioPlayer.play();
}
}

function playPause() {
if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = "❚❚";
} else {
    audioPlayer.pause();
    playPauseBtn.textContent = "▶";
}
}

// next song btn
function nextSong() {
currentSongIndex = (currentSongIndex + 1) % activePlaylists[0].length; 
const nextSong = activePlaylists[0][currentSongIndex]; 
loadSongByTitle(nextSong.title);
}

// previous song btn
function prevSong() {
currentSongIndex = (currentSongIndex - 1 + activePlaylists[0].length) % activePlaylists[0].length; 
const prevSong = activePlaylists[0][currentSongIndex]; 
loadSongByTitle(prevSong.title);
}

prevBtn.addEventListener('click', prevSong);
playPauseBtn.addEventListener('click', playPause);
nextBtn.addEventListener('click', nextSong);

// timeline
function formatTime(seconds) {
const mins = Math.floor(seconds / 60);
const secs = Math.floor(seconds % 60);
return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}


function updateTimeline() {
const currentTime = audioPlayer.currentTime;
const duration = audioPlayer.duration;
progressBar.value = (currentTime / duration) * 100;
currentTimeElem.textContent = formatTime(currentTime);
totalTimeElem.textContent = formatTime(duration);
}


progressBar.addEventListener('input', () => {
const duration = audioPlayer.duration;
audioPlayer.currentTime = (progressBar.value / 100) * duration;
});
audioPlayer.addEventListener('timeupdate', updateTimeline);


audioPlayer.addEventListener('loadedmetadata', () => {
totalTimeElem.textContent = formatTime(audioPlayer.duration);
});
// render 
function renderHomeContent() {
activePlaylists = [playlistsData];
mainContent.innerHTML = `
    <h1>Home</h1>
    <div class="playlists-grid" id="playlists-grid"></div>
`;

const playlistsGrid = document.getElementById('playlists-grid');
playlistsData.forEach((playlist, index) => {
    const playlistCard = document.createElement('div');
    playlistCard.classList.add('playlist-card');
    playlistCard.innerHTML = `
        <img src="${playlist.cover}" alt="${playlist.title}">
        <h3>${playlist.title}</h3>
        <p>${playlist.artist}</p>
    `;
    playlistCard.addEventListener('click', () => {
        loadSongByTitle(playlist.title); 
    });
    playlistsGrid.appendChild(playlistCard);
});
}


function renderLibraryContent() {
activePlaylists = [playlistsDataLibrary]; 
mainContent.innerHTML = `
    <h1>Your Library</h1>
    <div class="playlists-grid" id="playlists-grid-library"></div>
`;

const libraryGrid = document.getElementById('playlists-grid-library');
playlistsDataLibrary.forEach((playlist, index) => {
    const playlistCard = document.createElement('div');
    playlistCard.classList.add('playlist-card');
    playlistCard.innerHTML = `
        <img src="${playlist.cover}" alt="${playlist.title}">
        <h3>${playlist.title}</h3>
        <p>${playlist.artist}</p>
    `;
    playlistCard.addEventListener('click', () => {
        loadSongByTitle(playlist.title); 
    });
    libraryGrid.appendChild(playlistCard);
});
}


function renderSearchContent() {
mainContent.innerHTML = `
    <h1>Search</h1>
    <input type="text" id="search-bar" placeholder="Search songs..." class="search-bar">
    <div class="playlists-grid" id="search-results"></div>
`;

const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

function searchPlaylists(query) {
    searchResults.innerHTML = ''; 
    const filteredPlaylists = [...playlistsData, ...playlistsDataLibrary].filter(song => {
        const lowerQuery = query.toLowerCase();
        return song.title.toLowerCase().includes(lowerQuery) || song.artist.toLowerCase().includes(lowerQuery);
    });

    filteredPlaylists.forEach((song, index) => {
        const playlistCard = document.createElement('div');
        playlistCard.classList.add('playlist-card');
        playlistCard.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
        `;
        playlistCard.addEventListener('click', () => {
            loadSongByTitle(song.title); 
        });
        searchResults.appendChild(playlistCard);
    });
}


searchBar.addEventListener('input', (e) => {
    searchPlaylists(e.target.value);
});
}

// navigation 
homeLink.addEventListener('click', (e) => {
e.preventDefault();
renderHomeContent();
});

libraryLink.addEventListener('click', (e) => {
e.preventDefault();
renderLibraryContent();
});

searchLink.addEventListener('click', (e) => {
e.preventDefault();
renderSearchContent();
});


function loadSongByTitle(songTitle) {
let songFound = null;

const allPlaylists = [...playlistsData, ...playlistsDataLibrary];

allPlaylists.forEach((playlist, index) => {
    if (playlist.title === songTitle) {
        songFound = playlist;
    }
});

if (songFound) {
    audioPlayer.src = songFound.songFile;
    trackTitle.textContent = songFound.title;
    trackArtist.textContent = songFound.artist;
    albumCover.src = songFound.cover;
    albumCover.style.display = "block";
    audioPlayer.play();
}
}

albumCover.addEventListener('click', () => {
albumPopup.classList.add('show');
document.body.classList.add('popup-open'); 
mainContent.classList.add('wrap'); 


popupAlbumCover.src = albumCover.src;
popupTrackTitle.textContent = trackTitle.textContent;
popupTrackArtist.textContent = trackArtist.textContent;
});


popupClose.addEventListener('click', () => {
albumPopup.classList.remove('show'); 
document.body.classList.remove('popup-open'); 
mainContent.classList.remove('wrap'); 
});


renderHomeContent(); // default
function loadSongByTitle(songTitle) {
let songFound = null;
const allPlaylists = [...playlistsData, ...playlistsDataLibrary];

allPlaylists.forEach((playlist) => {
if (playlist.title === songTitle) {
    songFound = playlist;
}
});

if (songFound) {
audioPlayer.src = songFound.songFile;
trackTitle.textContent = songFound.title;
trackArtist.textContent = songFound.artist;
albumCover.src = songFound.cover;
albumCover.style.display = "block";
audioPlayer.play();

const popup = document.getElementById('popup');
const popupAlbumCover = document.getElementById('popup-album-cover');
const popupTrackTitle = document.getElementById('popup-track-title');
const popupTrackArtist = document.getElementById('popup-track-artist');
const popupTrackDescription = document.getElementById('popup-track-description');

popupAlbumCover.src = songFound.cover;
popupTrackTitle.textContent = songFound.title;
popupTrackArtist.textContent = songFound.artist;
popupTrackDescription.textContent = songFound.artist;

popup.style.display = "block";
}
}

document.getElementById('popup').addEventListener('click', (e) => {
if (e.target === document.getElementById('popup')) {
e.target.style.display = "none";
}
});
document.getElementById('popup').addEventListener('click', (e) => {
if (e.target === document.getElementById('popup')) {
e.target.style.display = "none"; 
}
});
