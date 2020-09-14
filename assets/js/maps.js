/**
 * Variables
 **/
let markers = null;
let map = null;
let previousMarker = null;

/**  
 * A function that initialize the google map.
 **/
function initMap() {
    const myLatlng = {lat: 44.5200, lng: 36.3000};
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: myLatlng
    });
    markers = USER_LOCATIONS.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: USERS[i % USERS.length]
        });
    });
    if (markers === null){
        alert("Contact Sopport")
    }
    new MarkerClusterer(map, markers,
        {
            imagePath:
                INT_IMG
        });
}

/** 
 * A function that render ranking table and bring back the location of the      * labels of each table row on the google map.
 **/
function renderRankingTable() {
    const namesTable = $("#names tr").not("tr:first");
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

/**
 *  A function that select map marker by the players name and reove the      
 *  previous markers from the map.
 *  @param {string} row html element of selected ranking row
**/
function selectMapMarker(row) {
    if (map === null){
        alert("please cont")
    }
    const nameCell = $("td")[1];
    const name = nameCell.innerHTML;
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
 * Changes the color of the selected row in the ranking table. 
**/
function selectRanking() {
    $("tr").removeClass("make-purple");
    $(this).addClass("make-purple");
    scrollToMap();
    if ($(this).hasClass("header")) {
        initMap();
    }
}
/** 
 *  A function to scroll to map.
 **/
function scrollToMap() {
    const map = $("#map");
    map[0].scrollIntoView({behavior: "smooth"});
}

$(document).ready(function () {
    renderRankingTable();
});