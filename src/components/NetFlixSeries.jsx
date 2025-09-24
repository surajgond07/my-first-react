import React from 'react';
import SeriesData from '../api/seriesData.json';
import { SeriesCard } from './SeriesCard';
// import './Netflix.css';
import styles from './Netflix.module.css';



export function Header() {
  return (
    <header>
      <h1 className={styles.card__heading}>🎬 Netflix Series</h1>
    </header>
  );
}

export function Footer() {
  return <footer>© 2025 Suraj Gond</footer>;
}

const NetflixSeries = () => {
  // const age = 19;
  // const canWatch = () => (age >= 18 ? "Watch Now" : "Not Available");

  return (
    <article className={styles.card}>
      <ul className={`grid grid__three-cols`}>
        {SeriesData.map((curElem) => (
          <SeriesCard 
            key={curElem.id} 
            curElem={curElem} 
            // canWatch={canWatch}   // ✅ pass canWatch as prop
          />
        ))}
      </ul>
    </article>
  );
};

export default NetflixSeries;



