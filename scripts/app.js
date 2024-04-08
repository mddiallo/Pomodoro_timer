// Define the initial values for session time, break time, and whether it's a break or work session
let sessionTime = 25; // work time in minutes
let breakTime = 5; // break time in minutes
let isBreak = false;
let interval;

// Function to start the timer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    interval = setInterval(function () {
        // Calculate the minutes and seconds remaining
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        // Add leading zeros if necessary
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Update the display with the remaining time
        display.textContent = minutes + ":" + seconds;

        // If the timer reaches 0, toggle between work and break time and display an alert
        if (--timer < 0) {
            timer = isBreak ? sessionTime * 60 : breakTime * 60;
            isBreak = !isBreak; // Toggle between work and break time
            alert(isBreak ? "Break is over, start working!" : "Take a break!");
        }
    }, 1000); // Run the timer every second (1000 milliseconds)
}

// Function to start the Pomodoro timer
function startPomodoro() {
    let display = document.querySelector('#time'); // Get the timer display element
    startTimer(sessionTime * 60, display); // Start the timer with the session time in seconds
}

// Function to stop the Pomodoro timer
function stopPomodoro() {
    clearInterval(interval); // Clear the interval to stop the timer
}

// Add event listeners to the start and stop buttons
document.querySelector('#startButton').addEventListener('click', startPomodoro);
document.querySelector('#stopButton').addEventListener('click', stopPomodoro);
