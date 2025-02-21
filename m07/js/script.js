document.addEventListener("DOMContentLoaded", function () {
    function Hotel(name, rooms, booked) {
        this.name = name;
        this.rooms = rooms;
        this.booked = booked;
        this.checkAvailability = function () {
            return this.rooms - this.booked;
        };
    }

    // Create hotel objects
    var quayHotel = new Hotel("Quay", 40, 25);
    var parkHotel = new Hotel("Park", 120, 77);
    var sunsetHotel = new Hotel("Sunset", 86, 10);

    // Display hotel data in the correct elements
    function displayHotelInfo(hotel, elementId) {
        var hotelElement = document.getElementById(elementId);
        if (hotelElement) {
            hotelElement.innerHTML = "Available Rooms: " + hotel.checkAvailability();
        }
    }

    // Call the function for each hotel
    displayHotelInfo(quayHotel, "quay-availability");
    displayHotelInfo(parkHotel, "park-availability");
    displayHotelInfo(sunsetHotel, "sunset-availability");
});
