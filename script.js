let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];


    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});



document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});


// button changer //

const btnImg = document.getElementById("btnImg");

const btn = document.getElementById("toggleBtn");

const img1 = 'images/play.png';
const img2 = 'images/pause.png';


let showingFirst = true;

btn.addEventListener("click", () => {
    btnImg.src = showingFirst ? img2 : img1;
    showingFirst =!showingFirst;
});