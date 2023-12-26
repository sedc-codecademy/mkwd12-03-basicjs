//objects 
let person = {};
console.log(typeof person);

// let arr=[];
// console.log(typeof arr);

let firstName="aleksandra";
console.log(firstName.toUpperCase());


let hotel={
    //properties
    name:"Hotel Palas",
    rooms:120,
    booked:70,
    gym:true,
    roomTypes:["twin","double","suite"],

    //methods
    checkAvailability: function(){
        return this.rooms-this.booked;
    }
}

hotel.checkAvailability = function(){
    return this.rooms-this.booked
}


console.log(hotel);
console.log(typeof hotel);

console.log(hotel.gym);
console.log(hotel.checkAvailability());
console.log(hotel.roomTypes[1]);

let availableRooms=hotel.checkAvailability();
console.log(`This hotel has ${availableRooms} available rooms`);


let aleksandra={
    name:"Aleksandra",
    age:28,
    canSing:false,
    birthYear:1995
}

console.log(aleksandra);

//adding with .
aleksandra.lastName="Mitkovska";
console.log(aleksandra);


//deleting with delete keyword
delete aleksandra.canSing;
console.log(aleksandra);


let trainer = { 
	name :  "Stefan",
	lastName: "Stefanovski",
	academy: "SEDC",
	lecture: "Objects"
}

delete trainer.lecture;
trainer.age=30;
trainer.getFullName=function(){
    return this.name + " "+ this.lastName;
}

console.log(trainer);
console.log(trainer.getFullName());


//CONSTRUCTOR
function Hotel(name,rooms,booked){
this.name=name;
this.rooms=rooms;
this.booked=booked;
this.checkAvailability=function(){
    return this.rooms-this.booked;
}

}

let hotel1=new Hotel("Aleksandrija",100,70);
console.log(hotel1);
console.log(`In hotel ${hotel1.name} there are ${hotel1.checkAvailability()} rooms available`);

let hotel2=new Hotel("Palas",200,20);
console.log(`In hotel ${hotel2.name} there are ${hotel2.checkAvailability()} rooms available`);


//constructor PERSON
//name,lastName, student(true/false),age,fullName()
//two objects from the constructor one student one not student

function Person(name,lastName,age,isStudent){
    this.name=name;
    this.lastName=lastName;
    this.age=age;
    this.isStudent=isStudent;
    this.getFullName=function(){
        return this.name + " " + this.lastName;
    }
}

let person1=new Person("Aleksandra","Mitkovska",28,false);
console.log(person1);
console.log(person1.getFullName());


let person2=new Person("Nikola","Filkoski",22,false);
console.log(person2);
console.log(person2.getFullName());

