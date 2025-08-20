// src/App.jsx
import React from 'react';
import './App.css';
import NetflixSeries, { Header, Footer } from './components/NetFlixSeries';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <NetflixSeries />
   
      </main>
      <Footer />
    </>
  );
}
