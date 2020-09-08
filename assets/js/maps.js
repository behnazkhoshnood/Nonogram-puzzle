let markers;
let map;
let previousMarker;
/** 
 * a function that initialize the map
 **/
function initMap() {
    const myLatlng = {lat: 44.5200, lng: 36.3000};
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: myLatlng
    });

    markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    new MarkerClusterer(map, markers,
        {
            imagePath:
            img
        });
}

$(document).ready(function () {
    renderRankingTable();
});

function renderRankingTable() {
    const namesTable = $("#names tr");
    const rows = Array.from(namesTable);
    rows.forEach(function (row) {
        const createClickHandler = function (row) {

            return function () {
                selectMapMarker(row);
            };
        };
        row.onclick = createClickHandler(row);
    });
    $("tr").click(selectRanking);
}

function selectMapMarker(row) {
    const nameCell = row.getElementsByTagName("td")[1];
    const name = nameCell.innerHTML;

    /* A function to find markers
      @param {string} m
      @return {string} m.label
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
}

/**
         * Changes the color of the selected row in the ranking table
        **/
function selectRanking() {
    $("tr").removeClass("make-purple");
    $(this).addClass("make-purple");
    scrollToMap();
    if ($(this).prop("id") === "header") {
        initMap();
    }
}

/* A function to scroll to map

*/

function scrollToMap() {
    const map = document.getElementById("map");
    map.scrollIntoView({behavior: "smooth"});
}
