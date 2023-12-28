console.log("It works");

/*
CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
name
kind
speak (method)
this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
*/

class Animal {
  constructor(name, kind) {
    this.name = name;
    this.kind = kind;
  }

  speak(message) {
    console.log(`${this.name} which is a ${this.kind} says: ${message}`);
  }
}

const cat = new Animal("Tom", "Cat");

cat.speak("I am a cool cat");

console.log(cat);

// const animalName = prompt("What is the animal name?");
// const animalKind = prompt("What kind is the animal?");
// const animalMsg = prompt("What does the animal say?");

// const animalObj = new Animal(animalName, animalKind);

// animalObj.speak(animalMsg);

/*
Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.
Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
*/

class Book {
  constructor(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
  }

  checkReadingStatus() {
    if (this.readingStatus)
      return `Already read '${this.title}' by ${this.author}`;

    return `You still need to read '${this.title}' by ${this.author}`;

    // Already read 'The Robots of dawn' by Isaac Asimov.
    //You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.
  }
}

const redRising = new Book("Red Rising", "Pierce Brown", true);
const goldenSon = new Book("Golden Son", "Pierce Brown", false);

console.log(redRising.checkReadingStatus());
console.log(goldenSon.checkReadingStatus());

const bookTitle = prompt("Book name please");
const bookAuthor = prompt("Book author please");
const bookReadingStatus = confirm("Is the book read or not?");

const studentBook = new Book(bookTitle, bookAuthor, bookReadingStatus);

console.log(studentBook.checkReadingStatus());
