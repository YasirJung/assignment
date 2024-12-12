import React from "react";
import { Modal, Button } from 'react-bootstrap';

const LocationPermissionModal = ({ onEnableLocation, onSearchManually }) => (
  <Modal show={true} centered>
    <Modal.Header>
      <Modal.Title>Location Permission</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Location permission is required to use this app. Please enable location access or search manually.</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="primary" onClick={onEnableLocation}>
        Enable Location
      </Button>
      <Button variant="secondary" onClick={onSearchManually}>
        Search Location Manually
      </Button>
    </Modal.Footer>
  </Modal>
);

export default LocationPermissionModal;

