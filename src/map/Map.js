import React, { useState, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import axios from "axios";

const Map = () => {
  const [showRoute, setShowRoute] = useState(false);
  const [businesses, setBusinesses] = useState([]);

  let google;
  let panorama;

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyB4xI-KCixIdHfG82u0HngfbreUd02Ahbs",
      version: "weekly",
    });

    loader.load().then(() => {
      google = window.google;

      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 26.2124014, lng: 127.6809324 },
        zoom: 15,
      });

      if (showRoute) {
        panorama = new google.maps.StreetViewPanorama(
          document.getElementById("map"),
          {
            pov: { heading: 165, pitch: 0 },
            zoom: 1,
          }
        );
        map.setStreetView(panorama);
      } else {
        map.addListener("click", (event) => {
          const lat = event.latLng.lat();
          const lng = event.latLng.lng();
          const sv = new google.maps.StreetViewService();
          sv.getPanorama(
            { location: { lat, lng }, radius: 50 },
            (data, status) => {
              if (status === "OK") {
                const panoOptions = {
                  position: data.location.latLng,
                  pov: { heading: 165, pitch: 0 },
                  zoom: 1,
                };
                if (!panorama) {
                  panorama = new google.maps.StreetViewPanorama(
                    document.getElementById("map"),
                    panoOptions
                  );
                } else {
                  panorama.setOptions(panoOptions);
                }
              }
            }
          );
        });
      }
    });
  }, [showRoute]);

  const handleShowRoute = () => {
    setShowRoute(true);
    axios
      .get("https://api.example.com/businesses")
      .then((response) => setBusinesses(response.data))
      .catch((error) => console.log(error));
       if (google) {
        // console.log(
        //   document.querySelector(
        //     "mapsConsumerUiSceneInternalCoreScene__imageryRender"
        //   )
        // );dev tool 顯示null但 inspect 時是這個 element
         panorama = new google.maps.StreetViewPanorama(
           document.querySelector(
             "mapsConsumerUiSceneInternalCoreScene__imageryRender"
           ),
           {
             position: { lat: 26.2124014, lng: 127.6809324 },
             pov: { heading: 165, pitch: 0 },
             zoom: 1,
             disableDefaultUI: true,
             scrollwheel: false,
             draggable: false,
             keyboardShortcuts: false,
             disableDoubleClickZoom: true,
           }
         );
       }

  };

  return (
    <div className="Map">
      {showRoute ? (
        <div>
          <div id="map" style={{ height: "600px" }}></div>
          <div className="mapSmall">
       
          </div>
        </div>
      ) : (
        <div>
          <h2 className="mapTitle">Where do you want to explore?</h2>
          <div id="map" style={{ height: "600px" }}></div>
          <button onClick={handleShowRoute} className="mapBtn">
            take a real view now
          </button>
        </div>
      )}
    </div>
  );
};

export default Map;
