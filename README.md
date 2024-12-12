
# Address Management System

This is a full-stack application that allows users to manage delivery addresses. Users can add, edit, delete, and select addresses. The app also includes features like location selection using Google Maps, geolocation, and responsive design.

---

## Features

1. **Location Permission**:
   - Displays a popup when location access is denied.
   - Offers options to enable location or search manually on the map.

2. **Location Selection**:
   - Interactive map with a draggable marker.
   - "Locate Me" button to get the user’s current location.

3. **Address Form**:
   - Allows users to input specific details like:
     - House/Flat/Block Number.
     - Apartment/Road/Area.
   - Users can save addresses under categories like Home, Office, or Friends & Family.

4. **Address Management**:
   - Lists all saved addresses.
   - Allows users to:
     - Select an address for delivery.
     - Delete or edit existing addresses.

5. **Responsive Design**:
   - Fully responsive and works on different screen sizes.

---

## Tech Stack

- **Frontend**: React, Bootstrap, Google Maps API.
- **Backend**: Node.js, Express.js, MongoDB.
- **Database**: MongoDB (NoSQL database).

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (local or cloud instance like MongoDB Atlas)
- **Google Maps API Key** (with Maps JavaScript API enabled)

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/address-management.git
cd address-management
```

---

### 2. Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB:
   - **If MongoDB is installed locally**, ensure the `mongod` service is running:
     ```bash
     mongod
     ```
   - Alternatively, use a **MongoDB Atlas connection string** and update it in the `server.js` file.

4. Run the server:
   ```bash
   node server.js
   ```
   The backend will start on `http://localhost:5000`.

5. Verify the backend is running:
   Open a browser or use Postman to send a `GET` request to:
   ```
   http://localhost:5000/addresses
   ```

---

### 3. Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Configure the `.env` file:
   - Create a `.env` file in the `frontend` folder.
   - Add your **Google Maps API Key**:
     ```env
     REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_API_KEY
     ```

4. Start the frontend:
   ```bash
   npm start
   ```
5. The frontend will be available at `http://localhost:3000`.

---

## How to Run the Application

1. **Start MongoDB**:
   - Ensure MongoDB is running locally or remotely (if using MongoDB Atlas).

2. **Start the Backend**:
   - Run `node server.js` in the `backend` folder.

3. **Start the Frontend**:
   - Run `npm start` in the `frontend` folder.

4. **Access the Application**:
   - Open your browser and go to `http://localhost:3000`.

---

## API Endpoints

### Base URL: `http://localhost:5000`

1. **Get All Addresses**:
   - **Endpoint**: `/addresses`
   - **Method**: `GET`
   - **Response**:
     ```json
     [
       {
         "_id": "12345",
         "house": "123A",
         "area": "Main Street",
         "type": "Home"
       }
     ]
     ```

2. **Add a New Address**:
   - **Endpoint**: `/addresses`
   - **Method**: `POST`
   - **Body**:
     ```json
     {
       "house": "123A",
       "area": "Main Street",
       "type": "Home"
     }
     ```
   - **Response**:
     ```json
     {
       "_id": "12345",
       "house": "123A",
       "area": "Main Street",
       "type": "Home"
     }
     ```

3. **Delete an Address**:
   - **Endpoint**: `/addresses/:id`
   - **Method**: `DELETE`
   - **Response**:
     ```json
     {
       "message": "Address deleted"
     }
     ```

---

## Folder Structure

```
address-management/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddressForm.js
│   │   │   ├── AddressManager.js
│   │   │   ├── LocationPermissionModal.js
│   │   │   ├── LocationSelector.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── .env
│   └── package.json
```

---

## Testing

### Frontend

1. Open the application in a browser: `http://localhost:3000`.
2. Test all features:
   - Enable or deny location permissions.
   - Add, edit, and delete addresses.
   - Use the "Locate Me" button to fetch your current location.
   - Drag and adjust the map pin to fine-tune the location.

### Backend

1. Use Postman or cURL to test the backend endpoints:
   - Verify that addresses are being added, fetched, and deleted correctly.
2. Check the MongoDB database to ensure records are being stored as expected.

---

## Troubleshooting

1. **MongoDB Connection Error**:
   - Ensure MongoDB is running.
   - Update the `server.js` file with the correct connection string.

2. **CORS Errors**:
   - Ensure `cors()` middleware is included in the backend.

3. **Google Maps Not Loading**:
   - Verify the API key in the `.env` file.
   - Ensure the key has permissions for the **Maps JavaScript API**.

4. **Frontend/Backend Not Running**:
   - Check for missing dependencies and install them using:
     ```bash
     npm install
     ```

---

## Future Enhancements

- Add user authentication for personalized address management.
- Implement address updates in the address manager.
- Integrate with MongoDB Atlas for cloud storage.
- Add search and filter options for saved addresses.

---

## License

This project is licensed under the MIT License.

---

## Author

- **Your Name**
- **Your Contact/Email**
