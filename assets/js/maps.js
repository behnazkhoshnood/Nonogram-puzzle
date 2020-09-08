/* function initial map 
   @param {void} Nothing
   return {obj} myLatLng
   */

function initMap() {
    const myLatlng = {lat: 44.5200, lng: 36.3000};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: myLatlng
    });

    $(document).ready(function () {

        const labels = ["Alex", "Rohit", "Behnaz", "Garo", "Mahsa", "Eric", "Ali", "Behrooz", "Jack", "Fariba"];

        const locations = [
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

        /* A function for putting markers on the map
           @param{obj} location
           @param{number} i 
           @return {obj} location
        */
        const markers = locations.map(function (location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });


        let markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

        let previousMarker = null;
        const namesTable = document.getElementById("names");
        const rows = namesTable.getElementsByTagName("tr");

        let i;
        for (i = 1; i < rows.length; i++) {
            const currentRow = namesTable.rows[i];

            /* A function to create click handler
               @param {array} row
               @return {obj} function
            */

            const createClickHandler = function (row) {

                return function () {
                    const nameCell = row.getElementsByTagName("td")[1];
                    const name = nameCell.innerHTML;

                    /* A function to find markers
                      @param {string} m
                      @return {string} label
                    */

                    const marker = markers.find(function (m) {
                        return m.label === name;

                    });

                    if (marker) {
                        if (previousMarker && previousMarker.setMap) {
                            previousMarker.setMap(null);
                        }
                        marker.setMap(map);
                        previousMarker = marker;
                        map.setZoom(13);
                        map.panTo(marker.position);
                    }
                };
            };
            currentRow.onclick = createClickHandler(currentRow);
        }

        /* A function to scroll to map 
           @param {void} Nothing
        */

        function scrollToMap() {
            const map = document.getElementById("map");
            map.scrollIntoView({behavior: "smooth"});
        }

        /* A function to click on tr 
           @param {void} Nothing
           @return {obj} function
        */

        $("tr").click(function () {
            $("tr").removeClass("make-purple");
            $(this).addClass("make-purple");
            scrollToMap();
            if ($(this).prop("id") === "header") {
                initMap();
            }
        });

    });

}



