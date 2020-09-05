function initMap() {
    const myLatlng = {lat: 44.5200, lng: 36.3000};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: myLatlng
    });

    var labels = ["Alex", "Rohit", "Behnaz", "Garo", "Mahsa", "Eric", "Ali", "Behrooz", "Jack", "Fariba"];

    var locations = [
        {lat: 52.5200, lng: 13.4050},//Berlin
        {lat: 51.5074, lng: 0.1278},//London
        {lat: 59.3293, lng: 18.0680},//Stockholm
        {lat: 34.8021, lng: 38.9968},//Syria
        {lat: 29.5926, lng: 52.5849},//Shiraz
        {lat: 59.3293, lng: 18.0686},//Stockholm
        {lat: 29.5926, lng: 52.5836},//Shiraz
        {lat: 29.5920, lng: 52.5824},//Shiraz
        {lat: 52.5200, lng: 13.4055},//Berlin
        {lat: 29.5922, lng: 52.5835} //Shiraz
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var previousMarker = null;
    var namesTable = document.getElementById("names");
    var rows = namesTable.getElementsByTagName("tr");
    for (i = 1; i < rows.length; i++) {
        var currentRow = namesTable.rows[i];
        var createClickHandler = function (row) {
            return function () {
                var nameCell = row.getElementsByTagName("td")[1];
                var name = nameCell.innerHTML;
                var marker = markers.find(function (m) {
                    return m.label == name;

                });

                if (marker) {
                    if (previousMarker && previousMarker.setMap) {
                        previousMarker.setMap(null)
                    }
                    marker.setMap(map);
                    previousMarker = marker;
                    map.setZoom(10);
                    map.panTo(marker.position);
                }
            };
        };
        currentRow.onclick = createClickHandler(currentRow);
    }

}

$(document).ready(function () {
    $("tr").click(function () {
        $('tr').removeClass('make-purple');
        $(this).addClass('make-purple');
});
        function scrollToMap() {
            var map = document.getElementById("map");
            map.scrollIntoView({behavior: "smooth"});

        }

        $("tr").on("click", function () {
            scrollToMap();
        });   
});
