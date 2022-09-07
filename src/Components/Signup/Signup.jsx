import React, { useRef, useState } from 'react'
import './Signup.css'
import { AiFillEyeInvisible, AiFillEye, AiOutlineInfoCircle } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import { BsCheckLg } from 'react-icons/bs'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import axios from './api/axios'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const EMAIL_REGEX = /\S+@\S+\.\S+/;
// const REGISTER_URL = '/register'

// forgot password etc, SSO
const CreateAccount = () => {
  const userRef = useRef()
  const errRef = useRef()
  const checkRef = useRef(null);

  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [passwordToggle, setPasswordToggle] = useState(false)

  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)
  const [passwordMatchToggle, setPasswordMatchToggle] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user)
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email)
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrMsg("")
  }, [user, pwd, matchPwd])

  const TogglePassword = () => {
    setPasswordToggle(prev => !prev)
  }
  const ToggleMatchPassword = () => {
    setPasswordMatchToggle(prev => !prev)
  }

  const checkIfChecked = (e) => {
    if (checkRef.current.checked) {
      setChecked(true)
    }
    else {
      setChecked(false)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    const v1 = USER_REGEX.test(user)
    const v2 = PWD_REGEX.test(pwd)
    const v3 = EMAIL_REGEX.test(pwd)
    if (!v1 || !v2 || !v3 || !checked) {
      setErrMsg("Invalid Entry")
      return;
    }
    setSuccess(true)
    // try {
    //   const response = await axios.post(REGISTER_URL,
    //     JSON.stringify({ user, pwd }),
    //     {
    //       headers: { 'Content-Type': 'application/json' },
    //       withCredentials: true
    //     }
    //   )
    //   console.log(response.data)
    //   console.log(response.accessToken)
    //   console.log(JSON.stringify(response))
    //   setSuccess(true)
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg("No Server Response")
    //   } else if (err.response?.status === 409) {
    //     setErrMsg("Username Taken")
    //   }
    //   else {
    //     setErrMsg("Registration Failed")
    //   }
    //   errRef.current.focus()
    // }
  }

  return (
    <div className="App">
      <div className="Signup-container">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        {success ? (<>
          {/* maybe add a success animation */}
          <h2>Success!</h2> <br />
          <Link to="/signin">Sign In</Link>
        </>
        )
          :
          (
            <>
              <h1>Sign Up</h1>
              <h6>Join our Community and connect with other creative members!</h6>
              <form className="Signup-form" onSubmit={handleSubmit}>

                <label htmlFor="username">
                  Username:
                  <BsCheckLg className={`Check-icon ${validName ? "Valid" : "Hide"}`} />
                  <FaTimes className={`Times-icon ${validName || !user ? "Hide" : "Invalid"}`} />
                </label>
                <input
                  type="text"
                  id='username'
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                <p id='uidnote' className={userFocus && user && !validName ? "Instructions" : "Offscreen"}>
                  <AiOutlineInfoCircle className="Circle-icon" />  <bolder>4 to 24 characters</bolder> <br />
                  Must begin with a letter. <br />
                  Letters,numbers,underscores,hyphens allowed.
                </p>


                <label htmlFor="email">
                  Email:
                  <BsCheckLg className={`Check-icon ${validEmail ? "Valid" : "Hide"}`} />
                  <FaTimes className={`Times-icon ${validEmail || !email ? "Hide" : "Invalid"}`} />
                </label>
                <input
                  type="email"
                  id='email'
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="eidnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                />
                <p id='eidnote' className={emailFocus && email && !validEmail ? "Instructions" : "Offscreen"}>
                  <AiOutlineInfoCircle className="Circle-icon" />  Must be a valid email address
                </p>


                <label htmlFor="password">
                  Password:
                  <BsCheckLg className={`Check-icon ${validPwd ? "Valid" : "Hide"}`} />
                  <FaTimes className={`Times-icon ${validPwd || !pwd ? "Hide" : "Invalid"}`} />
                </label>
                <div className="Password-container">
                  <input
                    type={passwordToggle ? "text" : "password"}
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                  {passwordToggle ? <AiFillEyeInvisible className='Password-icon' onClick={TogglePassword} /> : <AiFillEye className='Password-icon' onClick={TogglePassword} />}
                </div>
                <p id="pwdnote" className={pwdFocus && !validPwd ? "Instructions" : "Offscreen"}>
                  <AiOutlineInfoCircle className="Circle-icon" />
                  <bolder>8 to 24 characters.</bolder><br />
                  Must include uppercase and lowercase letters, a number and a special character.<br />
                  Allowed special characters:
                  <span aria-label="exclamation mark">!</span>
                  <span aria-label="at symbol">@</span>
                  <span aria-label="hashtag">#</span>
                  <span aria-label="dollar sign">$</span>
                  <span aria-label="percent">%</span>
                </p>


                <label htmlFor="confirm_pwd">
                  Confirm Password:
                  <BsCheckLg className={`Check-icon ${validMatch && matchPwd ? "Valid" : "Hide"}`} />
                  <FaTimes className={`Times-icon ${validMatch || !matchPwd ? "Hide" : "Invalid"}`} />

                </label>

                <div className="Password-container">
                  <input
                    type={passwordMatchToggle ? "text" : "password"}
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                  {passwordMatchToggle ? <AiFillEyeInvisible className='Password-icon' onClick={ToggleMatchPassword} /> : <AiFillEye className='Password-icon' onClick={ToggleMatchPassword} />}
                </div>
                <p id="confirmnote" className={matchFocus && !validMatch ? "Instructions" : "Offscreen"}>
                  <AiOutlineInfoCircle className="Circle-icon" />
                  Must match the first password input field.
                </p>

                <label htmlFor="terms-of-service">
                  <input onClick={checkIfChecked} ref={checkRef} type="checkbox" id="terms-of-service" style={{ marginRight: '5px' }} /> <a href='https://google.com' target="_blank" rel='noreferrer'>Agree to terms of service</a>
                </label>

                <button disabled={!validName || !validEmail || !validPwd || !validMatch || !checked ? true : false}>Create Account</button>
              </form>

              <p>
                Already registered? <br />
                <span className='Line'>
                  <Link to="/signin">Sign In</Link>
                </span>
              </p>
            </>
          )
        }
      </div>
    </div >
  )
}

export default CreateAccount