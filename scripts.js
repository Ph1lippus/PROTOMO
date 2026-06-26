let studyMinutes = 25;
let breakMinutes = 5;
let remainingSeconds = studyMinutes * 60;
let isRunning = false;
let isStudy = true;
let timerInterval = null;



function toggleSettings() {
    const panel = document.getElementById("settingsPanel");
    if (panel.style.display === "none") {
        panel.style.display = "block";
    } else {
        panel.style.display = "none";
    }
}
document.getElementById("settingsToggle").addEventListener("click", toggleSettings);

function applyConfig() {
    const newStudy = parseInt(document.getElementById("studyInput").value);
    const newBreak = parseInt(document.getElementById("breakInput").value);

    if (isNaN(newStudy) || newStudy < 1) { return; }
    if (isNaN(newBreak) || newBreak < 1) { return; }

    studyMinutes = newStudy;
    breakMinutes = newBreak;

    if (!isRunning) {
        remainingSeconds = studyMinutes * 60;
        isStudy = true;
    }
    render();
    document.getElementById('settingsPanel').style.display = 'none';
}

function tick() {
    remainingSeconds = remainingSeconds - 1;
    if (remainingSeconds <= 0) {
        isStudy = !isStudy;
        if (isStudy) {
        remainingSeconds = studyMinutes * 60;
        } else {
            remainingSeconds = breakMinutes * 60;
        }
    }
    render();
}

function toggleStartPause() {
    document.getElementById('startPauseBtn')
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        startPauseBtn.textContent = "Start"
    } else {
        timerInterval = setInterval(tick, 1000);
        isRunning = true;
        startPauseBtn.textContent = "Pause"
    }
}

function render() {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    // Format timer so that as trailing zeros whenever the numebr is less then 10, so that always has 2 digits in minutes and seconds. 
    const formattedTime = 
        String(minutes).padStart(2, '0')   + 
                                    ':'    +   
        String(seconds).padStart(2, '0');

    document.getElementById('timerDisplay').textContent = formattedTime;


}