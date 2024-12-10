import {sounds} from '/data/soundsJS.js';

console.log(sounds);



document.getElementById('drumkit');

console.log(drumkit);

let currentAudio = null;



sounds.map((sound) => {
    /*lager knapp*/
    // const audio = document.createElement('audio');
    const audio = new Audio(sound.file)
    const btn = document.createElement('Button');
    drumkit.appendChild(btn);
    console.log(btn);
    /*setter sound.key til text content på knapp, henter fra soundsJS */
    btn.textContent = sound.key;
    audio.src = sound.file;
    audio.id = sound.file;
    console.log(sound.file);
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





//2.4. OPTIONAL. If you used keydown as the first parameter in the previous eventlistener, add another eventlistner to the whole page that: 
    //actives when releasing a keyboard key (first parameter of the eventlistener)

    // 2.4.1. inside of the eventlistner:

        // pauses the audio element
        // sets the current time of the audio element to 0

//2.5. OPTIONAL. Create an eventlistener for clicking. Also create a logic for preventing more sounds to be played at the same time

