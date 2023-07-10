
class Movie {
    constructor(movie, studio, rating = "PG") {
        this.movie = movie;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(arr) {
        // let pgMovies =[];
        let pgMovies= arr.filter((value) => value.rating === "PG-13"); {
           
        console.log(pgMovies);
        }
    }
}
let movies = [  new Movie("Viswasam", "Night Studio", "PG-11"),
    new Movie("Komban", "Light Studio", "PG-13"),
    new Movie("Kaanjana", "Might Studio", "PG-13")  ];
  
const movieObj = new Movie();              
movieObj.getPG(movies);

class Person {
    constructor(name, age, place, email) {
        this.name= name;
        this.age= age;
        this.place= place;
        this.email= email;
    }
    getDetails() {
        // let person = [];

        console.log(`Name: ${this.name}, Age: ${this.age}, Place: ${this.place}, Email: ${this.email}`)
    }
}
    const personObj = new Person("Mohammed Faseeullah", "24", "Chennai", "faseeullah.1998@gmail.com");
    // let personObj = [];
    personObj.getDetails();

class UBERPriceCalculator {
    constructor(ratePerUnit) {
        this.ratePerUnit = ratePerUnit;
    }
    priceCal()  {
        const totalPrice = this.ratePerUnit * this.units;
        console.log(`The Total Price is: ${totalPrice}`)
    }
}
const calC = new UBERPriceCalculator(10);
calC.units = 5;
// const totalPrice = ratePerUnit * units;
calC.priceCal();

class Circle {
    constructor(radius, colour) {
        this.radius= radius;
        this.colour= colour;
    }

getRadius() {
    return this.radius;
};
setRadius(value) {
    return this.radius=value;
}
getColour() {
    return this.colour
}
setColour(value) {
    return this.colour=value;
}
getArea() {
    return Math.PI * this.radius * this.radius;
}
getCircumference() {
    return 2 *  Math.PI * this.radius;
}
}
let cir = new Circle(1.0, "red");
console.log(cir.getArea());
console.log(cir.getCircumference());