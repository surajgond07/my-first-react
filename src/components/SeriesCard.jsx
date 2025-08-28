export const SeriesCard = ({curElem}) => {
  const { image_url, name, rating, description, genre, cast, watch_url } = curElem;
  console.log(curElem);

  return (
    <li>
      <div>
        <img src={image_url} alt={name} style={{ width: "40%" }} />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Summary: {description}</p>
      <p>Genre: {genre.join(", ")}</p>
      <p>Cast: {cast.join(", ")}</p>
      <a href={watch_url} target="_blank" rel="noreferrer">
        <button>Watch Now</button>
      </a>
    </li>
  );
};









