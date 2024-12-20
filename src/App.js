import React, { useState } from 'react';
import './App.css';

function App() {
  const [tripDescription, setTripDescription] = useState('');
  const [tripDistance, setTripDistance] = useState('');
  const [trips, setTrips] = useState([]);

  const handleAddTrip = () => {
    if (tripDescription && tripDistance) {
      const newTrip = {
        id: Date.now(),
        description: tripDescription,
        distance: parseFloat(tripDistance),
      };
      setTrips([...trips, newTrip]);
      setTripDescription('');
      setTripDistance('');
    }
  };

  const totalDistance = trips.reduce((acc, trip) => acc + trip.distance, 0);

  return (
    <div className="App">
      <h1>Mileage Tracker</h1>
      
      <div>
        <input
          type="text"
          placeholder="Описание поездки"
          value={tripDescription}
          onChange={(e) => setTripDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Расстояние в милях"
          value={tripDistance}
          onChange={(e) => setTripDistance(e.target.value)}
        />
        <button onClick={handleAddTrip}>Добавить поездку</button>
      </div>

      <h2>Список поездок</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            {trip.description} — {trip.distance} миль
          </li>
        ))}
      </ul>

      <h3>Общий пробег: {totalDistance} миль</h3>
    </div>
  );
}

export default App;
