import React, { useState } from "react";
import LocationPermissionModal from "./components/LocationPermissionModal";
import LocationSelector from "./components/LocationSelector";
import AddressForm from "./components/AddressForm";
import AddressManager from "./components/AddressManager";

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [addresses, setAddresses] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleEnableLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
        setShowModal(false);
      },
      () => alert("Unable to fetch location.")
    );
  };

  const handleSearchManually = () => setShowModal(false);

  const saveAddress = (address) => {
    setAddresses([...addresses, address]);
  };

  const deleteAddress = (index) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  const selectAddress = (address) => {
    alert(`Selected address: ${address.house}, ${address.area}`);
    // You can implement further logic for selected address
  };

  return (
    <div className="container mt-4">
      {showModal && (
        <LocationPermissionModal
          onEnableLocation={handleEnableLocation}
          onSearchManually={handleSearchManually}
        />
      )}
      <LocationSelector onLocationSelect={setCurrentLocation} />
      <AddressForm onSave={saveAddress} />
      <AddressManager
        addresses={addresses}
        onSelect={selectAddress} // Pass selectAddress function here
        onDelete={deleteAddress}
      />
    </div>
  );
};

export default App;
