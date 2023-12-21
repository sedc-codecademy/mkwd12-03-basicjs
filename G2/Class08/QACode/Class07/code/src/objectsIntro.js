let hotelName = "Our hotel";
let numOfRooms = 20;

//let hotel = {};
let hotel = new Object();
hotel.name = "Our hotel";
hotel.numOfRooms = 30;
hotel.bookedRooms = 10;
hotel.numOfStars = 4;

hotel.greeting = function(){
    alert("Hello from our hotel");
};

hotel.isAvailable = function(numOfRoomsToReserve){
    //this.numOfRooms -> hotel.numOfRooms
    let freeRooms = this.numOfRooms - this.bookedRooms; // this -> hotel
    if(freeRooms >= numOfRoomsToReserve){
        console.log(`We reserved ${numOfRoomsToReserve} to you`);
    }
    else{
        console.log('Sorry, we are booked!');
    }
}

console.log(`Num of rooms in our hotel: ${hotel.numOfRooms}`);
console.log(`Welcome to ${hotel.name}`);
console.log(hotel);

hotel.greeting();
hotel.isAvailable(23);

console.log(`Num of stars of the hotel: ${hotel.numOfStars}`);
//..........
hotel.numOfStars = 5;
console.log(`Num of stars of the hotel after update: ${hotel.numOfStars}`);

//another example
let anotherHotel = {
    name : "Another hotel",
    numOfRooms : 60,
    hasGym : false,
    roomTypes : ["single", "double", "suite"],
    printRoomTypes : function(){
        console.log("Types of rooms:");
        for(let roomType of this.roomTypes){
            console.log(roomType);
        }
    }
}
console.log(`Welcome to ${anotherHotel.name}`);
anotherHotel.printRoomTypes();

anotherHotel.name = "Another hotel updated";
console.log(`Welcome to ${anotherHotel.name}`);
console.log(anotherHotel);

let numberOfBookedRooms = prompt("Enter num of booked rooms in another hotel:");
//ADDING PROPERTY
anotherHotel.numOfBookedRooms = parseInt(numberOfBookedRooms);
console.log(anotherHotel);

anotherHotel.canDoExercise = function(){
    return this.hasGym == true;
}

let anotherHotelHasGym = anotherHotel.canDoExercise();
console.log(`Another hotel has gym: ${anotherHotelHasGym}`);

console.log(`has property roomTypes: ${anotherHotel.hasOwnProperty("roomTypes")}`);
console.log(`has property numOfStars: ${anotherHotel.hasOwnProperty("numOfStars")}`);

//DELETE THE PROPERTY
console.log(`has property numOfRooms: ${anotherHotel.hasOwnProperty("numOfRooms")}`);
delete anotherHotel.numOfRooms;
console.log(`has property numOfRooms: ${anotherHotel.hasOwnProperty("numOfRooms")}`);