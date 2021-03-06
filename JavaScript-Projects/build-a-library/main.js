class Media {
    constructor(title) {
        this._title = title;
        this._ratings = [];
        this._isCheckedOut = true;
    }

    get title() {
        return this._title;
    }

    get ratings() {
        return this._ratings;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }

    getAverageRating() {
        let reducer = (accumulator, currentValue) => accumulator + currentValue;
        let sum = this._ratings.reduce(reducer);
        let total = this.ratings.length;
        return sum / total;
    }

    addRating(rating) {
        this._ratings.push(rating);
    }
}

// class Book

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._title = title;
        this._pages = pages;
        this._author = author;
    }

    get pages() {
        return this._pages;
    }

    get author() {
        return this._author;
    }
}

// class Movie

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get runTime() {
        return this._runTime;
    }

    get director() {
        return this._runTime;
    }
}

// testing

let historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();

//console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(3);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);

//console.log(historyOfEverything.getAverageRating());

let speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(`Checked out: ${speed.isCheckedOut}`);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(`Average Rating: ${speed.getAverageRating()}`);