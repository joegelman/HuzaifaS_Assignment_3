// Task 1 - Write a JavaScript program to list the properties of a JavaScript object.

var student = {
    name : "Joseph",
    sclass : "11",
    rollno : 13 }

let entries = Object.entries(student);
console.log(entries);

// Task 2 - Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. 

var student = {
    name : "Joseph",
    sclass : "11",
    rollno : 13 }

// log before deletion

console.log(student);

// DELETE

delete student.rollno;

// log after deletion

console.log(student);

// Task 3 - Write a JavaScript program to get the length of a JavaScript object.

var student = {
    name : "Joseph",
    sclass : "11",
    rollno : 13 }

let objectLength = Object.entries(student).length;
console.log(objectLength);

// Task 4 - Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];



    library.forEach((e, i) => {
    var book = `${library[i].title} by ${library[i].author}`;
    console.log(library[i].readingStatus === true ? `Already read ${book}` : `You still need to read ${book}`);
    });

// Task 5 - Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.  
//// Volume of a cylinder : V = πr2h
//// where r is the radius and h is the height of the cylinder.

class Cylinder {
    constructor(radius, height) {
        this.height = height;
        this.radius = radius;
    }
    get volume() {
        return this.calcVolume();
    }

    calcVolume() {
        return Math.round(this.height * this.radius * Math.PI);
    }
}

const cyl = new Cylinder(4, 6);

console.log(cyl.volume);

// Task 6 - Write a JS program to get the perimeter of the circle

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get circumference() {
        return this.calcCirc();
    }

    calcCirc() {
        return Math.round(this.radius * 2 * Math.PI);
    }
}

const circle = new Circle(4)

console.log(circle.circumference)

// Task 7 - Write a JS program to calculate the factorial without the recursion method

function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
            num = num * i;
    }
    return num;
};

console.log(factorialize(5));
