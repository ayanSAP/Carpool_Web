let map, infoWindow;

async function initMap() {
  const myLatLng = { lat: 53.34981525129379, lng: -6.260307536330465 };
  const { Map } = await google.maps.importLibrary("maps");

  // Location Rendering
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();

  map = new Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 14,
  });

  // MAPS MARKER
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Current Location",
  });

  //Rendering the Map
  directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer);
  document.getElementById("button_dest").addEventListener("click", () => {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  });

  // -------------GEOLOCATION SERVICE-------------
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");
  locationButton.style.marginLeft = "80%";
  locationButton.style.marginTop = "18px";

  locationButton.textContent = "Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

//Direction Service and Rendering
function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  directionsService
    .route({
      origin: document.getElementById("start").value,
      destination: document.getElementById("end").value,
      travelMode: google.maps.TravelMode.DRIVING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}

initMap();
