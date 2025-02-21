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

// ✅ Create Hotel Objects
var quayHotel = new Hotel("Quay", 40, 25);
var parkHotel = new Hotel("Park", 120, 77);

// ✅ Function to Display Hotel Info
function displayHotelInfo(hotel, elementId) {
    var hotelInfo = `<h2>${hotel.name}</h2>
                     <p>Rooms: ${hotel.rooms}</p>
                     <p>Booked Rooms: ${hotel.booked}</p>
                     <p>Available Rooms: ${hotel.checkAvailability()}</p>`;
    document.getElementById(elementId).innerHTML = hotelInfo;
}

// ✅ Display Hotels in HTML
displayHotelInfo(quayHotel, "hotel1");
displayHotelInfo(parkHotel, "hotel2");
