//for owl carousal
$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	autoplay: true,
	dots: true,
	nav: false,
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 6,
		},
	},
});
//for AOS Animation
AOS.init();
//for MAP
var map = L.map("map").setView([34.101, 74.8094], 17);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

var marker = L.marker([34.101, 74.8094]).addTo(map);
var marker2 = L.marker([34.109, 74.809]).addTo(map);
var marker3 = L.marker([34.1, 74.81]).addTo(map);

var circle = L.circle([34.101, 74.8094], {
	color: "green",
	radius: 100,
	fillColor: "green",
	fillOpacity: 0.3,
}).addTo(map);

marker.bindPopup("Aiiots Geek").openPopup;
marker2.bindPopup("Hawal Chowk").openPopup;
marker3.bindPopup("Nowhatta Chowk").openPopup;
