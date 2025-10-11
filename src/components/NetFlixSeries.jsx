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
  return (
    <article className={styles.card}>
      <ul className={`grid grid__three-cols`}>
        {SeriesData.map((curElem) => (
          <SeriesCard 
            key={curElem.id} 
            curElem={curElem} 
          />
        ))}
      </ul>
    </article>
  );
};

export default NetflixSeries;



