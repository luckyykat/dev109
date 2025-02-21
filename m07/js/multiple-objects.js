// ✅ Ensure script loads
console.log("multiple-objects.js has loaded!");

// ✅ Hotel Constructor Function
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}

// ✅ Hotel Objects
var quayHotel = new Hotel("Quay", 40, 25);
var parkHotel = new Hotel("Park", 120, 77);
var sunsetHotel = new Hotel("Sunset", 86, 10);

// ✅ Function to Display Hotel Info
function displayHotelInfo(hotel, elementClass) {
    var hotelElements = document.getElementsByClassName(elementClass);
    if (hotelElements.length > 0) {
        hotelElements[0].innerHTML += `<p>Available Rooms: ${hotel.checkAvailability()}</p>`;
    }
}

// ✅ Display Hotels in HTML
displayHotelInfo(quayHotel, "hotel");
displayHotelInfo(parkHotel, "hotel");
displayHotelInfo(sunsetHotel, "hotel");
