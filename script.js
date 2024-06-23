let startTime;
let updatedTime;
let difference;
let tInterval;
let savedTime = 0;
let running = false;
let paused = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
stopButton.addEventListener('click', stopTimer);

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - savedTime;
        tInterval = setInterval(getShowTime, 1);
        running = true;
        paused = false;
    }
}

function pauseTimer() {
    if (!paused && running) {
        clearInterval(tInterval);
        savedTime = new Date().getTime() - startTime;
        paused = true;
    }
}

function stopTimer() {
    clearInterval(tInterval);
    savedTime = 0;
    running = false;
    paused = false;
    display.innerHTML = "00:00:00";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    display.innerHTML = hours + ':' + minutes + ':' + seconds;
}
