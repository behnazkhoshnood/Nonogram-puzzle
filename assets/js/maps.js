/**  
 * A function that initialize the google map.
**/
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: INIT_MAP_POSITION
    });
    markers = USER_LOCATIONS.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: USER_NAMES[i % USER_NAMES.length]
        });
    });
    new MarkerClusterer(map, markers,
        {
            imagePath:
            INIT_MAP_IMG
        });
}
$(document).ready(function () {
    renderRankingTable();
});

/** 
 * A function that render ranking table and bring back the location of the 
 * users of each row on the google map. 
**/
function renderRankingTable() {
    ROWS.forEach(function (row) {
        const createClickHandler = function (row) {
            return function () {
                selectMapMarker(row);
            };
        };
        row.onclick = createClickHandler(row);
    });
    $("tr").click(selectRanking);
}

/** A function that select map marker by the players name.
*   @param {string} m
*   @return {string} m.label
**/ 
function selectMapMarker(row) {
    const NAME_CELL = row.getElementsByTagName("td")[1];
    const NAME = NAME_CELL.innerHTML;
    const marker = markers.find(function (m) {
        return m.label === NAME;
    });
    if (marker) {
        if (previousMarker && previousMarker.setMap) {
            previousMarker.setMap(null);
        }
        marker.setMap(map);
        previousMarker = marker;
        map.setZoom(10);
        map.panTo(marker.position);
    }
}
/** Changes the color of the selected row in the ranking table. **/
function selectRanking() {
    $("tr").removeClass(BG_PURPLE);
    $(this).addClass(BG_PURPLE);
    scrollToMap();
    if ($(this).hasClass("header")) {
        initMap();
    }
}
/** / A function to scroll to map. **/
function scrollToMap() {
    const map = $("#map");
    map[0].scrollIntoView({behavior: "smooth"});

}
