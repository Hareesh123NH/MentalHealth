// Breathing Exercise
const breathingCircle = document.getElementById('breathing-circle');
const startBreathing = document.getElementById('startBreathing');

startBreathing.addEventListener('click', () => {
    breathingExercise();
});

function breathingExercise() {
    breathingCircle.style.transform = 'scale(1.5)';
    setTimeout(() => {
        breathingCircle.style.transform = 'scale(1)';
    }, 4000);  // Breathing in and out takes 4 seconds
    setInterval(() => {
        breathingCircle.style.transform = 'scale(1.5)';
        setTimeout(() => {
            breathingCircle.style.transform = 'scale(1)';
        }, 4000);
    }, 8000); // Repeat every 8 seconds (4 sec inhale, 4 sec exhale)
}

// Custom Timer
const timerInput = document.getElementById('timerInput');
const startTimer = document.getElementById('startTimer');
const timerDisplay = document.getElementById('timerDisplay');
let timerInterval;

startTimer.addEventListener('click', () => {
    startMeditationTimer(parseInt(timerInput.value));
});

function startMeditationTimer(minutes) {
    let time = minutes * 60;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        let minutesLeft = Math.floor(time / 60);
        let secondsLeft = time % 60;
        timerDisplay.textContent = `${minutesLeft < 10 ? '0' : ''}${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
        if (time <= 0) {
            clearInterval(timerInterval);
            alert('Meditation time is up!');
        }
        time--;
    }, 1000);
}

// Mood Tracker
const moodButtons = document.querySelectorAll('.mood');
const moodResponse = document.getElementById('moodResponse');

moodButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mood = button.dataset.mood;
        trackMood(mood);
    });
});

function trackMood(mood) {
    const moodResponses = {
        "Happy": "Keep spreading that positivity!",
        "Calm": "Stay in the moment and enjoy the peace.",
        "Stressed": "Take a deep breath, you got this!",
        "Sad": "It’s okay to feel sad. You're stronger than you think."
    };
    moodResponse.textContent = moodResponses[mood];
    if(mood === "Happy"){
    	moodResponse.style.color = "#4097c2";
    }
    if(mood === "Calm"){
    	moodResponse.style.color = "blue";
    }
    if(mood === "Stressed"){
    	moodResponse.style.color = "#e39424";
    }
    if(mood === "Sad"){
    	moodResponse.style.color = "#f533c8";
    }
    
}

// Daily Health Tip
const healthTip = document.getElementById('healthTip');
const tips = [
    "Drink a glass of water when you wake up!",
    "Take a short walk today to refresh your mind.",
    "Eat more fruits and vegetables to stay healthy!",
    "Try deep breathing exercises for 5 minutes.",
    "Get at least 7-8 hours of sleep tonight."
];

function getDailyHealthTip() {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    healthTip.textContent = randomTip;
}

// Load the tip when the page is loaded
window.addEventListener('load', getDailyHealthTip);

// Background Music Player
const playMusic = document.getElementById('playMusic');
const stopMusic = document.getElementById('stopMusic');
const music = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Use a relaxing music file

playMusic.addEventListener('click', () => {
    music.loop = true;
    music.play();
});

stopMusic.addEventListener('click', () => {
    music.pause();
    music.currentTime = 0; // Reset music position
});

