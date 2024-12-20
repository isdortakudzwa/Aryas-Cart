import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
function App() {



  return (

  <div className='App' >
    <div>
      <Navbar />
    </div>
    

      <Routes>
      <Route path='/' element={<Homepage />}>
      </Route>
       </Routes>
  </div>
  )
}


export default App
