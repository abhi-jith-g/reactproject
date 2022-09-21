import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

import { Bookdata } from '../Components/Booking/Bookdata';
import Book from '../Components/Booking/Book';


const Roompage = () => {
  return (
    <div>
        
        <Navbar/>
        <Book data={Bookdata}/>
        {/* <RoomPopup/> */}



    </div>
  )
}

export default Roompage