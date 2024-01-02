import { BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import { Box } from '@mui/material';
import DataContextGrid from './Components/Context'
import Home from './Components/Home';


import React from 'react'




function App() {
  return (
 <Box sx={{background:'#e0e0e0'}}>
<DataContextGrid>
 <Router>

      <Navbar/>
     
      <Routes>
        <Route exact path="/" element={<Home/>}/ >

       
       
       
       
        </Routes>
   
    </Router>
    
    </DataContextGrid>
    </Box>  
  );
}

export default App;
