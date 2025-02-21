// Hotel Constructor Function
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}

// Hotel Objects
var quayHotel = new Hotel("Quay", 40, 25);
var parkHotel = new Hotel("Park", 120, 77);
var sunsetHotel = new Hotel("Sunset", 86, 10);

// Function to Display Hotel Info
function displayHotelInfo(hotel, spanId) {
    var spanElement = document.getElementById(spanId);
    if (spanElement) {
        spanElement.innerText = hotel.checkAvailability();
    } else {
        console.error(`Element with ID "${spanId}" not found.`);
    }
}

// Ensure script runs only after DOM has fully loaded
document.addEventListener("DOMContentLoaded", function() {
    displayHotelInfo(quayHotel, "quay-rooms");
    displayHotelInfo(parkHotel, "park-rooms");
    displayHotelInfo(sunsetHotel, "sunset-rooms");
});
