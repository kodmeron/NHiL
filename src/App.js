import './App.css';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import { useEffect, useState } from 'react';

function App() {
  const [fetchData, setFetchData] = useState({})

  const fetchDataFunction = async () => {
    try {
      const response = await fetch('http://localhost:3001/text')
      const responseData = await response.json()
      setFetchData(responseData)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchDataFunction()
  }, [])
  return (
    <div className='leaflet-container'>
      <h1>{!fetchData ? 'Fetching...' : fetchData.message}</h1>
      <MapContainer center={[59.32, 18.07]} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
}

export default App;
