import {sounds} from '/data/soundsJS.js';

console.log(sounds);


document.getElementById('drumkit');

console.log(drumkit);

sounds.map((sound) => {
    /*lager knapp*/
    const btn = document.createElement('Button');
    drumkit.appendChild(btn);
    console.log(btn);
    /*setter sound.key til text content på knapp, henter fra soundsJS */
    btn.textContent = sound.key;
    const audio = document.createElement('audio');
    audio.src = sound.file;
    console.log(sound.file);
    btn.addEventListener('click', () => {
        audio.play();
    });
    document.addEventListener('keypress', (e) => {
        if (e.key === sound.key) {
            audio.play();
            console.log(`Key ${sound.key} was pressed`)
            
        }
    })
    
})


//2.4. OPTIONAL. If you used keydown as the first parameter in the previous eventlistener, add another eventlistner to the whole page that: 
    //actives when releasing a keyboard key (first parameter of the eventlistener)

    // 2.4.1. inside of the eventlistner:

        // pauses the audio element
        // sets the current time of the audio element to 0

//2.5. OPTIONAL. Create an eventlistener for clicking. Also create a logic for preventing more sounds to be played at the same time

//2.6. append the created button and audio element to the html element you refered in 1.


//* ///////////////////////////////////////////////////////////////////////////////////////////// */


//*3. Create a function that loops over the sounds (from the data file you created). Use that function created in 2. to use the logic there to create the buttons. I prefer that you use .forEach or .map */


//* ////////////////////////////////////// */


//*4. Call on the function that loops over the sounds and creates the buttons */


//* ////////////////////////////////////// */