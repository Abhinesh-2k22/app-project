import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Frontpage from './Grocery/Frontpage';
import Beverages from './Grocery/Beverages';
import Fish from './Grocery/Fish';
import Petproducts from './Grocery/Petproducts';
import Dairy from './Grocery/Dairy';
import Oils from './Grocery/Oils';
import Fruits from './Grocery/Fruits';
import R1 from './renting/R1'
import R2 from './renting/R2'
import R3 from './renting/R3'
import Saloon from './saloon/Saloon'
import Loginpage from './general/loginpage';
import S1 from './saloon/S1';
import Allinone from './general/Allinone';
import Service from "./Service p/Service"



function App() {
  return (
    <Router>
      <Routes> 
        <Route path='/' Component={Loginpage}/>
        <Route path='/Intro' Component={Allinone}/>
        <Route path='/Saloon' Component={Saloon}/>
        <Route path='/Saloon-popup' Component={S1}/>
        <Route path='/renting-home' Component={R1}/>
        <Route path='/renting-R2' Component={R2}/>
        <Route path='/renting-R3' Component={R3}/>
        <Route path='/grocery-home' Component={Frontpage}/>
        <Route path='/grocery-Fruits' Component={Fruits}/>
        <Route path='/grocery-Oils' Component={Oils}/>
        <Route path='/grocery-Pets' Component={Petproducts}/>
        <Route path='/grocery-Beverage' Component={Beverages}/>
        <Route path='/grocery-Diary' Component={Dairy}/>
        <Route path='/grocery-Fish' Component={Fish}/>
        <Route path='/Service' Component={Service}/>
        
      </Routes>  
    </Router>
    
  )
}

export default App;
