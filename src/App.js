import './App.css';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import { useEffect, useState, useRef } from 'react';
import { logIn, logOut, signUp, useAuth } from './firebase';
import { async } from '@firebase/util';
import { Link } from 'react-router-dom'

function App() {
  const [fetchData, setFetchData] = useState({})
  const currentUser = useAuth()

  const fetchDataFunction = async () => {
    try {
      const response = await fetch('/text')
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

  return (
    <div>
    <div className='leaflet-container'>
      <h1>{!fetchData ? 'Fetching...' : fetchData.message}</h1>
      <MapContainer center={[59.32, 18.07]} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
      </div>

      <div>
        Currently logged in as: { currentUser?.email }
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
