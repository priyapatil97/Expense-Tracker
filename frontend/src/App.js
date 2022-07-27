import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Rounting from './components/Rounting';


function App() {

  return (
   
    <>
  
    <div className='allbgclr'>
      
      <BrowserRouter>
      <Rounting/>
      </BrowserRouter>
    </div>
   
    </>
  );
}

export default App;
