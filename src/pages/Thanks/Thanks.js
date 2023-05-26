import React from 'react'
import { Navbar } from '../../components'
import { useNavigate } from 'react-router-dom'

const Thanks = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar />
        <h1>Thank you for reserving a table</h1>
        <button 
        style={{
            backgroundColor: '#495E57', 
            color: 'white', 
            borderRadius: '15px', 
            height: '2.3rem', 
            width: '14rem', 
            border: '1px solid #495E57'
            }} onClick={() => navigate('/')}>
                Go to Home Page
        </button>
    </div>
  )
}

export default Thanks