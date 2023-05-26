import React from 'react'
import { Navbar } from '../../components/index'
import './Home.css'
import tomatoPizzaImage from '../../assets/tomato.png';
import italyPastaImage from '../../assets/pasta.png';
import greekSaladImage from '../../assets/salad.png';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      id: "1",
      name: "TOMATO PIZZA",
      image: tomatoPizzaImage,
      desc: "Delicious cheesy tomato pizza. Includes Tomato, bread, cheese",
      price: "$12.99"
    },
    {
      id: "2",
      name: "ITALY PASTA",
      image: italyPastaImage,
      desc: "Amazing Tasty Pasta",
      price: "$15.99"
    },
    {
      id: "3",
      name: "GREEK SALAD",
      image: greekSaladImage,
      desc: "Mixed Greek salad including cheese, tomato, red onion",
      price: "$22.99"
    }
  ];

  return (
    <div>
      <Navbar />

      <div className='first-container'>
        <h1 style={{color: '#F4CE14', paddingTop: '3rem'}}>Little Lemon</h1>
        <h2 style={{color: 'white'}}>Chicago</h2>
        <p style={{color: 'white'}}>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button 
        style={{
          backgroundColor: '#F4CE14', 
          color: 'white', 
          border: '1px solid #F4CE14', 
          borderRadius: '10px', 
          height: '2.8rem', 
          width: '20rem', 
          marginTop: '12rem'}}
          onClick={() => {
            navigate('/reserve')
          }}
        >Reserve a table
        </button>
      </div>

      <div className='second-container'>
        <h1>ORDER FOR DELIVERY</h1>
        <ul className='foodType'>
          <li className='foodName'>
            Lunch
          </li>
          <li className='foodName'>
            Mains
          </li>
          <li className='foodName'>
            Desserts
          </li>
          <li className='foodName'>
            A La Carte
          </li>
        </ul>
      </div>

      <div className=''>
        {menuItems.map(item => (
        <div key={item.id} style={{marginTop: '5rem'}}>
          <img src={item.image} alt={item.name} style={{width: '8rem'}}/>
          <h2>{item.name}</h2>
          <p>{item.desc}</p>
          <p>{item.price}</p>

        </div>
      ))}
      </div>
    </div>
  )
}

export default Home