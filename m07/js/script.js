// Define hotel constructor function
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
}

// Existing hotel objects
var quayHotel = new Hotel("Quay", 40, 25);
var parkHotel = new Hotel("Park", 120, 77);

// 🔥 New hotel object as per assignment requirements
var sunsetHotel = new Hotel("Sunset", 86, 10);

// Function to display hotel details
function displayHotelInfo(hotel, elementId) {
    var hotelInfo = "<h2>" + hotel.name + "</h2>";
    hotelInfo += "<p>Rooms: " + hotel.rooms + "</p>";
    hotelInfo += "<p>Booked Rooms: " + hotel.booked + "</p>";
    hotelInfo += "<p>Available Rooms: " + hotel.checkAvailability() + "</p>";
    document.getElementById(elementId).innerHTML = hotelInfo;
}

// Display all three hotels
displayHotelInfo(quayHotel, "hotel1");
displayHotelInfo(parkHotel, "hotel2");
displayHotelInfo(sunsetHotel, "hotel3"); // Displays Sunset Hotel
