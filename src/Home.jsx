import React from 'react'
import "./App.css"
import InteractiveImg from './components/InteractiveImg/InteractiveImg'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div className='homecontainer'>
        <div className='heading'>
            <h1>Welcome</h1>
            <div className='subhead'>

                <div className='mainButtons'>
                    <Button variant='primary' className='customButton'><Link to='/login' className='link' >Login</Link></Button>
                    <Button variant='secondary' className='customButton'><Link to='/signup' className='link'>Register</Link></Button>
                </div>

                <div className='image-container'>
                    <InteractiveImg  />
                    </div>
                

            </div>
        </div>
    </div>
  )
}
