function initializeBars(num) {
    let graphContainer = document.getElementById("graph-container");
    let increment = 90/(num-1);
    let bars = [];
    for (let i = 0; i < num; i++) {
        let height = Math.floor(10 + increment * i);
        let htmlBar = document.createElement("div");
        htmlBar.classList.add("bar");
        htmlBar.style.order = i;
        htmlBar.style.height = height + "%";
        graphContainer.appendChild(htmlBar);

        bars.push(new Bar(htmlBar, height));
    }

    return bars;
}

async function shuffleBars() {
    shuffleArray(bars);
    for (let i = 0; i < bars.length; i++) {
        bars[i].htmlElement.style.order = i;
        await sleep(100);
    }
}