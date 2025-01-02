import React from 'react'
import Button from '@mui/material/Button';
import './Header.css'
const Header = () => {
  return (
    <div className="header">
        <div className="title">
            <h1>TO-_-DO</h1>
        </div>
        <div className="navigation">
            <Button variant='contained'>Signup</Button>
            <Button variant='contained'>Login</Button>
        </div>
    </div>
  )
}

export default Header