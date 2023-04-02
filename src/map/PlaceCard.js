import React, { useState, useEffect } from "react";
import PlaceCard from "./PlaceCard";

const MapWithPlaces = ({ google }) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (google) {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 26.2124014, lng: 127.6809324 },
        zoom: 15,
      });

      if (google.maps.places) {
        const placesService = new google.maps.places.PlacesService(map);

        map.addListener("click", (event) => {
          placesService.nearbySearch(
            {
              location: event.latLng,
              radius: 500,
              type: ["restaurant", "cafe", "bar"],
            },
            (results, status) => {
              if (status === "OK") {
                const place1 = results[0];
                const place2 = results[1];
                const place3 = results[2];

                setPlaces([place1, place2, place3]);
              }
            }
          );
        });
      }
    }
  }, [google]);

  return (
    <div>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>

      <div className="place-cards">
        {places.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </div>
    </div>
  );
};

export default MapWithPlaces;
