import './App.css';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { L } from "leaflet";
import { useEffect, useState, useRef } from 'react';
import { logIn, logOut, signUp, useAuth, db } from './firebase';
import { async } from '@firebase/util';
import { onSnapshot, collection, getDocs } from "@firebase/firestore"
import markerIcon from "./images/marker-icon.png"

function App() {
  const currentUser = useAuth()

  // FIRESTORE

  const [locations, setLocations] = useState([]);
  const locationsCollectionRef = collection(db, "locations")

  useEffect(() => {

    const getLocations = async () => {
      const data = await getDocs(locationsCollectionRef);
      setLocations(data.docs.map((doc) => ({ ...doc.data() })))
    };
    getLocations()
  }, []);

  // CREATE USER

  const [loading, setLoading] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSignUp() {
    setLoading(true)
    try {
      await signUp(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
      alert('Password should be at least 6 characters')
    }
    setLoading(false)
  }

  // LOG IN USER

  async function handleLogIn() {
    setLoading(true)
    try {
      await logIn(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
      alert('Error!')
    }
    setLoading(false)
  }

  async function handleLogOut() {
    setLoading(true)
    try {
      await logOut()
    } catch (error) {
      alert('Error!')
    }
    setLoading(false)
  }

  // SET PIN AT LOCATION

  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })

    return position === null ? null : (
      <Marker position={position} >
        <Popup>You did it here</Popup>
      </Marker>
    )
  }

  return (
    <div>
      <div className='leaflet-container'>
        <MapContainer center={[59.32, 18.07]} zoom={14} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker />

          {locations.map((location) => {
            return <Marker position={[location.lat, location.long]}></Marker>
          })};



        </MapContainer>
      </div>

      <div>
        Currently logged in as: {currentUser?.email}
      </div>

      <div className='signup-form'>
        <input ref={emailRef} placeholder='Email' />
        <input ref={passwordRef} type='password' placeholder='Password' />
      </div>

      <button disabled={loading || currentUser} onClick={handleSignUp}>Sign Up</button>
      <button disabled={loading || currentUser} onClick={handleLogIn}>Log In</button>
      <button disabled={loading || !currentUser} onClick={handleLogOut}>Log Out</button>

    </div>

  );
}

export default App; 
