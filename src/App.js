 import React from 'react'
import Navbar from './Components/Navbar'
import './App.css';
import {Action,Orginals} from './Urls'
import Banner from './Components/Banner/Banner';
import ROwPost from './Components/RowPost/ROwPost';
 
 function App() {
   return (
     <div className='App'>
      
        <Navbar />
        <Banner />
        <ROwPost url={Orginals} title='Netflix Orginals' />
       
        <ROwPost url={Action} title='Action' isSmall/>

     </div>
   )
 }
 
 export default App