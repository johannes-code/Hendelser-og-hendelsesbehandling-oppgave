import {sounds} from '/data/soundsJS.js';

document.getElementById('drumkit');

let currentAudio = null;

function soundBoard() {
sounds.map((sound) => {
    /*lager knapp*/
    // const audio = document.createElement('audio');
    const audio = new Audio(sound.file)
    const btn = document.createElement('Button');
    drumkit.appendChild(btn);
     /*setter sound.key til text content på knapp, henter fra soundsJS */
    btn.textContent = sound.key;
    audio.src = sound.file;
    audio.id = sound.file;
    
    btn.addEventListener('click', () => {
        // audio.play();
        playSound(audio);
    });
    
    
    document.addEventListener('keypress', (e) => {
        // const sound = sounds.find(s => s.key === e.key);
        if (e.key === sound.key) {
            playSound(audio);
        }
    });
    
    function playSound(audio) {
        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        if (currentAudio !== audio) {
            audio.currentTime = 0;
            audio.play();
            currentAudio = audio;
        }
        audio.play();
    }});
}

function pictureBox() {
    const newElement = document.createElement('img');
    const img = 'https://mythicalcreatures.info/media/troll-norsk-creature-1-768x439.jpg';
    newElement.src = img;
    document.body.appendChild(newElement);
}




soundBoard();
pictureBox();