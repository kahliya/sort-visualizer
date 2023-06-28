class Bar {
    constructor (htmlElement, height) {
        this.htmlElement = htmlElement;
        this.height = height;
    }

    compareTo(other) {
        if (this.height > other.height) {
            return 1
        } else if (this.height === other.height) {
            return 0
        } else {
            return -1;
        }
    }

    setColor(color) {
        let classList = this.htmlElement.classList;
        switch (color) {
            case 'red': 
                classList.add('bg-red');
                break;
            case 'green':
                classList.add('bg-green');
        }
    }

    resetColor(color) {
        this.htmlElement.classList.remove('bg-red', 'bg-green');
    }
}