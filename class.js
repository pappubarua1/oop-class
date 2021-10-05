//class

Class Rect {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateA(){
        return this.width * this.height;
    },
    calculateB(){
        return 2 * (this.width + this.height);
    }
};

var rect = new Rect(2, 4);
var rect2 = new Rect(4, 5)