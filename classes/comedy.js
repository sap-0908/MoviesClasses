const Movie = require("./movie")

class Comedy extends Movie {
    constructor (title , duration , rating , laughsPerMinute ) {
        super(title , duration, rating);
        this.laughsPerMinute = laughsPerMinute ;
}
}

let zoolander = new Comedy("Zoolander", 107, 7.3, 4);
// let regularMovie = new Movie("Gladiator", 155, 8.5);
// let someProperty = "title"

console.log (zoolander)


module.exports = Comedy
