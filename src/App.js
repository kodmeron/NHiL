import React from "react"
import './App.css';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer } from 'react-leaflet';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className='leaflet-container'>
      {fetchData ? <h1>{fetchData.message}</h1> : null}
      <MapContainer center={[59.32, 18.07]} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      <p style={{ color: '#000000' }}>{!data ? "Laddar..." : data}</p>
    </div>
  );
}

export default App;
