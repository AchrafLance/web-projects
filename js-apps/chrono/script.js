// define UI Variables 
const sessionType = document.querySelector(".title");
const timerDOM = document.querySelector("h1.timer")
const sessionlengthDOM = document.querySelector("h1.session-length-timer");
const breakLengthDOM = document.querySelector(".break-length-timer");

const decreaseSessionDOM = document.querySelector(".session-length .fa-minus");
const increaseSessionDOM = document.querySelector(".session-length .fa-plus");
const decreaseBreakDOM = document.querySelector(".break-length .fa-minus");
const increaseBreakDOM = document.querySelector(".break-length .fa-plus");

const playPauseIconDOM = document.querySelector(".play-pause-icon");
const refreshIconDOM = document.querySelector(".fa-sync-alt");

let minutes = timerDOM.innerText.split(":")[0];
let seconds = timerDOM.innerText.split(":")[1];
let playButtonClicked = false;
let sessionTimer;
let breakSong = new Audio("./shinzou-wo-sasageyo.mp3");

playPauseIconDOM.addEventListener("click", playTimer);
refreshIconDOM.addEventListener("click", refreshTimer);
decreaseSessionDOM.addEventListener("click", decreaseValue);
increaseSessionDOM.addEventListener("click", increaseValue);
decreaseBreakDOM.addEventListener("click", decreaseValue);
increaseBreakDOM.addEventListener("click", increaseValue);

// start or pause timer
function playTimer(e) {

    let startTimer = () => {
        // when session ends ==> start break timer
        if (minutes == 0 && seconds == 0) {
            if (sessionType.innerText == "SESSION") {
                sessionType.innerHTML = "BREAK";
                breakSong.play();
                minutes = breakLengthDOM.innerText;
                timerDOM.innerText = minutes + ":00";
            } else {
                sessionType.innerText = "SESSION";
                minutes = sessionlengthDOM.innerText;
                timerDOM.innerText = minutes + ":00";
            }
        }

        if (seconds == 0) {
            seconds = 60;
            --minutes;
        }
        --seconds;
        timerDOM.innerText = minutes + ":" + seconds;


    }

    let pauseTimer = () => {
        return clearInterval(sessionTimer);
    }

    playButtonClicked = !playButtonClicked;
    if (playButtonClicked) {
        playPauseIconDOM.classList.add("play");
        sessionTimer = setInterval(startTimer, 1000);
    } else {
        playPauseIconDOM.classList.remove("play");
        pauseTimer();
    }

}

// increase session timer
function increaseValue(e) {
    e.target.parentElement.querySelector("h1").innerText++;
    playPauseIconDOM.classList.remove("play");
    clearInterval(sessionTimer);
    if (e.target.parentElement.parentElement.classList.contains("session-length")) {
        minutes = sessionlengthDOM.innerText;
        seconds = 0;
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
        seconds = 0;
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