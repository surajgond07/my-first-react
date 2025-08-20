// src/components/NetFlixSeries.jsx
import React from 'react';

// import '../App.css';           // optional: import global CSS in App.jsx instead

import SeriesData from '../api/seriesData.json';

export function Header() {
  return (
    <header>
      <h1>🎬 Netflix Series</h1>
    </header>
  );
}

export function Footer() {
  return <footer>© 2025 Suraj Gond</footer>;
}


const NetflixSeries = () => {
 

  const name = "Queen of Tears";
  const rating = 8.2;
  const summary = "The queen of department stores ...";

  const age = 19;
  const canWatch = () => (age >= 18 ? "Watch Now" : "Not Available");
  // const returnGenre = () => "RomCom";

  return (
    <article className="card">
<ul>
  {
    SeriesData.map((curElem) => {
      return(
        <li key={curElem.id}>
   <div><img src={curElem.image_url} alt={curElem.name} style={{ width: '40%' }} /></div>
      <h2>Name: {curElem.name}</h2>
      <h3>Rating: {curElem.rating}</h3>
      <p>Summary: {curElem.summary}</p>
      <p>Genre: {curElem.genre}</p>
      <p>Cast: {curElem.cast}</p>
      <a href={curElem.watch_url} target ="_blank">
      <button>{canWatch()}</button>
      </a>

  </li>
       )})}
  </ul>
       </article>
  );
};

export default NetflixSeries;
