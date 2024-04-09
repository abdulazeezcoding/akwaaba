import React from 'react';
import elmina from "../assets/images/elmina-sun.jpg";
import Navbar from './navbar';


export default function Header() {
  return (
    <>
    <div className='w-full h-screen'>
        <img src={elmina} alt="" className='top-0 left-0 w-full h-screen object-cover' />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
        <Navbar />
        <div>
            <div>
              <h1>Ayekoo! Welcome! Amaraaba!</h1>
              <p>Let's tour GH </p>
            </div>
            <div>
             implement search bar
            </div>
        </div>
    </div>
    </>
  );
}

