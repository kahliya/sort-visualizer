async function animateSortingComplete() {
    // Green sweeps across each bar
    for (let bar of bars) {
        bar.htmlElement.classList.add('bar-complete');
        playNote(FREQ_MIN + bar.height/100 * (FREQ_MAX - FREQ_MIN), 50);
        await sleep(50);
        bar.htmlElement.classList.remove('bar-complete');
    }

    // All bars blink green together
    for (let bar of bars) {
        bar.htmlElement.classList.add('bar-complete');
    }

    await sleep(250);
    for (let bar of bars) {
        bar.htmlElement.classList.remove('bar-complete');
    }
}

function swapOrder(idx1, idx2) {
    let bh1 = bars[idx1].htmlElement;
    let bh2 = bars[idx2].htmlElement;
    let tmp = bh1.style.order;
    bh1.style.order = bh2.style.order;
    bh2.style.order = tmp;
    
    [bars[idx1], bars[idx2]] = [bars[idx2], bars[idx1]]
}

async function bubbleSort() {
    let swapped = true;
    let sortedCount = 0;
    while(swapped) {
        swapped = await bubbleIteration(1, false, sortedCount);
        sortedCount++
    }

    animateSortingComplete();
}

async function bubbleIteration(index, swapped, sortedCount) {
    let currBar = bars[index-1];
    currBar.htmlElement.classList.add('bar-highlight');

    await sleep(50);
    let b1 = bars[index-1];
    let b2 = bars[index];
    playNote(FREQ_MIN + (b1.height + b2.height)/200 * (FREQ_MAX - FREQ_MIN), 50); // 200 is the maximum possible height of the 2 bars.

    if (currBar.compareTo(bars[index]) > 0) {
        swapOrder(index-1, index);
        swapped = true;
    }

    currBar.htmlElement.classList.remove('bar-highlight');
    if (index+1 >= bars.length-sortedCount) {
        return swapped;
    }

    return bubbleIteration(index+1, swapped, sortedCount);
}

