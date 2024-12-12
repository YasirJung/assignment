import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';

const AddressForm = ({ onSave }) => {
  const [form, setForm] = useState({
    house: "",
    area: "",
    type: "Home",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ house: "", area: "", type: "Home" });
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group className="mb-3">
        <Form.Control
          name="house"
          value={form.house}
          placeholder="House/Flat/Block No."
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          name="area"
          value={form.area}
          placeholder="Apartment/Road/Area"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select name="type" value={form.type} onChange={handleChange}>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
          <option value="Friends & Family">Friends & Family</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100">
        Save Address
      </Button>
    </Form>
  );
};

export default AddressForm;

