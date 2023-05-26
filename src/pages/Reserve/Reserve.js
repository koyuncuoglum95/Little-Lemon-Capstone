import './Reserve.css'
import { Navbar } from '../../components/index'
import { useNavigate } from 'react-router-dom'

const Reserve = ({}) => {
  const navigate = useNavigate();

  const reserveTableHandler = (e) => {
    e.preventDefault();
    navigate('/thanks')
  }

    
  return (
    <div>
      <Navbar />
        <h1>Reserve Tables</h1>

        <div className='reserveForm'>
          <form className='formValid'>
            <label htmlFor='fname'>Fullname</label>
            <input 
            type='text' 
            placeholder='Enter your name' 
            id='fname' 
            name='fname' 
            className='input1' 
            autoComplete='off'
            required 
            style={{marginTop: '2rem'}}
            />

            <br />
            <br />

            <label htmlFor='email'>Email</label>
            <input 
            type='email' 
            id='email' 
            name='email' 
            className='input2'
            placeholder='Enter your email' 
            autoComplete='off'
            required 
            style={{marginTop: '2rem'}}
            />

            <br />
            <br />

            <label htmlFor='pnumber'>Phone</label>
            <input 
            type='number' 
            id='pnumber' 
            name='pnumber' 
            placeholder='Enter your phone number' 
            className='input3'
            required 
            style={{marginTop: '2rem'}}
            />

            <br />
            <br />

            <label htmlFor='ddate'>Date</label>
            <input 
            type='date' 
            id='ddate' 
            name='ddate' 
            className='input4'
            required 
            style={{marginTop: '2rem'}}
            />

            <br />
            <br />

            <label htmlFor='time'>Time</label>
            <input 
            type='time' 
            id='time' 
            name='time' 
            className='input5' 
            style={{marginTop: '2rem'}}
            required 
            />

            <br />
            <br />

            <label htmlFor='num'>Table</label>
            <input 
            type='number' 
            id='num' 
            name='num' 
            className='input5' 
            style={{marginTop: '2rem'}}
            required 
            min={1}
            max={20}
            />

            <button 
        style={{
          backgroundColor: '#F4CE14', 
          color: 'white', 
          border: '1px solid #F4CE14', 
          borderRadius: '10px', 
          height: '2.8rem', 
          width: '20rem', 
          marginTop: '2rem'}}
          onClick={reserveTableHandler}
        >Reserve a table
        </button>

          </form>
        </div>
    </div>
  )
}

export default Reserve