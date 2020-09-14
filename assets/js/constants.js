/** 
 * map.js constants. 
**/
let markers = null;
let map = null;
let previousMarker = null;
const INIT_MAP = {lat: 44.5200, lng: 36.3000};
const USERS = ["Alex", "Rohit", "Behnaz", "Garo",
    "Mahsa", "Eric", "Ali", "Behrooz", "Jack", "Fariba"];

const USER_LOCATIONS = [
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
const INT_IMG = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
const USERS_ROW = $("#names tr").not("tr:first");
const ROWS = Array.from(USERS_ROW);
/** 
 * scripts.js constants. 
**/
const NOTES = ["the only way to have a sequence of 1 and 2 seperate colored boxes in the 3rd column is to click on the first and the last boxes in this column when the colored button is active.",
    "In the 2nd row, we want to fit 2 seperate colored boxes in 3 squares.<br> Click on the colored button and then click on the first and the last box in the 2nd row.",
    "Now click on the gray button and then click on all the boxes in first and last column since they already have one colored box in them",
    "First click on all the boxes in 3rd row when colored button is active"];
const NO_HINTS = "Sorry, you have no hints left.";
const WINING_MESSAGE = "congratulations. You have won the game";
const LOSING_MESSAGE = "You've lost this time! Good luck for your next try";
const NOT_CLICKED_COLORED = "not-clicked-color"
/** 
 * sendEmail.js constants. 
**/
const SUPPORT_MESSAGE = "Your massage has been successfully sent."
