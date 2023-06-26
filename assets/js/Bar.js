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
}