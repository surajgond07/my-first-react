// src/App.jsx
import React from 'react';
import './App.css';
import NetflixSeries, { Header, Footer } from './components/NetFlixSeries';
// import "./components/Netflix.css";
import'./components/Netflix.module.css';

export default function App() {
  return (
    <>
    <section className="container">

      <Header />
      {/* <h1 className="card__heading">🎬 Netflix Series</h1> */}
      <main>
        <NetflixSeries />
   
      </main>
      <Footer />
    </section>
    </>
  );
}
