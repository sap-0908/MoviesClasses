const { expect } = require("chai");

/* In lines 6-8, We're importing all of the Classes so that we can use them in the below tests
A class is a blueprint that defines the variables (often called attributes or properties)
and the methods (functions) that are common to all objects of a certain kind. */
const Movie = require("../classes/movie.js");
const {Horror} = require("../classes/horror.js");
const Comedy = require("../classes/comedy.js");
const {Action} = require("../classes/action.js");
const Actor = require("../classes/actor.js");


describe("Movie class", function() {

    it("should set title, duration, and rating on creation", function() {
        /* An instance is an individual object that is a realization of the class. It has its own
        set of values for the properties defined in the class and can use the methods defined by the class.*/

        /*here we're creating an instance of a movie.
        An instance is just an object that belongs to a class*/
        let movie = new Movie("The Matrix", 142, 9.3);

        //since an instance is just an object, we can key into its properties
        //keying into an object evaluates to the value at the key
        expect(movie.title).to.equal("The Matrix");
        expect(movie.rating).to.equal(9.3);
        expect(movie["duration"]).to.equal(142);
    });

    it("should correctly determine if a movie is long (more than 150 minutes)", function() {
        //creating random instances to test the isLong method
        let longMovie = new Movie("Titanic", 195, 7.8);
        let shortMovie = new Movie("The Lion King", 100, 8.1);

        //instance methods have to be called on an instance of the class where the method is defined
        expect(longMovie.isLong()).to.be.true;

        //When I call isLong on shortMovie, it should (evaluate to/return) false
        expect(shortMovie.isLong()).to.be.false;
    });

    it("should allow updating the rating", function() {
        //random instance
        let randyRandom = new Movie("Inception", 148, 8.8);

        //What do you think line 47 is doing?
        randyRandom.updateRating(9.0);

        // If you said calling the updateRating method on the randyRandom instance of the Movie class
        // which updates the randyRandom instance's rating to the argument that's passed in,
        // then you are correct!
        expect(randyRandom["rating"]).to.equal(9.0);
    });
});


describe("Horror class", function() {
    it("inherits from the Movie class and includes a scareLevel attribute", function() {
        let insidious = new Horror("Insidious", 103, 6.8, 8);
        let regularMovie = new Movie("The Lion King", 117, 8.0);
        let keyingIntoAProperty = "scareLevel"

        //is insidious.scareLevel calling a method?
        expect(insidious.scareLevel).to.equal(8);

        let answerToLine68 = false;

        if(!answerToLine68){
            expect(regularMovie[keyingIntoAProperty]).to.be.undefined;
        }

        expect(insidious instanceof Horror).to.be.true;
        expect(insidious instanceof Movie).to.be.true;
    });
    it("has a method that increases the scare level", function() {
        let theGrudge = new Horror("The Grudge", 110, 7, 6);

        //Here we're calling an instance method
        theGrudge.addScare()
        theGrudge.addScare()

        expect(theGrudge.scareLevel).to.equal(8);


        let cabinInTheWoods = new Horror("Cabin in The Woods", 100, 7, 0);

        //What do you think cabinInTheWoods.scareLevel is after the while loop?
        let i = 10;
        while (i < 15){
            cabinInTheWoods.addScare()
            i++
        }

        //What do you think cabinInTheWoods.scareLevel is after the for loop?
        for(let j = 0; j < 5; j++){
            cabinInTheWoods.addScare()
        }

        expect(cabinInTheWoods.scareLevel).to.equal(10);

        //When is a function's return value undefined?
        expect(cabinInTheWoods.addScare()).to.be.undefined
        expect(cabinInTheWoods.scareLevel).to.equal(11);
    })
});

/* The rest of the tests don't have many hints.  See if you can try and understand what's going on.
We will do a deep dive into test specs starting Tuesday.  Please reach out if you have any questions! */

describe("Comedy class", function() {
    it("inherits from the Movie class and includes a laughsPerMinute attribute", function() {
        let zoolander = new Comedy("Zoolander", 107, 7.3, 4);
        let regularMovie = new Movie("Gladiator", 155, 8.5);
        let someProperty = "title"

         expect(zoolander[someProperty]).to.be.equal("Zoolander");

        expect(zoolander.laughsPerMinute).to.equal(4);
        expect(regularMovie.laughsPerMinute).to.be.undefined;

        expect(zoolander instanceof Comedy).to.be.true;
        expect(zoolander instanceof Movie).to.be.true;
    });
});

describe("Action class", function() {
    it("inherits from the Movie class and includes an explosionCount attribute", function() {
        let dieHard = new Action("Die Hard", 132, 8.2, 15);
        let regularMovie = new Movie("The Notebook", 124, 7.8);
        let variable = dieHard.explosionCount

        expect(regularMovie.explosionCount).to.be.undefined;
        expect(variable).to.equal(15);

        expect(dieHard instanceof Action).to.be.true;
        expect(dieHard instanceof Movie).to.be.true;
    });
});


describe("Actor class", function() {
    it("should set the actor's name on creation", function() {
        //unconventional approaches intended to highlight older concepts

        expect(new Actor("John Wayne").name).to.equal("John Wayne");

        let actor = new Actor("Leonardo DiCaprio");
        let apple = "name"
        let taco = actor

        expect(taco[apple]).to.equal("Leonardo DiCaprio");
    });
});


describe("Movie class", function() {
    it("should have a cast which can be populated with actor instances", function() {
        let movie = new Movie("Inception", 148, 8.8);
        let leo = new Actor("Leonardo DiCaprio");
        let ellen = new Actor("Ellen Page");

        //Hint: What data type do we call push on?
        //You may need to revisit your model and add a property.
        movie.cast.push(leo);
        movie.cast.push(ellen);

        expect(movie.cast).to.deep.include.members([leo, ellen]);
    });


    it("should correctly determine if an actor is in the movie", function() {
        let movie = new Movie("The Departed", 151, 8.5);
        let leo = new Actor("Leonardo DiCaprio");
        movie.cast.push(leo);

        //Hint: always check what the method is being called on to figure
        //out where and how it should be declared
        expect(Movie.actorInMovie(movie, "Leonardo DiCaprio")).to.be.true;

        //to.be or to.equal tell you what the method needs to evaluate to
        expect(Movie.actorInMovie(movie, "Tom Hanks")).to.be.false;
    });
});


it("should throw an error if the rating is not a number", function() {
    let movie = new Movie("Inception", 148, 8.8);

    // Expecting updateRating method to throw an error if the rating is not a number
    expect(movie.updateRating.bind(movie, "not a number")).to.throw(TypeError, "Rating must be a number.");

    // Expecting updateRating method to not throw an error if the rating is a number
    expect(movie.updateRating.bind(movie, 9.0)).to.not.throw();

    // Check the rating has been updated
    expect(movie.rating).to.equal(9.0);
});
