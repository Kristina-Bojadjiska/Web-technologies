function initMap() {
    // The location (latitude and longitude)
    var location = {lat: 40.748817, lng: -73.985428}; // Example: Empire State Building
    // The map, centered at the location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    // The marker, positioned at the location
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
