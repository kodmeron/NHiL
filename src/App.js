import './App.css';
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import { useEffect, useState, useRef } from 'react';
import { logIn, logOut, signUp, useAuth } from './firebase';
import { async } from '@firebase/util';
import { Link } from 'react-router-dom'
import Navbar from './Components/Navbar';

function App() {
  // const [fetchData, setFetchData] = useState({})
  const currentUser = useAuth()

  // const fetchDataFunction = async () => {
  //   try {
  //     const response = await fetch('/text')
  //     const responseData = await response.json()
  //     setFetchData(responseData)
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }
  // useEffect(() => {
  //   fetchDataFunction()
  // }, [])

  // CREATE USER

  const [loading, setLoading] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSignUp() {
    setLoading(true)
    try {
      await signUp(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
      alert('Invalid Input')
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
      alert('Could not login! Try again')
    }
    setLoading(false)
  }

  return (
    <div>
      <Navbar currentUser={currentUser} handleLogOut={handleLogOut} />
      {/* <h1>{!fetchData ? 'Fetching...' : fetchData.message}</h1> */}
      <div className='leaflet-container'>
        <MapContainer center={[59.32, 18.07]} zoom={14} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>


      <div>
        {currentUser ? <>Currently logged in as: {currentUser?.email} </> : null}
      </div>

      {!currentUser ? <>
        <div className='Signup-form'>
          <input ref={emailRef} placeholder='Email' />
          <input ref={passwordRef} type='password' placeholder='Password' />

          <div className='Signup-buttons'>
            <button disabled={loading || currentUser} onClick={handleSignUp}>Sign Up</button>
            <button disabled={loading || currentUser} onClick={handleLogIn}>Log In</button>
          </div>
        </div>
      </>
        :
        null
        // <button disabled={loading || !currentUser} onClick={handleLogOut}>Log Out</button>
      }


      <div style={{ textAlign: 'center' }}>
        <h1>
          {currentUser ? <>You can now do everything on the website</> :
            <>You must login to get access</>
          }
        </h1>
      </div>
    </div>
  );
}

export default App;
