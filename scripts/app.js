let sessionTime = 25; // work time in minutes
let breakTime = 5; // break time in minutes
let isBreak = false;
let interval;

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = isBreak ? sessionTime * 60 : breakTime * 60;
            isBreak = !isBreak; // Toggle between work and break time
            alert(isBreak ? "Break is over, start working!" : "Take a break!");
        }
    }, 1000);
}

function startPomodoro() {
    let display = document.querySelector('#time'); // Display timer element
    startTimer(sessionTime * 60, display);
}

function stopPomodoro() {
    clearInterval(interval);
}

document.querySelector('#startButton').addEventListener('click', startPomodoro);
document.querySelector('#stopButton').addEventListener('click', stopPomodoro);
