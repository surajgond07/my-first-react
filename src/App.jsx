// src/App.jsx
import React from 'react';
import './App.css';
import NetflixSeries, { Header, Footer } from './components/NetFlixSeries';
// import "./components/Netflix.css";
import'./components/Netflix.module.css';
import { Eventhandling } from './components/Eventhandlin';

export default function App() {
  return (
    <>
    <section className="container">

      {/* <Header />
   
      <main>
        <NetflixSeries />
   
      </main> */}
        <Eventhandling/>
      <Footer />
    </section>
    </>
  );
}
