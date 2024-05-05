import React, {useEffect, useState} from 'react'
import "./Login.css";
import {Link} from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {

  const [email,setEmail]=useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("Login Successfully");
      setLoginSuccess(true);
    } catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    if (loginSuccess) {
      // Fetch user document from Firestore based on the user's ID
      db.collection("users").doc(auth.currentUser.uid).get()
        .then((doc) => {
          if (doc.exists) {
            // Set the user's name state
            setUserName(doc.data().name);
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    }
  }, [loginSuccess]);

  return (
    <div className='signup-container'>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="email">
          Email:
          <input type="text" placeholder='abc@email.com' onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label htmlFor="password">
          Password:
          <input type="password" placeholder='Enter Strong Password' onChange={handlePasswordChange} required />
        </label>

        <button type='submit'>Login</button>
        <p>Don't have An Account? <Link to="/signup">Register</Link></p>
      </form>

      {loginSuccess && (
        <div className='welcome-message'>
          <h2>Welcome, {userName}!</h2>    
        </div>
      )}
    </div>
  )
}
