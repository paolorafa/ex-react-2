
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bookdetails from './pages/Bookdetails';
import ContactUs from './pages/ContactUs';
import Errorpage from './pages/Errorpage';
import Home from './pages/Home';


const App = () => {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contactus' element={<ContactUs />} />

          <Route path='/book/:bookId' element={<Bookdetails/>} />

          <Route path='*' element={<Errorpage />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App