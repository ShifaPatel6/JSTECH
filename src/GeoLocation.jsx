import React from "react";
import { useState, useEffect } from "react";

const GeoLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.codetabs.com/v1/geolocation/json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Location data:", data);
        setLocation(data);
      });
  }, []);
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-4">GeoLocation</h1>
        {location ? (
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <p>
              <strong>IP:</strong> {location.ip}
            </p>
            <p>
              <strong>Country:</strong> {location.country_name}
            </p>
            <p>
              <strong>Region:</strong> {location.region_name}
            </p>
            <p>
              <strong>City:</strong> {location.city}
            </p>
            <p>
              <strong>Latitude:</strong> {location.latitude}
            </p>
            <p>
              <strong>Longitude:</strong> {location.longitude}
            </p>
            <p>
              <strong>zip code :</strong> {location.zip_code}
            </p>
          </div>
        ) : (
          <div className="text-red-500">
            {error ? error.message : "Loading..."}
          </div>
        )}
      </div>
    </>
  );
};

export default GeoLocation;
