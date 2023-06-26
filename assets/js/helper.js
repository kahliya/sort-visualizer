const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function playNote(freq, duration) {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 0.01;

    osc.type = "square";
    osc.frequency.value = freq;
    osc.connect(gainNode).connect(audioCtx.destination);
    osc.start();

    setTimeout(() => {
        osc.stop()
    }, duration);
}