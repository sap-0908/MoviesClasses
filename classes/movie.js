const Actor = require("./actor")

class Movie {
    constructor ( title , duration , rating , cast=[]) {
        this.title = title ;
        this.duration = duration ;
        this.rating = rating ;
        this.cast = [] ;
}

isLong( ) {
    if (this.duration > 150) {
        return true ;
    } else {
    return false ;
}
}

updateRating (num)  {
    this.rating = num ;
    return this.rating ;
}

static actorInMovie (movie, name) {
    for(let i=0 ; i < movie.cast.length ; i++) {
        // console.log("1", movie.cast[i])
        if(name === movie.cast[i].name) {
        return true ;
    } else {
        return false ;
}
}
}
}





module.exports = Movie
