//variables
let hotelName = "Panorama hotel";
let numOfRooms = 50;
let bookedRooms = 32;

//Object

//let hotel = {};

let hotel = new Object();

hotel.name = "Panorama Hotel";
hotel.numOfRooms = 40;
hotel.bookedRooms = 0;
hotel.numOfStars = 5;
hotel.gym = true;

hotel.greeting = function(){
    alert("Hello from Panorama Hotel!!");
}

hotel.isAvailable = function(numOfRoomsToReserve){
    let freeRooms = this.numOfRooms - this.bookedRooms;
    if(freeRooms >= numOfRoomsToReserve){
        console.log(`We reserved ${numOfRoomsToReserve} rooms to you.`);
        this.bookedRooms += numOfRoomsToReserve;
    }else{
        console.log("Sorry, we are booked!");
    }
}


console.log(`Welcome to ${hotel.name}`);
console.log(`Number of rooms in our hotel: ${hotel.numOfRooms}`);
console.log(`Number of booked rooms in our hotel: ${hotel.bookedRooms}`);

console.log(hotel);

//hotel.greeting();
hotel.isAvailable(25);

//UPDATE PROPERTY (CHANGE PROPERTY)
//hotel.bookedRooms = 34;
console.log(`New value: ${hotel.bookedRooms}`);
hotel.isAvailable(6);
console.log(`New value: ${hotel.bookedRooms}`);


console.log("======= SECOND EXAMPLE =======");

let anotherHotel = {
    name: "Merlot Hotel",
    numOfRooms: 60,
    hasGym: true,
    roomTypes: ["single", "double", "suite"],
    printRoomTypes: function(){
        console.log("Types of rooms:");
        for(let roomType of this.roomTypes){
            console.log(roomType);
        }
    }
}

console.log(`Welcome to ${anotherHotel.name}`);
anotherHotel.printRoomTypes();

let numberOfBookedRooms = prompt("Enter num of booked rooms:");
//ADDING PROPERTY IN OBJECT
anotherHotel.numOfBookedRooms = parseInt(numberOfBookedRooms);

console.log(anotherHotel);
console.log(`has property numOfRooms: ${anotherHotel.hasOwnProperty("numOfRooms")}`);
console.log(`numOfRooms value: ${anotherHotel.numOfRooms}`);
//ADDING METHOD IN OBJECT

anotherHotel.canDoExercise = function(){
    return this.hasGym === true;
}

let anotherHotelHasGym = anotherHotel.canDoExercise();
console.log(`Another hotel has gym: ${anotherHotelHasGym}`);

// DELETE THE PROPERTY
delete anotherHotel.numOfRooms;
console.log(anotherHotel);
console.log(`has property numOfRooms: ${anotherHotel.hasOwnProperty("numOfRooms")}`);
console.log(`numOfRooms value: ${anotherHotel.numOfRooms}`); //undefined