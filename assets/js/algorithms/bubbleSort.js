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
    let b1 = bars[index-1];
    let b2 = bars[index];
    
    b1.setColor("red");
    playNote(calculateNoteFreq(b1, b2), 50); // 200 is the maximum possible height of the 2 bars.
    
    await sleep(50);
    b1.resetColor();

    if (b1.compareTo(b2) > 0) {
        swapOrder(index-1, index);
        swapped = true;
    }

    if (index+1 >= bars.length-sortedCount) {
        return swapped;
    }

    return bubbleIteration(index+1, swapped, sortedCount);
}