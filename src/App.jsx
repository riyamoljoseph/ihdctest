

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Design1 from './pages/Design1';
import Design2 from './pages/Design2';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">

<Header/>
<Routes>

<Route path='/' element={<Design1/>}/>
<Route path='/design2' element={<Design2/>}/>
</Routes>

<Footer/>

    </div>
  );
}

export default App;
