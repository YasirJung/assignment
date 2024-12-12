import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const AddressManager = ({ addresses, onSelect = () => {}, onDelete }) => {
  return (
    <ListGroup>
      {addresses.map((address, index) => (
        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
          <div>
            <h6>{address.category}</h6>
            <p>
              {address.house}, {address.area}
            </p>
          </div>
          <div>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => onSelect(address)} // Call onSelect with the address
              className="me-2"
            >
              Select
            </Button>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => onDelete(index)} // Call onDelete with the index
            >
              Delete
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default AddressManager;
