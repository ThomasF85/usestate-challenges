import "./FavoriteColor.css";

function FavoriteColor({ name }) {
  return (
    <div className="favorite-color">
      <h2>{name}'s favorite color is: </h2>
      <div className="favorite-color__box blue">blue</div>
      <button className="favorite-color__button" type="button">
        blue
      </button>
      <button className="favorite-color__button" type="button">
        red
      </button>
      <button className="favorite-color__button" type="button">
        green
      </button>
    </div>
  );
}

export default FavoriteColor;
