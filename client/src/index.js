import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import {Routes, Route} from 'react-router-dom'
import Fundetails from './Fundetails/Fundetails';
import About from './About/About';
import NewFundraiser from './NewFundraiser/NewFundraiser';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/fundetails' element={<Fundetails/>}></Route>
      <Route path='/' element={<App/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/newfundraiser' element={<NewFundraiser/>}></Route>
    </Routes>
  </BrowserRouter>
);