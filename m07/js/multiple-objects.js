console.log("multiple-objects.js has loaded!");

// Hotel Constructor Function
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    };
}

// Create two hotel objects
var quayHotel = new Hotel("Quay", 40, 25);
var parkHotel = new Hotel("Park", 120, 77);

// Function to display hotels
function displayHotelInfo(hotel, elementId) {
    var hotelElement = document.getElementById(elementId);
    if (hotelElement) {
        hotelElement.innerHTML = `<h2>${hotel.name}</h2>
                                  <p>Rooms: ${hotel.rooms}</p>
                                  <p>Booked Rooms: ${hotel.booked}</p>
                                  <p>Available Rooms: ${hotel.checkAvailability()}</p>`;
    }
}

// Display the two hotels
displayHotelInfo(quayHotel, "hotel1");
displayHotelInfo(parkHotel, "hotel2");
