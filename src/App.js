import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddMusicComponent from './components/AddMusicComponent/AddMusicComponent';
import MusicComponent from './components/MusicComponent/MusicComponent';

function App() {
  return (
    <Router className='flex'>
      <div className='bg-gray-100'>
        <ul className='flex justify-around items-center p-4'>
          <li className='mr-6'>
            <Link to='/'>Player</Link>
          </li>

          <li className='mr-6'>
          <Link to='/new'>Add Audio</Link>
          </li>
          
        </ul>
      </div>
      <Routes>
        <Route exact path='/' element={<MusicComponent/>} />
        <Route exact path='/new' element={<AddMusicComponent/>} />
      </Routes>
    </Router>
  );
}

export default App;
