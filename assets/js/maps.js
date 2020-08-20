function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.5200,
            lng: 30.4050
        }
    });


    var labels = ["Alex", "Rohit", "Behnaz", "Garo", "Mahsa", "Eric", "Ali", "Behrooz", "Jack", "Fariba"]

    var locations = [
        {"Alex": {lat: 52.5200, lng: 13.4050},//Berlin
        "Rohit": {lat: 51.5074, lng: 0.1278},//London
        "Behnaz": {lat: 59.3293, lng: 18.0680},//Stockholm
        "Garo": {lat: 34.8021, lng: 38.9968},//Syria
        "Mahsa": {lat: 29.5926, lng: 52.5849},//Shiraz
        "Eric": {lat: 59.3293, lng: 18.0686},//Stockholm
        "Ali": {lat: 29.5926, lng: 52.5836},//Shiraz
        "Behrooz": {lat: 29.5920, lng: 52.5824},//Shiraz
        "Jack": {lat: 52.5200, lng: 13.4055},//Berlin
        "Fariba": {lat: 29.5922, lng: 52.5835}} //Shiraz
    ];

    function showUserOnMap(username) {
        var userLocation = location[username]
    }

    const keys = Object.keys(locations);

    $("tr").on("click", function () {
        showUserOnMap(username);
    });

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}

