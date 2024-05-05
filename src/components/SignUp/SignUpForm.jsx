import React, {useState} from 'react'
import "./SignUpForm.css";
import {Link} from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUpForm() {

  const [name, setName] = useState('');
  const [email,setEmail]=useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }

  const handleCheckboxChange = () => {
    setAgreedToTerms(!agreedToTerms);
  }

  const passwordsMatch = password === confirmPassword;

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      await createUserWithEmailAndPassword(auth, email,password);
      console.log("Account Created");
      setSignupSuccess(true);
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div className='signup-container'>
    {signupSuccess ? (
        <div className='signup-success'>
          <h2>Welcome, {name}!</h2>
          <p>Thank you for signing up.</p>
          <p>You can now <Link to="/login">Login</Link> to your account.</p>
        </div>
      ) : (
      <form className='signup-form' onSubmit={handleSubmit}>
        <h2>SignUp</h2>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} required/>
        </label>

        <label htmlFor="phone">
          Phone Number:
          <input type="tel" placeholder='Phone Number' required/>
        </label>

        <label htmlFor="profile-photo">
          Profile Photo:
          <input type="file" accept="image/*" />
        </label>

        <label htmlFor="cover-photo">
          Cover Photo:
          <input type="file" accept="image/*" />
        </label>

        <label htmlFor="gender">
          Gender:
          <select id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label htmlFor="birthdate">
          Date of Birth:
          <input type="date" id="birthdate" />
        </label>


        <label htmlFor="email">
          Email:
          <input type="text" placeholder='abc@email.com' onChange={(e)=> setEmail(e.target.value)} required/>
        </label>
        
        <label htmlFor="password">
          Password:
          <input type="password" placeholder='Enter Strong Password' onChange={handlePasswordChange}  required />
        </label>

        <label htmlFor="confirm-password">
          Confirm Password:
          <input type="password" placeholder='Confirm Password' onChange={handleConfirmPasswordChange} required />
          {!passwordsMatch && <span className="password-error">Passwords do not match</span>}
        </label>

        <label htmlFor="agree-to-terms" className='checkbox'>
          <input type="checkbox" id="agree-to-terms" onChange={handleCheckboxChange} required />
          <p>I agree to the Terms & Conditions </p>
        </label>
        
        <button type='submit'>Sign Up</button>
        <p>Have An Account? <Link to="/login">Login</Link></p>
      </form>
      )}
    </div>
  )
}
