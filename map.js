const center = { lat: 42.4098170267038, lng: 43.993900390030165 };
const hotels = [
  {
    name: "Meta Business Hotel",
    location: { lat: 41.71670104107425, lng: 44.784982573183484 },
  },
  {
    name: "Episode Hotel",
    location: { lat: 41.73083743229496, lng: 44.76807071764742 },
  },
  {
    name: "Hotel Old Seti",
    location: { lat: 43.04289193678282, lng: 42.72511501172991 },
  },
  {
    name: "Hill Inn",
    location: { lat: 41.630216929888, lng: 42.097369714092046 },
  },
  {
    name: "Vinum Hotel",
    location: { lat: 41.69000329186771, lng: 44.83567045587802 },
  },
  {
    name: "Hotel Imperial House",
    location: { lat: 41.694328748326164, lng: 44.80360342704254 },
  },
  {
    name: "Old Meidan Tbilisi By Urban Hotels",
    location: { lat: 41.68920056279998, lng: 44.80930208845174 },
  },
  {
    name: "Gudauri Hut Hotel",
    location: { lat: 42.46464710666309, lng: 44.48011660841554 },
  },
  {
    name: "Kisi Garden",
    location: { lat: 41.90817544009144, lng: 45.5602718963618 },
  },
  {
    name: "Shota Rustaveli Boutique Hotel",
    location: { lat: 41.69706266960563, lng: 44.797364679137544 },
  },
  {
    name: "Margi Boutique Hotel",
    location: { lat: 41.714279111040945, lng: 44.7937112686693 },
  },
  {
    name: "Hotel Liberty Theatre",
    location: { lat: 41.69471198246462, lng: 44.79933592449022 },
  },
  {
    name: "Best Western Tbilisi City Center",
    location: { lat: 41.70730055308027, lng: 44.775836624490786 },
  },
];
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("hotelsmap"), {
    center,
    zoom: 8,
  });
  createMarkers();
}
function createMarkers() {
  hotels.forEach((hotel, i) => {
    const marker = new google.maps.Marker({
      position: hotel.location,
      map: map,
      icon: { url: `./images/hotel${i}.png`, scaledSize: new google.maps.Size(60, 60) },
    });
    marker.addListener("click", () => {
      map.setZoom(15);
      map.setCenter(marker.getPosition());
    });
    const infowindow = new google.maps.InfoWindow({
      content: `<p class='hotelname'>${hotel.name}</p>`,
      ariaLabel: hotel.name,
    });
    marker.addListener("mouseover", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
    marker.addListener("mouseout", () => {
      infowindow.close();
    });
  });
}
