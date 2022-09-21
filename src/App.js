import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from'./Pages/Homepage';
import Roompage from'./Pages/Roompage';
import Booking from'./Pages/Booking';
import Newbookingpage from './Pages//Newbookingpage';


function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
  
      <Route path='/Roompage' element={<Roompage/>}/>

      <Route path='/Booking' element={<Booking/>}/>

      <Route path='/Newbooking' element={<Newbookingpage/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App