// Creating the map in the middle of Dublin
var map = L.map('map').setView([53.358236, -6.260319], 13);

// Adding the tile layer, zoom & copyright
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Adding the 3 markers on the map with picture + message + name
var marker = L.marker([53.349, -6.26]).addTo(map);
marker.bindPopup("<img class='map-popup' src='assets/images/map-photos/marker_1.jpg'></img><p class='map-wishes'>\"Hope your Christmas is as tasty as ours! 🤤\"</p><p>Mary Smith</p>");

var marker2 = L.marker([53.345, -6.26]).addTo(map);
marker2.bindPopup("<img class='map-popup' src='assets/images/map-photos/marker_2.jpg'></img><p class='map-wishes'>\"Christmas @ Temple Bar 🎄\"</p><p>John Murphy</p>");

var marker3 = L.marker([53.347, -6.29]).addTo(map);
marker3.bindPopup("<img class='map-popup' src='assets/images/map-photos/marker_3.jpg'></img><p class='map-wishes'>\"I think we're going to have a White Christmas this year ❄️\"</p><p>Liam Doyle</p>");