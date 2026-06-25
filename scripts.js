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
    const newBreak = parseInt(document.getElementById("BreakInput").value);

    if (isNaN(newStudy) || newStudy < 1) { return; }
    if (isNaN(newBreak) || newBreak < 1) { return; }

    studyMinutes = newStudy;
    breakMinutes = newBreak;

    remainingSeconds = studyMinutes * 60;

    document.getElementById('settingsPanel').style.display = 'none';
}