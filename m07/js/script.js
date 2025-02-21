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
var hotels = [
    new Hotel("Quay", 40, 25),
    new Hotel("Park", 120, 77),
    new Hotel("Sunset", 86, 10)
];

// Function to Display Hotel Info
function displayHotels() {
    var hotelContainer = document.getElementById("hotel-info");
    hotelContainer.innerHTML = ""; // Clear previous content

    hotels.forEach(hotel => {
        hotelContainer.innerHTML += `
            <h2>${hotel.name}</h2>
            <p>${hotel.rooms} rooms, ${hotel.booked} booked</p>
            <p>Available Rooms: ${hotel.checkAvailability()}</p>
            <hr>
        `;
    });
}

// Display all hotels
displayHotels();
