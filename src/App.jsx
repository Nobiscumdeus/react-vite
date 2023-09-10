import { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/SearchBar/SearchBar'
import Jobs from './Components/JobDiv/JobDiv'
import Value from './Components/ValueDiv/ValueDiv'
import Footer from './Components/FooterDiv/Footer'

import './index.css'



function App() {
 
  return (
    <div className='w-{85%} m-auto bg-white'>
      
        <NavBar />
        <Search />
        <Jobs />
        <Value />
        <Footer />
       
      
    </div>
  )
}

export default App
