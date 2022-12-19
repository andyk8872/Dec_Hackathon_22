// Creating the map in the middle of Dublin
let map = L.map('map').setView([52.3343779,-3.1066974], 6);

// Adding the tile layer, zoom & copyright
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Adding the 5 markers on the map with picture + message + name
let marker = L.marker([53.349, -6.26]).addTo(map);
marker.bindPopup("<img class='map-popup' src='assets/images/map-photos/marker_1.jpg'></img><p class='map-wishes'>\"Hope your Christmas is as tasty as ours! 🤤\"</p><p>Mary Smith</p>");

let marker2 = L.marker([53.345, -6.26]).addTo(map);
marker2.bindPopup("<img class='map-popup' src='assets/images/map-photos/marker_2.jpg'></img><p class='map-wishes'>\"Christmas @ Temple Bar 🎄\"</p><p>John Murphy</p>");

let marker3 = L.marker([53.347, -6.29]).addTo(map);
marker3.bindPopup("<img class='map-popup' src='assets/images/map-photos/marker_3.jpg'></img><p class='map-wishes'>\"I think we're going to have a White Christmas this year ❄️\"</p><p>Liam Doyle</p>");

let marker4 = L.marker([51.500, -0.12]).addTo(map);
marker4.bindPopup("<img class='map-popup' src='assets/images/map-photos/marker_4.jpg'></img><p class='map-wishes'>\"From our family to yours: Happy Christmas 🎄\"</p><p>Nancy McDonald</p>");

let marker5 = L.marker([53.401, -2.98]).addTo(map);
marker5.bindPopup("<img class='map-popup' src='assets/images/map-photos/marker_5.jpg'></img><p class='map-wishes'>\"Hope you're having the best time with your loved ones 🎅🤶\"</p><p>Chris and Jake Reed</p>");