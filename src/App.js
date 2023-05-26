import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home, Reserve, Thanks} from './pages/index';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reserve' element={<Reserve/>} />
          <Route path='/thanks' element={<Thanks />} />
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
