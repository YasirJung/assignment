const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/addresses", { useNewUrlParser: true });

const addressSchema = new mongoose.Schema({
  house: String,
  area: String,
  type: String,
});

const Address = mongoose.model("Address", addressSchema);

app.get("/addresses", async (req, res) => {
  const addresses = await Address.find();
  res.json(addresses);
});

app.post("/addresses", async (req, res) => {
  const address = new Address(req.body);
  await address.save();
  res.json(address);
});

app.delete("/addresses/:id", async (req, res) => {
  await Address.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
