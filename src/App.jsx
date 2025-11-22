// src/App.jsx
import React from 'react';
import './App.css';
import NetflixSeries, { Header, Footer } from './components/NetFlixSeries';
// import "./components/Netflix.css";
import'./components/Netflix.module.css';
// import { Eventhandling } from './components/Eventhandlin';
// import{EventProps} from './components/EventProps';
import {EventPropagation} from './components/EventPropagation';

export default function App() {
  return (
    <>
    <section className="container">

      {/* <Header />
   
      <main>
        <NetflixSeries />
   
      </main> */}
        {/* <Eventhandling/> */}
       {/* <EventProps/> */}
       <EventPropagation />
      <Footer />
    </section>
    </>
  );
}
