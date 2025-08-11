// src/components/NetFlixSeries.jsx
import React from 'react';

// import '../App.css';           // optional: import global CSS in App.jsx instead

export function Header() {
  return (
    <header>
      <h1>🎬 Netflix Series</h1>
    </header>
  );
}

export function Footer() {
  return <footer>© 2025 Suraj</footer>;
}

const qot = "/images/qot.jpg";

<img src={qot} alt="Queen of Tears" />


const NetflixSeries = () => {
 

  const name = "Queen of Tears";
  const rating = 8.2;
  const summary = "The queen of department stores ...";

  const age = 19;
  const canWatch = () => (age >= 18 ? "Watch Now" : "Not Available");
  const returnGenre = () => "RomCom";

  return (
    <article className="card">
      <div><img src={qot} alt={name} style={{ width: '40%' }} /></div>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Summary: {summary}</p>
      <p>Genre: {returnGenre()}</p>
      <button>{canWatch()}</button>
    </article>
  );
};

export default NetflixSeries;
