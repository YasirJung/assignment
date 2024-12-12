import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Button, Spinner, Alert } from "react-bootstrap";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 19.076, // Mumbai as fallback
  lng: 72.8777,
};

const LocationSelector = ({ onLocationSelect }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [marker, setMarker] = useState(null); // Marker location
  const [mapCenter, setMapCenter] = useState(defaultCenter); // Map center
  const [error, setError] = useState(null); // Error handling

  // Fetch current location when the component mounts
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const currentLocation = { lat: latitude, lng: longitude };
        setMapCenter(currentLocation); // Center the map on the user's location
        setMarker(currentLocation); // Set the marker on the user's location
        if (onLocationSelect) onLocationSelect(currentLocation);
      },
      (err) => {
        setError("Failed to fetch current location. You can select manually.");
        console.error(err);
      }
    );
  }, [onLocationSelect]);

  // Handle clicking on the map to set the marker
  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    const clickedLocation = { lat, lng };
    setMarker(clickedLocation); // Update marker location
    if (onLocationSelect) onLocationSelect(clickedLocation); // Pass the location to parent
  };

  // Locate Me button functionality
  const handleLocateMe = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const currentLocation = { lat: latitude, lng: longitude };
        setMapCenter(currentLocation); // Center the map
        setMarker(currentLocation); // Set the marker
        if (onLocationSelect) onLocationSelect(currentLocation);
      },
      () => alert("Failed to fetch your current location.")
    );
  };

  if (loadError) return <Alert variant="danger">Error loading Google Maps</Alert>;
  if (!isLoaded)
    return <Spinner animation="border" role="status" className="d-block mx-auto" />;

  return (
    <div className="position-relative" style={{ height: "400px", width: "100%" }}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={mapCenter} // Dynamically center the map
        onClick={handleMapClick} // Set marker on map click
      >
        {marker && (
          <Marker
            position={marker}
            draggable // Allow dragging the marker
            onDragEnd={(event) => {
              const lat = event.latLng.lat();
              const lng = event.latLng.lng();
              const draggedLocation = { lat, lng };
              setMarker(draggedLocation); // Update marker position after dragging
              if (onLocationSelect) onLocationSelect(draggedLocation);
            }}
          />
        )}
      </GoogleMap>

      <Button
        onClick={handleLocateMe}
        variant="primary"
        className="position-absolute"
        style={{ bottom: "10px", right: "10px", borderRadius: "50px" }}
      >
        Locate Me
      </Button>
    </div>
  );
};

export default LocationSelector;
