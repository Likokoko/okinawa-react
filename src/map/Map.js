import React, { useState, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import axios from "axios";

const Map = () => {
  const [showRoute, setShowRoute] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  let google;

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyB4xI-KCixIdHfG82u0HngfbreUd02Ahbs",
      version: "weekly",
      // Define additional options here, if needed
    });

    loader.load().then(() => {
      google = window.google;

      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 26.2124014, lng: 127.6809324 },
        zoom: 15,
      });

      if (showRoute) {
        const panorama = new google.maps.StreetViewPanorama(
          document.getElementById("map"),
          {
            position: { lat: 26.2124014, lng: 127.6809324 },
            pov: { heading: 165, pitch: 0 },
            zoom: 1,
          }
        );
        map.setStreetView(panorama);

        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);
        const request = {
          origin: "Naha Airport, Okinawa",
          destination: "Cape Manzamo, Onna-son, Kunigami-gun, Okinawa",
          travelMode: google.maps.TravelMode.DRIVING,
        };
        directionsService.route(request, (result, status) => {
          if (status === "OK") {
            directionsRenderer.setDirections(result);
          }
        });
      }
    });

    const fetchPhotos = async () => {
      const response = await axios.get("https://api.unsplash.com/photos", {
        params: {
          query: "ocean",
          per_page: 10,
          orientation: "landscape",
        },
        headers: {
          Authorization:
            "Client-ID UzumzEF07w1ki3Ea6bkilNCPB0ag_Ubpn2ORamZe0Mc",
        },
      });
      setBusinesses(response.data);
    };

    fetchPhotos();
  }, [showRoute]);

  const handleShowRoute = () => {
    setShowRoute(true);
  };

  return (
    <div className="Map">
      {showRoute ? (
        <div>
          <div id="map" style={{ height: "600px" }}></div>
          <div className="mapSmall">
            <h3>Nearby spots:</h3>
            <ul>
              {businesses.map((business) => (
                <li key={business.id}>{business.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="mapTitle">Where do you want to explore?</h2>
          <div id="map" style={{ height: "600px" }}></div>
          <button onClick={handleShowRoute} className="mapBtn">
            Show me the route
          </button>
        </div>
      )}
   
    </div>
  );
};

export default Map;
