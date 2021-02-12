let timerDOM = document.querySelector("h1.timer")
let sessionlengthDOM = document.querySelector("h1.session-length-timer");
let breakLengthDOM = document.querySelector(".break-length-timer");

let playPauseIconDOM = document.querySelector(".play-pause-icon");
let refreshIconDOM = document.querySelector(".fa-sync-alt");

let decreaseSessionDOM = document.querySelector(".session-length .fa-minus");
let increaseSessionDOM = document.querySelector(".session-length .fa-plus");
let decreaseBreakDOM = document.querySelector(".break-length .fa-minus");
let increaseBreakDOM = document.querySelector(".break-length .fa-plus");


let minutes = timerDOM.innerText.split(":")[0];
let seconds = timerDOM.innerText.split(":")[1];

let playButtonClicked = false;
let sessionTimer;

playPauseIconDOM.addEventListener("click", playTimer);
refreshIconDOM.addEventListener("click", refreshTimer);
decreaseSessionDOM.addEventListener("click", decreaseValue);
increaseSessionDOM.addEventListener("click", increaseValue);
decreaseBreakDOM.addEventListener("click", decreaseValue);
increaseBreakDOM.addEventListener("click", increaseValue);

// inclrease session timer
function increaseValue(e) {
    e.target.parentElement.querySelector("h1").innerText++;
    playPauseIconDOM.classList.remove("play");
    clearInterval(sessionTimer);
    if (e.target.parentElement.parentElement.classList.contains("session-length")) {
        minutes = sessionlengthDOM.innerText;
        timerDOM.innerText = minutes + ":00";
    }
}

//increase session timer
function decreaseValue(e) {
    e.target.parentElement.querySelector("h1").innerText--;
    playPauseIconDOM.classList.remove("play");
    clearInterval(sessionTimer);
    if (e.target.parentElement.parentElement.classList.contains("session-length")) {
        minutes = sessionlengthDOM.innerText;
        timerDOM.innerText = minutes + ":00";
    }
}
// refresh timer 
function refreshTimer(e) {
    minutes = "25";
    seconds = "00";
    timerDOM.innerText = minutes + ":" + seconds;
    sessionlengthDOM.innerText = "25";
    breakLengthDOM.innerText = "5";
    playPauseIconDOM.classList.remove("play");
    clearInterval(sessionTimer);

}

// start or pause timer
function playTimer(e) {
    playButtonClicked = !playButtonClicked;
    if (playButtonClicked) {
        playPauseIconDOM.classList.add("play");
        sessionTimer = setInterval(startTimer, 1000);
    } else {
        playPauseIconDOM.classList.remove("play");
        pauseTimer;
    }
}

function startTimer() {
    if (seconds == 0) {
        seconds = 60;
        --minutes;
    }
    --seconds;
    timerDOM.innerText = minutes + ":" + seconds;

    // when session ends ==> start break timer
    if (minutes == 0 && seconds == 0) {
        timerDOM.innerText = breakLengthDOM.innerText + ":00";
    }
}

function pauseTimer() {
    clearInterval(sessionTimer);
}