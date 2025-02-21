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
function displayHotelInfo(hotel, elementId) {
    var hotelDiv = document.getElementById(elementId);
    if (hotelDiv) {
        hotelDiv.innerHTML = `
            <h2>${hotel.name}</h2>
            <p>Rooms: ${hotel.rooms}</p>
            <p>Booked Rooms: ${hotel.booked}</p>
            <p>Available Rooms: ${hotel.checkAvailability()}</p>
        `;
    }
}

// Display all hotels
displayHotelInfo(quayHotel, "quay");
displayHotelInfo(parkHotel, "park");
