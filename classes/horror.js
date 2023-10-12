const Movie = require("./movie")

class Horror extends Movie {
    constructor (title , duration , rating , scareLevel ) {
        super(title , duration, rating);
        this.scareLevel = scareLevel ;
}
addScare() {
    this.scareLevel += 1 ;
}
}


let insidious = new Horror("Insidious", 103, 6.8, 8);
console.log(insidious.addScare(2))

let n =1;
n+=1
console.log(n)

module.exports = {Horror}
