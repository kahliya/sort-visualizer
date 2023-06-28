const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1)); // Random idx from 0 to i
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
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

function calculateNoteFreq(...objs) {
    let totalHeight = objs.reduce((a, b) => a + b.height, 0);
    return FREQ_MIN + (totalHeight/(objs.length*100)) * (FREQ_MAX - FREQ_MIN);
}