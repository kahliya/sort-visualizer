function initializeBars(num) {
    let graphContainer = document.getElementById("graph-container");
    let bars = [];
    for (let i = 0; i < num; i++) {
        let height = Math.floor(Math.random() * 100);
        let htmlBar = document.createElement("div");
        htmlBar.classList.add("bar");
        htmlBar.style.order = i;
        htmlBar.style.height = height + "%";
        graphContainer.appendChild(htmlBar);

        bars.push(new Bar(htmlBar, height));
    }

    return bars;
}