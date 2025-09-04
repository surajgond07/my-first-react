export const SeriesCard = ({curElem}) => {
  const { image_url, name, rating, description, genre, cast, watch_url } = curElem;
  console.log(curElem);

  const btnStyle={
          padding: "1.2rem 2.4rem",
          border: "none",
          fontSize: "1.6rem",
        }

  return (
    <li className="card">
      <div>
        <img src={image_url} alt={name}  />
      </div>

      <div className="card__content">
      <h2><strong>Name:</strong> {name}</h2>
      <h3><strong>Rating:</strong> {rating}</h3>
      <p><strong>Summary:</strong> {description}</p>
      <p><strong>Genre:</strong> {genre.join(", ")}</p>
      <p><strong>Cast:</strong> {cast.join(", ")}</p>
      <a href={watch_url} target="_blank" rel="noreferrer">
        <button style={{btnStyle}}>Watch Now</button>
      </a>
      </div>
    </li>
  );
};









