import styled from 'styled-components';
import styles from './Netflix.module.css';





export const SeriesCard = ({curElem}) => {
  const { image_url, name, rating, description, genre, cast, watch_url } = curElem;
  console.log(curElem);

  // const btnStyle={
  //         padding: "1.2rem 2.4rem",
  //         border: "none",
  //         fontSize: "1.6rem",
  //       }
  const ratingClass = rating >= 8.5 ? "super-hit": "average";

  // const ButtonSuraj = styled.button(
  //   {
  //     backgroundColor: "#e50914",
  // color: "#fff",
  // border:"none",
  // borderradius: "6px",
  // padding: "1.2rem 4rem",
  // fontWeight: 600,
  // cursor:"pointer",
  // transition: "background 0.3s",
  // borderRadius: "20px",
  //   }
  // )

  // using Template Literal
  const ButtonSuraj = styled.button`
  background-color: #e50914;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 1.2rem 4rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  border-radius: 20px;
  `

  return (
    <li className="card">
      <div>
        <img src={image_url} alt={name}  />
      </div>

      <div className="card__content">
        <h2><strong>Name:</strong> {name}</h2>
      <h3><strong>Rating: <span className={`rating ${ratingClass}`}> {rating}</span></strong></h3>
      <p><strong>Summary:</strong> {description}</p>
      <p><strong>Genre:</strong> {genre.join(", ")}</p>
      <p><strong>Cast:</strong> {cast.join(", ")}</p>
      <a href={watch_url} target="_blank" rel="noreferrer">
        {/* <button>Watch Now</button> */}
        <ButtonSuraj>Watch Now</ButtonSuraj>
      </a>
      </div>
    </li>
  );
};













